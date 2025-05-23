package sen.saloum.JobConnect.dto;


import lombok.Data;

@Data
public class ResourceDto {
    private Long id;
    private String title;
    private String author;
    private String authorRole;
    private String category;
    private String resourceContent;
    private String image;
}
