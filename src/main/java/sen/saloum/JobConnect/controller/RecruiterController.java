package sen.saloum.JobConnect.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sen.saloum.JobConnect.dto.JobDto;
import sen.saloum.JobConnect.dto.RecruiterDto;
import sen.saloum.JobConnect.service.JobService;
import sen.saloum.JobConnect.service.RecruiterService;

import java.util.List;

@RestController
@RequestMapping("/api/recruiters")
@RequiredArgsConstructor
public class RecruiterController {

    private final RecruiterService recruiterService;
    private final JobService jobService;

    @PostMapping
    public ResponseEntity<RecruiterDto> createRecruiter(@RequestBody RecruiterDto dto) {
        return ResponseEntity.ok(recruiterService.createRecruiter(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecruiterDto> getRecruiter(@PathVariable Long id) {
        return recruiterService.getRecruiterById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ Publier une nouvelle offre
    @PostMapping("/{recruiterId}/jobs")
    public ResponseEntity<JobDto> postJob(@PathVariable Long recruiterId, @RequestBody JobDto jobDto) {
        return ResponseEntity.ok(jobService.createJobForRecruiter(recruiterId, jobDto));
    }

    // ✅ Lister toutes les offres postées par le recruteur
    @GetMapping("/{recruiterId}/jobs")
    public ResponseEntity<List<JobDto>> getPostedJobs(@PathVariable Long recruiterId) {
        return ResponseEntity.ok(jobService.getJobsByRecruiter(recruiterId));
    }
}
