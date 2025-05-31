package sen.saloum.JobConnect.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.internal.build.AllowNonPortable;

import java.time.OffsetDateTime;

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
    private OffsetDateTime datePosted;
    private double pay;
    private String requirements;
    private String fullDescription;
    private String recruiterCompanyName;
    private String categoryName;
    private String companyLogoUrl;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "recruteur_id")
    private Recruiter recruiter;

}
