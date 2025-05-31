//package sen.saloum.JobConnect.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmailServiceSecurity {
//    @Autowired
//    private JavaMailSender mailSender;
//
//    public void sendVerificationEmail(String toEmail, String verificationLink) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(toEmail);
//        message.setSubject("Confirmez votre compte");
//        message.setText("Cliquez ici pour vérifier votre compte : " + verificationLink);
//        mailSender.send(message);
//    }
//
//
//}
