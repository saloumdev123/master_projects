package sen.saloum.JobConnect.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Candidat extends User  {

    private String cvLink;
    @OneToMany(mappedBy = "candidat")
    private List<JobApplication> applications;
}
