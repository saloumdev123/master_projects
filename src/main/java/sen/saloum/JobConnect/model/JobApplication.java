package sen.saloum.JobConnect.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.internal.build.AllowNonPortable;
import org.springframework.web.multipart.MultipartFile;

import java.time.OffsetDateTime;

@Entity
@Data
@NoArgsConstructor
public class JobApplication {
    @Id
    @GeneratedValue
    private Long id;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String resume;
    private String country;
    private String city;
    private String jobTitle;
    private String jobDescription;
    private String jobApplicationStatus;
    private OffsetDateTime dateCreated;

    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job job;
    @ManyToOne
    @JoinColumn(name = "candidat_id")
    private Candidat candidat;
}
