package sen.saloum.JobConnect.emailJobApplicationValide;


import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.JobApplicationDto;
import sen.saloum.JobConnect.dto.SubscriptionDto;
import sen.saloum.JobConnect.mailSubscription.EmailService;
import sen.saloum.JobConnect.mailSubscription.JMSubscription;

import java.time.OffsetDateTime;

@Service
public class JMSApplicationService {


    private final EmailServiceApp emailServiceApp;

    public JMSApplicationService(EmailServiceApp emailServiceApp) {
        this.emailServiceApp = emailServiceApp;
    }

    public JMSApplication prepareJMSReservation(JobApplicationDto jobApplicationDto, Long createdId) {
        JMSApplication jmsApplication = new JMSApplication();
        jmsApplication.setSubscriberId(createdId.toString());
        jmsApplication.setFirstName(jobApplicationDto.getFirstName());
        jmsApplication.setLastName(jobApplicationDto.getLastName());
        jmsApplication.setEmail(jobApplicationDto.getEmail());
        jmsApplication.setTitle("Job application received successfully");
        jmsApplication.setBody("Votre demande a ete confirmée avec l'ID : " + createdId);
        jmsApplication.setDateDebut(OffsetDateTime.now());
        return jmsApplication;
    }

    public void processReservation(JobApplicationDto jobApplicationDto, Long createdId) throws MessagingException {
        JMSApplication jmsApplication = prepareJMSReservation(jobApplicationDto, createdId);
        sendApplicationEmail(jmsApplication);
    }
    public void sendApplicationEmail(JMSApplication jmsApplication) throws MessagingException {
        emailServiceApp.sendApplicationEmail(jmsApplication);

    }
}












































































