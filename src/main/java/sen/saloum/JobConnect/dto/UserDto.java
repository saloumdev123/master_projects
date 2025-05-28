package sen.saloum.JobConnect.dto;

import lombok.Data;
import sen.saloum.JobConnect.enums.Role;

@Data
public class UserDto {
    private Long id;
    private String username;
    private String email;
    private String fullName;
    private String phoneNumber;
    private boolean enabled;
    private Role role;
}
