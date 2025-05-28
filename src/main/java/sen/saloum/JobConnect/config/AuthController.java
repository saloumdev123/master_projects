//package sen.saloum.JobConnect.config;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/auth")
//@RequiredArgsConstructor
//public class AuthController {
//
//    private final AuthService authService;
//
//    @PostMapping("/register")
//    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
//        return ResponseEntity.ok(authService.register(request));
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
//        return ResponseEntity.ok(authService.authenticate(request));
//    }
//    @PostMapping("/refresh-token")
//    public ResponseEntity<AuthResponse> refreshToken(@RequestBody RefreshTokenRequest request) {
//        return ResponseEntity.ok(authService.refreshToken(request.getRefreshToken()));
//    }
//
//}
