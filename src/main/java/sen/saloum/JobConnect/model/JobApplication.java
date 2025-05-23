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
@AllowNonPortable
public class JobApplication {
    @Id
    @GeneratedValue
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String country;
    private String city;
    private String jobTitle;
    private String jobDescription;
    private String phone;
    private String  resume;
    private String jobApplicationStatus;

    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job job;
}
