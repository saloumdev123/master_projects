package sen.saloum.JobConnect.controller;

import jakarta.mail.MessagingException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sen.saloum.JobConnect.dto.JobApplicationDto;
import sen.saloum.JobConnect.service.FileStorageService;
import sen.saloum.JobConnect.service.JobApplicationService;

import java.time.OffsetDateTime;
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
            @RequestParam("fullName") String fullName,
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
            // Store the uploaded resume
            String storedFilePath = fileStorageService.storeFile(resume);

            // Build the DTO
            JobApplicationDto jobApplicationDto = new JobApplicationDto();
            jobApplicationDto.setFullName(fullName);  // use fullName directly
            jobApplicationDto.setEmail(email);
            jobApplicationDto.setPhoneNumber(phone);
            jobApplicationDto.setResume(storedFilePath);
            jobApplicationDto.setCountry(country);
            jobApplicationDto.setCity(city);
            jobApplicationDto.setJobTitle(jobTitle);
            jobApplicationDto.setJobDescription(jobDescription);
            jobApplicationDto.setJobId(jobId);
            jobApplicationDto.setJobApplicationStatus(status);
            jobApplicationDto.setDateCreated(OffsetDateTime.now()); // set current time

            jobApplicationService.create(jobApplicationDto);

            return ResponseEntity.ok(Map.of("message", "Application submitted successfully."));
        } catch (Exception e) {
            return ResponseEntity
                    .internalServerError()
                    .body("Error while processing the application: " + e.getMessage());
        }
    }


}
