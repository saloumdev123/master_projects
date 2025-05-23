package sen.saloum.JobConnect.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sen.saloum.JobConnect.model.JobApplication;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    // Tu peux ajouter des méthodes personnalisées ici si besoin
}
