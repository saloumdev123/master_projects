package sen.saloum.JobConnect.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sen.saloum.JobConnect.dto.JobDto;
import sen.saloum.JobConnect.service.JobService;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin
public class JobController {


    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping
    public ResponseEntity<Page<JobDto>> getAllJobs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        return ResponseEntity.ok(jobService.getAllJobs(page, size));
    }


    @GetMapping("/{id}")
    public ResponseEntity<JobDto> getJobById(@PathVariable Long id) {
        return ResponseEntity.ok(jobService.getJobById(id));
    }
    @PostMapping
    public ResponseEntity<JobDto> createJob(@RequestBody JobDto jobDto) {
        JobDto savedJob = jobService.saveJob(jobDto);
        return ResponseEntity.ok(savedJob);
    }
    @PostMapping("/jobs/bulk")
    public ResponseEntity<?> createJobs(@RequestBody List<JobDto> jobDtos) {
        List<JobDto> savedJobs = jobService.saveAll(jobDtos);
        return ResponseEntity.ok(savedJobs);
    }

}
