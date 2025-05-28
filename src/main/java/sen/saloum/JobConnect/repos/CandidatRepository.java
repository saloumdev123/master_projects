package sen.saloum.JobConnect.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import sen.saloum.JobConnect.model.Candidat;

public interface CandidatRepository extends JpaRepository<Candidat, Long> {
    // Tu peux ajouter des méthodes personnalisées ici si besoin, par exemple :
    // Optional<Candidat> findByEmail(String email);
}