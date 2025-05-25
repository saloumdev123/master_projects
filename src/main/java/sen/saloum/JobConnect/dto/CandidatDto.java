package sen.saloum.JobConnect.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
public class CandidatDto extends UserDto {
    private String cvLink;
    private List<JobApplicationDto> applications;
}
