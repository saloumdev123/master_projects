package sen.saloum.JobConnect.dto;


import lombok.Data;

@Data
public class ResourceDto {
    private Long id;
    private String title;
    private String resourceContent;
    private String downloadLink;
}
