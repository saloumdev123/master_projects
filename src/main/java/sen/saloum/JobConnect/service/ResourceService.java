package sen.saloum.JobConnect.service;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.ResourceDto;
import sen.saloum.JobConnect.model.Resource;
import sen.saloum.JobConnect.repos.ResourceRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ResourceService {

    private final ResourceRepository resourceRepository;

    public ResourceService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    public ResourceDto create(ResourceDto dto) {
        Resource entity = toEntity(dto);
        Resource saved = resourceRepository.save(entity);
        return toDto(saved);
    }

    public Optional<ResourceDto> update(Long id, ResourceDto dto) {
        return resourceRepository.findById(id).map(existing -> {
            existing.setTitle(dto.getTitle());
            existing.setResourceContent(dto.getResourceContent());
            existing.setDownloadLink(dto.getDownloadLink());
            Resource updated = resourceRepository.save(existing);
            return toDto(updated);
        });
    }


    public boolean delete(Long id) {
        if (resourceRepository.existsById(id)) {
            resourceRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<ResourceDto> findById(Long id) {
        return resourceRepository.findById(id).map(this::toDto);
    }

    public List<ResourceDto> findAll() {
        return resourceRepository.findAll().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public ResourceDto toDto(Resource entity) {
        ResourceDto dto = new ResourceDto();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }

    public Resource toEntity(ResourceDto dto) {
        Resource entity = new Resource();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }
}
