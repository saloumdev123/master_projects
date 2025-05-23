package sen.saloum.JobConnect.emailJobApplicationValide;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.mailSubscription.JMSubscription;

@Service
public class EmailServiceApp {

    @Qualifier("emailValidationMailSender")
    private final JavaMailSender mailSender;

    public EmailServiceApp(@Qualifier("emailValidationMailSender")  JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendApplicationEmail(JMSApplication jmsApplication) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

        messageHelper.setFrom("sensaloumdev@gmail.com");
        messageHelper.setTo(jmsApplication.getEmail());
        messageHelper.setSubject(jmsApplication.getTitle());
        String emailBody = buildEmailBody(jmsApplication);
        messageHelper.setText(emailBody, true);

        mailSender.send(mimeMessage);
    }

    private String buildEmailBody(JMSApplication jmsApplication) {
        return """
    <html>
    <body style='font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;'>
        <div style='max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);'>
            <h2 style='color: #003366;'>Bonjour %s 👋</h2>
            <p>Nous avons bien reçu votre candidature pour le poste suivant :</p>
            <ul>
                <li><strong>Titre du poste :</strong> %s</li>
                <li><strong>Description :</strong> %s</li>
            </ul>
            <p>Nos équipes vont analyser votre profil et reviendront vers vous si celui-ci correspond à nos critères.</p>
            <p>Merci pour votre confiance et bonne chance !</p>
            <p style='margin-top: 20px;'>Cordialement,<br/><strong>L’équipe JobConnect</strong></p>
        </div>
    </body>
    </html>
    """.formatted(
                jmsApplication.getFirstName(),
                jmsApplication.getTitle(),
                jmsApplication.getBody()
        );
    }

}


