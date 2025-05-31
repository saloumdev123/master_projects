//package sen.saloum.JobConnect.config;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.web.bind.annotation.*;
//import sen.saloum.JobConnect.dto.UserDto;
//import sen.saloum.JobConnect.enums.Role;
//
//@RestController
//@RequestMapping("/api/account")
//public class AuthController {
//     private final AuthService authService;
//
//    public AuthController(AuthService authService) {
//        this.authService = authService;
//    }
//    @PostMapping("/create-user")
//    public ResponseEntity<?> createUser(@RequestBody UserDto userDto,
//                                        @AuthenticationPrincipal UserDetailsImpl connectedUser) {
//        if (connectedUser == null || !connectedUser.user().getRole().equals(Role.ADMIN)) {
//            return ResponseEntity.status(403).body("Access denied");
//        }
//
//        authService.register(userDto);
//        return ResponseEntity.ok("User created successfully");
//    }
//
//
//
//    @PostMapping("/register")
//    public ResponseEntity<?> register(@RequestBody UserDto dto) {
//        authService.register(dto);
//        return ResponseEntity.ok("Email de vérification envoyé.");
//    }
//
//    @GetMapping("/verify")
//    public ResponseEntity<?> verify(@RequestParam String token) {
//        boolean verified = authService.verifyToken(token);
//        return ResponseEntity.ok(verified ? "Compte vérifié." : "Lien invalide.");
//    }
//
//    @PostMapping("/login/admin")
//    public ResponseEntity<AuthResponse> loginAdmin(@RequestBody AuthRequest request) {
//        return ResponseEntity.ok(authService.login(request, Role.ADMIN));
//    }
//
//    @PostMapping("/login/recruiter")
//    public ResponseEntity<AuthResponse> loginRecruiter(@RequestBody AuthRequest request) {
//        return ResponseEntity.ok(authService.login(request, Role.RECRUITER));
//    }
//
//    @PostMapping("/login/candidat")
//    public ResponseEntity<AuthResponse> loginCandidat(@RequestBody AuthRequest request) {
//        return ResponseEntity.ok(authService.login(request, Role.CANDIDAT));
//    }
//}
