package sen.saloum.JobConnect.controller;

import jakarta.mail.MessagingException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sen.saloum.JobConnect.dto.SubscriptionDto;
import sen.saloum.JobConnect.mailSubscription.EmailService;
import sen.saloum.JobConnect.mailSubscription.JMSSubscriptionService;
import sen.saloum.JobConnect.model.Subscription;
import sen.saloum.JobConnect.repos.JobRepository;
import sen.saloum.JobConnect.repos.SubscriptionRepository;
import sen.saloum.JobConnect.service.SubscriptionService;

import java.util.List;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {


    private final SubscriptionService subscriptionService;
    private final SubscriptionRepository subscriptionRepository;
    private final EmailService emailService;
    private final JMSSubscriptionService jmsSubscriptionService;

    public SubscriptionController(SubscriptionService subscriptionService, SubscriptionRepository subscriptionRepository, EmailService emailService, JMSSubscriptionService jmsSubscriptionService) {
        this.subscriptionService = subscriptionService;
        this.subscriptionRepository = subscriptionRepository;
        this.emailService = emailService;
        this.jmsSubscriptionService = jmsSubscriptionService;
    }

    @PostMapping("/simple-subscription")
    public ResponseEntity<?> simpleSubscribe(@RequestBody SubscriptionDto dto) {
        // Crée l'objet à sauvegarder
        Subscription subscription = new Subscription();
        subscription.setEmail(dto.getEmail());

        // Sauvegarde dans la base
        Subscription saved = subscriptionRepository.save(subscription);

        try {
            // Envoi de l'email avec JMSSubscriptionService
            jmsSubscriptionService.processReservation(dto, saved.getId());
        } catch (MessagingException e) {
            e.printStackTrace(); // Ou log.error(...)
            return ResponseEntity.status(500).body("Erreur lors de l'envoi de l'email");
        }

        return ResponseEntity.ok().body("Abonnement créé et email envoyé");
    }

    @GetMapping
    public ResponseEntity<List<SubscriptionDto>> getAll() {
        return ResponseEntity.ok(subscriptionService.getAll());
    }
}
