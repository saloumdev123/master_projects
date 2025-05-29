package sen.saloum.JobConnect.dto;

import lombok.Data;
import java.util.List;

@Data
public class CategoryDto {
    private Long id;
    private String name;
    private String description;
    private int jobsCount;
    private String iconClass;
}
