package sen.saloum.JobConnect.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sen.saloum.JobConnect.dto.JobDto;
import sen.saloum.JobConnect.model.Job;




@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

}
