package sen.saloum.JobConnect.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "user_type")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String password;
    private boolean enabled = true;
    private String fullName;
    private String phoneNumber;

    @OneToMany(mappedBy = "sender")
    private List<Message> sentMessages;

    @OneToMany(mappedBy = "recipient")
    private List<Message> receivedMessages;

}
