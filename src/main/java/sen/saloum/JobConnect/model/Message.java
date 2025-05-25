package sen.saloum.JobConnect.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User sender;
    @ManyToOne
    private User recipient;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;
    private OffsetDateTime sentAt;
    private boolean isRead;
    @ManyToOne
    private Message parentMessage;
}
