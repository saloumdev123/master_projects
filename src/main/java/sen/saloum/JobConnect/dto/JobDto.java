package sen.saloum.JobConnect.dto;

import lombok.Data;

import java.time.OffsetDateTime;


@Data
public class JobDto {
    private Long id;
    private String title;
    private String description;
    private String employmentType;
    private String location;
    private String jobType;
    private int yearExperience;
    private OffsetDateTime datePosted;
    private String pay;
    private String requirements;

    private Long categoryId;
    private String categoryName;
    private Long recruiterId;
    private String recruiterCompanyName;

}
