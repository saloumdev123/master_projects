package sen.saloum.JobConnect.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import sen.saloum.JobConnect.dto.ResourceDto;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class GoogleBooksService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes?q=";

    public List<ResourceDto> searchBooks(String keyword) {
        String url = GOOGLE_BOOKS_API + keyword;
        ResponseEntity<Map> response = restTemplate.getForEntity(url, Map.class);

        List<Map<String, Object>> items = (List<Map<String, Object>>) response.getBody().get("items");
        List<ResourceDto> books = new ArrayList<>();

        if (items != null) {
            for (Map<String, Object> item : items) {
                Map<String, Object> volumeInfo = (Map<String, Object>) item.get("volumeInfo");

                ResourceDto dto = new ResourceDto();
                dto.setTitle((String) volumeInfo.get("title"));
                dto.setAuthor(((List<String>) volumeInfo.get("authors")).get(0));
                dto.setCategory(((List<String>) volumeInfo.get("categories")).get(0));
                dto.setAuthorRole("Author");

                dto.setResourceContent((String) volumeInfo.get("description"));
                Map<String, String> imageLinks = (Map<String, String>) volumeInfo.get("imageLinks");
                dto.setImage(imageLinks != null ? imageLinks.get("thumbnail") : null);

                books.add(dto);
            }
        }

        return books;
    }
}
