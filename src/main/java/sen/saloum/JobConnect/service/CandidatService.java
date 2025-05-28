package sen.saloum.JobConnect.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.CandidatDto;
import sen.saloum.JobConnect.dto.JobApplicationDto;
import sen.saloum.JobConnect.enums.Role;
import sen.saloum.JobConnect.model.Candidat;
import sen.saloum.JobConnect.model.JobApplication;
import sen.saloum.JobConnect.repos.CandidatRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CandidatService {

    private final CandidatRepository candidatRepository;

    @Transactional
    public CandidatDto createCandidat(CandidatDto dto) {
        Candidat candidat = new Candidat();
        BeanUtils.copyProperties(dto, candidat);
        candidat.setRole(Role.CANDIDAT);
        Candidat saved = candidatRepository.save(candidat);
        BeanUtils.copyProperties(saved, dto);
        return dto;
    }


    public Optional<CandidatDto> getCandidatById(Long id) {
        return candidatRepository.findById(id).map(this::toDto);
    }

    public CandidatDto toDto(Candidat entity) {
        CandidatDto dto = new CandidatDto();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }

    public Candidat toEntity(CandidatDto dto) {
        Candidat entity = new Candidat();
        BeanUtils.copyProperties(dto, entity);

        entity.setApplications(null);
        return entity;
    }
}
