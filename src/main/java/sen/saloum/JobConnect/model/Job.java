package sen.saloum.JobConnect.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.internal.build.AllowNonPortable;

@Entity
@Data
@NoArgsConstructor
@AllowNonPortable
public class Job {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String description;
    private String employmentType;
    private String location;
    private String jobType;
    private int yearExperience;
    private String datePosted;
    private String pay;
    private String requirements;
    private String fullDescription;
}
