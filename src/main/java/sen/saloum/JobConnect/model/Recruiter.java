package sen.saloum.JobConnect.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;
@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Recruiter extends User{

    private String companyName;
    private String companyWebsite;
    private String companyAddress;
    private String companyLogoUrl;
    @OneToMany(mappedBy = "recruiter")
    private List<Job> jobsPosted;



}
