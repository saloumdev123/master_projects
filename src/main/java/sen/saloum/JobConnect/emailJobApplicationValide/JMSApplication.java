package sen.saloum.JobConnect.emailJobApplicationValide;


import lombok.Data;

import java.time.OffsetDateTime;

@Data
public class JMSApplication {

    private String subscriberId;
    private String fullName;
    private String email;
    private String resume;
    private String phoneNumber;
    private String title;
    private String body;
    private OffsetDateTime dateDebut;
    private String city;
    private String country;

    public JMSApplication() {
    }


    public JMSApplication(String subscriberId, String fullName, String email, String title, String body,
                          OffsetDateTime dateDebut) {
        this.subscriberId = subscriberId;
        this.fullName = fullName;
        this.email = email;
        this.title = title;
        this.body = body;
        this.dateDebut = dateDebut;
    }
}
