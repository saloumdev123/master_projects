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

                // Title
                dto.setTitle((String) volumeInfo.get("title"));

                // Authors (check null and get first element safely)
                List<String> authors = (List<String>) volumeInfo.get("authors");
                dto.setAuthor(authors != null && !authors.isEmpty() ? authors.get(0) : "Auteur inconnu");

                // Categories
                List<String> categories = (List<String>) volumeInfo.get("categories");
                dto.setCategory(categories != null && !categories.isEmpty() ? categories.get(0) : "Non catégorisé");

                dto.setAuthorRole("Author");

                // Description
                dto.setResourceContent((String) volumeInfo.get("description"));

                // Image - cherche différentes tailles
                Map<String, String> imageLinks = (Map<String, String>) volumeInfo.get("imageLinks");
                if (imageLinks != null) {
                    String imageUrl = null;

                    if (imageLinks.containsKey("thumbnail")) {
                        imageUrl = imageLinks.get("thumbnail");
                    } else if (imageLinks.containsKey("smallThumbnail")) {
                        imageUrl = imageLinks.get("smallThumbnail");
                    }

                    if (imageUrl != null) {
                        // 🔒 Force HTTPS
                        dto.setImage(imageUrl.replace("http://", "https://"));
                    } else {
                        dto.setImage(null);
                    }
                } else {
                    dto.setImage(null);
                }

                books.add(dto);
            }
        }
        return books;
    }

}
