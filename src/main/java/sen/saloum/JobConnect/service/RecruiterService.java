package sen.saloum.JobConnect.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.JobDto;
import sen.saloum.JobConnect.dto.RecruiterDto;
import sen.saloum.JobConnect.dto.ResourceDto;
import sen.saloum.JobConnect.enums.Role;
import sen.saloum.JobConnect.model.Job;
import sen.saloum.JobConnect.model.Recruiter;
import sen.saloum.JobConnect.repos.RecruiterRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecruiterService {

    private final RecruiterRepository recruiterRepository;

    public RecruiterDto createRecruiter(RecruiterDto dto) {
        Recruiter recruiter = new Recruiter();
        BeanUtils.copyProperties(dto, recruiter);
        recruiter.setRole(Role.RECRUITER);
        Recruiter saved = recruiterRepository.save(recruiter);
        BeanUtils.copyProperties(saved, dto);
        return dto;
    }
    public List<RecruiterDto> findAll() {
        return recruiterRepository.findAll().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public Optional<RecruiterDto> getRecruiterById(Long id) {
        return recruiterRepository.findById(id).map(this::toDto);
    }


    public RecruiterDto toDto(Recruiter entity) {
        RecruiterDto dto = new RecruiterDto();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }

    public Recruiter toEntity(RecruiterDto dto) {
        Recruiter entity = new Recruiter();
        BeanUtils.copyProperties(dto, entity);

        // Ne pas mapper jobsPosted ici (gestion séparée)
        entity.setJobsPosted(null);
        return entity;
    }
}
