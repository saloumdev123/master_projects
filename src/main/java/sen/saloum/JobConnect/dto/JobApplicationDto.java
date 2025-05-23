package sen.saloum.JobConnect.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.OffsetDateTime;

@Data
public class JobApplicationDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String country;
    private String city;
    private String jobTitle;
    private String jobDescription;
    private String phone;
    private String resume;
    private String jobApplicationStatus;
    private Long jobId;
    private String message;

}
