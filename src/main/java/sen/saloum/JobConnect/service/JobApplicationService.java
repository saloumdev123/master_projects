package sen.saloum.JobConnect.service;

import jakarta.mail.MessagingException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.JobApplicationDto;
import sen.saloum.JobConnect.dto.JobDto;
import sen.saloum.JobConnect.emailJobApplicationValide.EmailServiceApp;
import sen.saloum.JobConnect.emailJobApplicationValide.JMSApplication;
import sen.saloum.JobConnect.model.JobApplication;
import sen.saloum.JobConnect.repos.JobApplicationRepository;
import sen.saloum.JobConnect.repos.JobRepository;

@Service
public class JobApplicationService {
    private final JobApplicationRepository jobApplicationRepository;
    private final JobRepository jobRepository;
    private final EmailServiceApp emailServiceapp;

    public JobApplicationService(JobApplicationRepository jobApplicationRepository,
                                 JobRepository jobRepository, EmailServiceApp emailServiceapp) {
        this.jobApplicationRepository = jobApplicationRepository;
        this.jobRepository = jobRepository;
        this.emailServiceapp = emailServiceapp;
    }

    public JobApplicationDto create(JobApplicationDto dto) throws MessagingException {
        JobApplication entity = toEntity(dto);
        entity.setJob(jobRepository.findById(dto.getJobId()).orElseThrow());

        // Ici, on initialise la dateCreated si elle n'est pas déjà définie
        if (entity.getDateCreated() == null) {
            entity.setDateCreated(java.time.OffsetDateTime.now());
        }

        JobApplication saved = jobApplicationRepository.save(entity);

        JMSApplication jmsApplication = new JMSApplication();
        jmsApplication.setFullName(saved.getFullName());
        jmsApplication.setEmail(saved.getEmail());
        jmsApplication.setResume(saved.getResume());
        jmsApplication.setPhoneNumber(saved.getPhoneNumber());
        jmsApplication.setTitle(saved.getJob().getTitle());
        jmsApplication.setBody(saved.getJob().getDescription());
        jmsApplication.setCountry(saved.getCountry());
        jmsApplication.setCity(saved.getCity());
        jmsApplication.setDateDebut(saved.getDateCreated());

        // Validation de l'email avant envoi
        if (jmsApplication.getEmail() == null || jmsApplication.getEmail().isEmpty()) {
            throw new IllegalArgumentException("Email address is required to send the application email.");
        }

        emailServiceapp.sendApplicationEmail(jmsApplication);

        return toDto(saved);
    }

    public JobApplicationDto toDto(JobApplication app) {
        JobDto jobDto = new JobDto();
        BeanUtils.copyProperties(app.getJob(), jobDto);
        JobApplicationDto dto = new JobApplicationDto();
        BeanUtils.copyProperties(app, dto);
        dto.setJobId(app.getJob().getId());
        return dto;
    }

    public JobApplication toEntity(JobApplicationDto dto) {
        JobApplication entity = new JobApplication();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }
}
