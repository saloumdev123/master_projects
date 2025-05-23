package sen.saloum.JobConnect.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import sen.saloum.JobConnect.dto.JobApplicationDto;
import sen.saloum.JobConnect.service.FileStorageService;
import sen.saloum.JobConnect.service.JobApplicationService;

import java.util.Map;

@RestController
@RequestMapping("/api/job-applications")
public class JobApplicationController {


    private final JobApplicationService jobApplicationService;
    private final FileStorageService fileStorageService;

    public JobApplicationController(JobApplicationService jobApplicationService, FileStorageService fileStorageService) {
        this.jobApplicationService = jobApplicationService;
        this.fileStorageService = fileStorageService;
    }

    @PostMapping(value = "/apply", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> applyForJob(
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("email") String email,
            @RequestParam("country") String country,
            @RequestParam("city") String city,
            @RequestParam("phone") String phone,
            @RequestParam("jobId") Long jobId,
            @RequestParam("jobTitle") String jobTitle,
            @RequestParam("jobDescription") String jobDescription,
            @RequestParam("jobApplicationStatus") String status,
            @RequestParam("resume") MultipartFile resume
            ) {
        try {
            String storedFilePath = fileStorageService.storeFile(resume);

            JobApplicationDto jobApplicationDto = new JobApplicationDto();
            jobApplicationDto.setFirstName(firstName);
            jobApplicationDto.setLastName(lastName);
            jobApplicationDto.setEmail(email);
            jobApplicationDto.setCountry(country);
            jobApplicationDto.setCity(city);
            jobApplicationDto.setJobTitle(jobTitle);
            jobApplicationDto.setJobDescription(jobDescription);
            jobApplicationDto.setPhone(phone);
            jobApplicationDto.setJobId(jobId);
            jobApplicationDto.setResume(storedFilePath);

            jobApplicationService.create(jobApplicationDto);
            return ResponseEntity.ok(Map.of("message", "Application submitted successfully."));

        } catch (Exception e) {
            return ResponseEntity
                    .internalServerError()
                    .body("Error while processing the application: " + e.getMessage());
        }
    }
}
