package sen.saloum.JobConnect.controller;

import jakarta.mail.MessagingException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sen.saloum.JobConnect.dto.SubscriptionDto;
import sen.saloum.JobConnect.mailSubscription.JMSSubscriptionService;
import sen.saloum.JobConnect.service.SubscriptionService;

import java.util.List;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {


    private final SubscriptionService subscriptionService;

    private final JMSSubscriptionService jmsSubscriptionService;

    public SubscriptionController(SubscriptionService subscriptionService, JMSSubscriptionService jmsSubscriptionService) {
        this.subscriptionService = subscriptionService;
        this.jmsSubscriptionService = jmsSubscriptionService;
    }

    @PostMapping
    public ResponseEntity<SubscriptionDto> create(@RequestBody SubscriptionDto dto) {
        SubscriptionDto created = subscriptionService.create(dto);

        try {
            jmsSubscriptionService.processReservation(dto, created.getId());
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(created);
    }

    @GetMapping
    public ResponseEntity<List<SubscriptionDto>> getAll() {
        return ResponseEntity.ok(subscriptionService.getAll());
    }
}
