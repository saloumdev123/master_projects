package sen.saloum.JobConnect.model;

import jakarta.persistence.*;
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

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "recruteur_id")
    private Recruiter recruiter;

}
