package sen.saloum.JobConnect.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.OffsetDateTime;

@Data
public class JobApplicationDto {
    private Long id;
    private String country;
    private String city;
    private String jobTitle;
    private String jobDescription;
    private String jobApplicationStatus;

    private Long jobId;
    private String jobTitleFromJob;

    private Long candidatId;
    private String candidatFullName;

}
