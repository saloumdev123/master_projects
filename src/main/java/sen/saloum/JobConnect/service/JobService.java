package sen.saloum.JobConnect.service;

import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.JobDto;
import sen.saloum.JobConnect.model.Category;
import sen.saloum.JobConnect.model.Job;
import sen.saloum.JobConnect.model.Recruiter;
import sen.saloum.JobConnect.repos.CategoryRepository;
import sen.saloum.JobConnect.repos.JobRepository;
import sen.saloum.JobConnect.repos.RecruiterRepository;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobService {

    private final JobRepository jobRepository;
    private final RecruiterRepository recruiterRepository;
    private final CategoryRepository categoryRepository;

    public JobService(JobRepository jobRepository, RecruiterRepository recruiterRepository, CategoryRepository categoryRepository) {
        this.jobRepository = jobRepository;
        this.recruiterRepository = recruiterRepository;
        this.categoryRepository = categoryRepository;
    }

    public Page<JobDto> getAllJobs(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Job> jobPage = jobRepository.findAll(pageable);
        return jobPage.map(this::toDto);
    }

    public JobDto getJobById(Long id) {
        return toDto(jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found")));
    }

    public JobDto saveJob(JobDto jobDto) {
        if (jobDto.getDatePosted() == null) {
            jobDto.setDatePosted(OffsetDateTime.now());
        }
        Job job = toEntity(jobDto);

        if (jobDto.getRecruiterId() != null) {
            Recruiter recruiter = recruiterRepository.findById(jobDto.getRecruiterId())
                    .orElseThrow(() -> new RuntimeException("Recruiter not found"));
            job.setRecruiter(recruiter);
        }

        if (jobDto.getCategoryId() != null) {
            Category category = categoryRepository.findById(jobDto.getCategoryId())
                    .orElseThrow(() -> new RuntimeException("Category not found"));
            job.setCategory(category);
        }
        Job savedJob = jobRepository.save(job);
        return toDto(savedJob);
    }

    public JobDto createJobForRecruiter(Long recruiterId, JobDto jobDto) {
        Recruiter recruiter = recruiterRepository.findById(recruiterId)
                .orElseThrow(() -> new RuntimeException("Recruiter not found"));
        Job job = toEntity(jobDto);
        job.setRecruiter(recruiter);
        Job saved = jobRepository.save(job);
        return toDto(saved);
    }

    public List<JobDto> getJobsByRecruiter(Long recruiterId) {
        return jobRepository.findByRecruiterId(recruiterId).stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public void deleteJob(Long jobId) {
        jobRepository.deleteById(jobId);
    }

    public JobDto updateJob(Long jobId, JobDto dto) {
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));
        BeanUtils.copyProperties(dto, job, "id", "recruiter");
        Job updated = jobRepository.save(job);
        return toDto(updated);
    }
    public List<JobDto> saveAll(List<JobDto> jobDtos) {
        List<Job> jobs = jobDtos.stream()
                .map(this::toEntity)
                .collect(Collectors.toList());

        List<Job> savedJobs = jobRepository.saveAll(jobs);

        return savedJobs.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public JobDto toDto(Job job) {
        JobDto dto = new JobDto();
        BeanUtils.copyProperties(job, dto);
        if (job.getRecruiter() != null) {
            dto.setRecruiterId(job.getRecruiter().getId());
            dto.setRecruiterCompanyName(job.getRecruiter().getCompanyName());
            dto.setCompanyLogoUrl(job.getRecruiter().getCompanyLogoUrl());
        }
        if (job.getCategory() != null) {
            dto.setCategoryId(job.getCategory().getId());
            dto.setCategoryName(job.getCategory().getName());
        }
        return dto;
    }

    public Job toEntity(JobDto dto) {
        Job job = new Job();
        BeanUtils.copyProperties(dto, job);
        if (dto.getDatePosted() != null) {
            job.setDatePosted(dto.getDatePosted());
        } else {
            job.setDatePosted(OffsetDateTime.now());
        }
        return job;
    }
}
