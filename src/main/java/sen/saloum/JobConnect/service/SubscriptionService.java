package sen.saloum.JobConnect.service;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.JobDto;
import sen.saloum.JobConnect.dto.SubscriptionDto;
import sen.saloum.JobConnect.model.Subscription;
import sen.saloum.JobConnect.repos.JobRepository;
import sen.saloum.JobConnect.repos.SubscriptionRepository;

import java.time.OffsetDateTime;
import java.util.List;

@Service
public class SubscriptionService {


    private final SubscriptionRepository subscriptionRepository;
    private final JobRepository jobRepository;

    public SubscriptionService(SubscriptionRepository subscriptionRepository, JobRepository jobRepository) {
        this.subscriptionRepository = subscriptionRepository;
        this.jobRepository = jobRepository;
    }

    public SubscriptionDto create(SubscriptionDto dto) {
        Subscription subscription = toEntity(dto);
        Subscription saved = subscriptionRepository.save(subscription);
        return toDto(saved);
    }

    public SubscriptionDto toDto(Subscription entity) {
        SubscriptionDto dto = new SubscriptionDto();
        dto.setEmail(entity.getEmail());

        return dto;
    }

    public Subscription toEntity(SubscriptionDto dto) {
        Subscription entity = new Subscription();
        entity.setEmail(dto.getEmail());
        return entity;
    }

    public List<SubscriptionDto> getAll() {
        return subscriptionRepository.findAll()
                .stream()
                .map(this::toDto)
                .toList();
    }
}
