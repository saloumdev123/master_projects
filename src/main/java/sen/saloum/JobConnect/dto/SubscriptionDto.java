package sen.saloum.JobConnect.dto;

import lombok.Data;

import java.time.OffsetDateTime;

@Data
public class SubscriptionDto {

    private String email;

    public SubscriptionDto() {
    }

    public SubscriptionDto(String email) {
        this.email = email;

    }
}
