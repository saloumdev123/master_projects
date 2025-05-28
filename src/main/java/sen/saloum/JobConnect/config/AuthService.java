//package sen.saloum.JobConnect.config;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//import sen.saloum.JobConnect.model.Candidat;
//import sen.saloum.JobConnect.model.Recruiter;
//import sen.saloum.JobConnect.model.User;
//import sen.saloum.JobConnect.repos.UserRepository;
//
//import java.util.ArrayList;
//
//@Service
//@RequiredArgsConstructor
//public class AuthService {
//
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//    private final JwtService jwtService;
//
//    public AuthResponse register(RegisterRequest request) {
//        User user;
//
//        if ("candidat".equalsIgnoreCase(request.getUserType())) {
//            Candidat candidat = new Candidat();
//            candidat.setUsername(request.getUsername());
//            candidat.setEmail(request.getEmail());
//            candidat.setPassword(passwordEncoder.encode(request.getPassword()));
//            candidat.setEnabled(true);
//            candidat.setFullName(request.getFullName());
//            candidat.setPhoneNumber(request.getPhoneNumber());
//            candidat.setCvLink(request.getCvLink());
//            candidat.setApplications(new ArrayList<>());
//
//            user = candidat;
//
//        } else if ("recruiter".equalsIgnoreCase(request.getUserType())) {
//            Recruiter recruiter = new Recruiter();
//            recruiter.setUsername(request.getUsername());
//            recruiter.setEmail(request.getEmail());
//            recruiter.setPassword(passwordEncoder.encode(request.getPassword()));
//            recruiter.setEnabled(true);
//            recruiter.setFullName(request.getFullName());
//            recruiter.setPhoneNumber(request.getPhoneNumber());
//            recruiter.setCompanyName(request.getCompanyName());
//            recruiter.setCompanyWebsite(request.getCompanyWebsite());
//            recruiter.setCompanyAddress(request.getCompanyAddress());
//            recruiter.setJobsPosted(new ArrayList<>());
//
//            user = recruiter;
//
//        } else {
//            throw new IllegalArgumentException("Invalid user type: " + request.getUserType());
//        }
//
//        userRepository.save(user);
//
//        String token = jwtService.generateToken(user);
//        return new AuthResponse(token);
//    }
//
//    public AuthResponse authenticate(AuthRequest request) {
//        User user = userRepository.findByEmail(request.getEmail())
//                .orElseThrow(() -> new UsernameNotFoundException("Email not found"));
//
//        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
//            throw new BadCredentialsException("Invalid password");
//        }
//
//        String token = jwtService.generateToken(user);
//        return new AuthResponse(token);
//    }
//}
