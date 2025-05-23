package sen.saloum.JobConnect.dto;

import lombok.Data;

import java.time.OffsetDateTime;

@Data
public class SubscriptionDto {
    private Long id;
    private JobDto job;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String message;
    private String email;
    private String title;
    private OffsetDateTime dateCreated;
    private OffsetDateTime lastUpdated;

}
