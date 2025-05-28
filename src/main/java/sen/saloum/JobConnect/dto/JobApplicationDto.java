package sen.saloum.JobConnect.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.OffsetDateTime;

@Data
public class JobApplicationDto {
    private Long id;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String resume;
    private String country;
    private String city;
    private String jobTitle;
    private String jobDescription;
    private String jobApplicationStatus;

    private OffsetDateTime dateCreated;

    private Long jobId;
    private String jobTitleFromJob;

    private Long candidatId;
    private String candidatFullName;

}
