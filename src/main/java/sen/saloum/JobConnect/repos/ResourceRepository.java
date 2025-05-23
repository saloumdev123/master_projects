package sen.saloum.JobConnect.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sen.saloum.JobConnect.model.Resource;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {
}
