package sen.saloum.JobConnect.service;

import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.CategoryDto;
import sen.saloum.JobConnect.model.Category;
import sen.saloum.JobConnect.model.Job;
import sen.saloum.JobConnect.repos.CategoryRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // Create
    public CategoryDto create(CategoryDto dto) {
        Category category = dtoToEntity(dto);
        return entityToDto(categoryRepository.save(category));
    }

    // Read all
    public List<CategoryDto> findAll() {
        return categoryRepository.findAll().stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
    }

    // Read by id
    public Optional<CategoryDto> findById(Long id) {
        return categoryRepository.findById(id)
                .map(this::entityToDto);
    }

    // Update
    public Optional<CategoryDto> update(Long id, CategoryDto dto) {
        return categoryRepository.findById(id).map(existing -> {
            existing.setName(dto.getName());
            existing.setDescription(dto.getDescription());
            return entityToDto(categoryRepository.save(existing));
        });
    }

    // Delete
    public boolean delete(Long id) {
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Mapping methods
    private Category dtoToEntity(CategoryDto dto) {
        Category category = new Category();
        category.setId(dto.getId());
        category.setName(dto.getName());
        category.setDescription(dto.getDescription());
        return category;
    }

    private CategoryDto entityToDto(Category entity) {
        CategoryDto dto = new CategoryDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setDescription(entity.getDescription());
        return dto;
    }
}
