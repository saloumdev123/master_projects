package sen.saloum.JobConnect.service;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.ResourceDto;
import sen.saloum.JobConnect.model.Resource;
import sen.saloum.JobConnect.repos.ResourceRepository;

import java.util.List;

@Service
public class ResourceService {

    private final ResourceRepository resourceRepository;

    public ResourceService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    public List<ResourceDto> getAllResources() {
        return resourceRepository.findAll()
                .stream()
                .map(this::toDto)
                .toList();
    }

    public ResourceDto getResourceById(Long id) {
        return toDto(resourceRepository.findById(id).orElseThrow());
    }

    public ResourceDto toDto(Resource resource) {
        ResourceDto dto = new ResourceDto();
        BeanUtils.copyProperties(resource, dto);
        return dto;
    }

    public Resource toEntity(ResourceDto dto) {
        Resource entity = new Resource();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    public ResourceDto addResource(ResourceDto dto) {
        if (dto.getImage() == null || dto.getImage().isEmpty()) {
            dto.setImage("https://example.com/default-book-image.jpg"); // URL de ton image par défaut
        }
        Resource saved = resourceRepository.save(toEntity(dto));
        return toDto(saved);
    }


}
