package sen.saloum.JobConnect.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sen.saloum.JobConnect.dto.ResourceDto;
import sen.saloum.JobConnect.service.GoogleBooksService;
import sen.saloum.JobConnect.service.ResourceService;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {


    private final ResourceService resourceService;
    private final GoogleBooksService googleBooksService;

    public ResourceController(ResourceService resourceService, GoogleBooksService googleBooksService) {
        this.resourceService = resourceService;
        this.googleBooksService = googleBooksService;
    }
    @GetMapping("/search")
    public ResponseEntity<List<ResourceDto>> searchBooks(@RequestParam String q) {
        return ResponseEntity.ok(googleBooksService.searchBooks(q));
    }

    @GetMapping
    public ResponseEntity<List<ResourceDto>> getAllResources() {
        return ResponseEntity.ok(resourceService.getAllResources());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResourceDto> getById(@PathVariable Long id) {
        return ResponseEntity.ok(resourceService.getResourceById(id));
    }

    @PostMapping
    public ResponseEntity<ResourceDto> createResource(@RequestBody ResourceDto dto) {
        ResourceDto created = resourceService.addResource(dto);
        return ResponseEntity.ok(created);
    }
}
