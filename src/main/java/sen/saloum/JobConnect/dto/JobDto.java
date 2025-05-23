package sen.saloum.JobConnect.dto;

import lombok.Data;


@Data
public class JobDto {
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
}
