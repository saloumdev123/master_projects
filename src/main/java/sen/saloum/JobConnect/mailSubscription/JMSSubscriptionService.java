package sen.saloum.JobConnect.mailSubscription;


import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.SubscriptionDto;

import java.time.OffsetDateTime;

@Service
public class JMSSubscriptionService {


    private final EmailService emailService;

    public JMSSubscriptionService(EmailService emailService) {
        this.emailService = emailService;
    }

    public JMSubscription prepareJMSReservation(SubscriptionDto subscriptionDto, Long createdId) {
        JMSubscription jmSubscription = new JMSubscription();
        jmSubscription.setSubscriberId(createdId.toString());
        jmSubscription.setEmail(subscriptionDto.getEmail());
        jmSubscription.setTitle("Suscription reussie");
        jmSubscription.setBody("Votre réservation a été confirmée avec l'ID : " + createdId);
        jmSubscription.setDateDebut(OffsetDateTime.now());
        return jmSubscription;
    }

    public void processReservation(SubscriptionDto subscriptionDto, Long createdId) throws MessagingException {
        JMSubscription jmSubscription = prepareJMSReservation(subscriptionDto, createdId);
        sendSubscriptionEmail(jmSubscription);
    }
    public void sendSubscriptionEmail(JMSubscription subscription) throws MessagingException {
        emailService.sendSubscriptionEmail(subscription);

    }
}












































































