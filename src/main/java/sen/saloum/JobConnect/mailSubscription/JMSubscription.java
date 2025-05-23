package sen.saloum.JobConnect.mailSubscription;


import lombok.Data;

import java.time.OffsetDateTime;

@Data
public class JMSubscription {

    private String subscriberId;
    private String firstName;
    private String lastName;
    private String email;
    private String title;
    private String body;
    private OffsetDateTime dateDebut;
    private OffsetDateTime dateRetour;

    public JMSubscription() {
    }


    public JMSubscription(String subscriberId, String firstName, String lastName, String email, String title, String body, OffsetDateTime dateDebut, OffsetDateTime dateRetour) {
        this.subscriberId = subscriberId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.title = title;
        this.body = body;
        this.dateDebut = dateDebut;
        this.dateRetour = dateRetour;
    }
}
