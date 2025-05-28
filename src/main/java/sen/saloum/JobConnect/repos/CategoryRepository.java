package sen.saloum.JobConnect.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import sen.saloum.JobConnect.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
