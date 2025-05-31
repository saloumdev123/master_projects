//package sen.saloum.JobConnect.config;
//
//import org.springframework.security.access.AccessDeniedException;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//import sen.saloum.JobConnect.dto.UserDto;
//import sen.saloum.JobConnect.enums.Role;
//import sen.saloum.JobConnect.model.User;
//import sen.saloum.JobConnect.repos.UserRepository;
//
//import java.util.Optional;
//import java.util.UUID;
//
//@Service
//public class AuthService {
//     private final UserRepository userRepository;
//     private final PasswordEncoder passwordEncoder;
//     private final JwtService jwtService;
////     private final EmailServiceSecurity emailServiceSecurity;
//
//    public AuthService(UserRepository userRepository,
//                       PasswordEncoder passwordEncoder,
//                       JwtService jwtService) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//        this.jwtService = jwtService;
//    }
//
//    public void register(UserDto userDto) {
//        User user = new User();
//        user.setEmail(userDto.getEmail());
//        user.setUsername(userDto.getUsername());
//        user.setPassword(passwordEncoder.encode("default_password"));
//        user.setRole(userDto.getRole());
//        user.setVerificationToken(UUID.randomUUID().toString());
//
//        userRepository.save(user);
//
//        String verificationLink = "http://localhost:8080/api/auth/verify?token=" + user.getVerificationToken();
////        emailServiceSecurity.sendVerificationEmail(user.getEmail(), verificationLink);
//    }
//
//    public AuthResponse login(AuthRequest request, Role expectedRole) {
//        User user = userRepository.findByEmail(request.getEmail())
//                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
//
//        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
//            throw new BadCredentialsException("Invalid credentials");
//        }
//
//        if (!user.getRole().equals(expectedRole)) {
//            throw new AccessDeniedException("Role mismatch");
//        }
//
//        String accessToken = jwtService.generateToken(new UserDetailsImpl(user));
//        String refreshToken = jwtService.generateRefreshToken(new UserDetailsImpl(user));
//
//        return new AuthResponse(accessToken, refreshToken, "Bearer");
//    }
//
//    public boolean verifyToken(String token) {
//        Optional<User> optionalUser = userRepository.findByVerificationToken(token);
//        if (optionalUser.isPresent()) {
//            User user = optionalUser.get();
//            user.setEnabled(true);
//            user.setVerificationToken(null);
//            userRepository.save(user);
//            return true;
//        }
//        return false;
//    }
//}
