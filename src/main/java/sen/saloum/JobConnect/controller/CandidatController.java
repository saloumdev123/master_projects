package sen.saloum.JobConnect.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sen.saloum.JobConnect.dto.CandidatDto;
import sen.saloum.JobConnect.service.CandidatService;

import java.util.Optional;

@RestController
@RequestMapping("/api/candidats")
@RequiredArgsConstructor
public class CandidatController {

    private final CandidatService candidatService;

    @PostMapping
    public ResponseEntity<CandidatDto> createCandidat(@RequestBody CandidatDto dto) {
        CandidatDto saved = candidatService.createCandidat(dto);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CandidatDto> getCandidatById(@PathVariable Long id) {
        Optional<CandidatDto> candidatOpt = candidatService.getCandidatById(id);
        return candidatOpt.map(ResponseEntity::ok)
                          .orElse(ResponseEntity.notFound().build());
    }
}
