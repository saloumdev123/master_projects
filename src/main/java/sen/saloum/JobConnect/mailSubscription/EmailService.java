package sen.saloum.JobConnect.mailSubscription;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.emailJobApplicationValide.JMSApplication;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(@Qualifier("mailSubscriptionMailSender") JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendSubscriptionEmail(JMSubscription jmSubscription) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

        messageHelper.setFrom("sensaloumdev@gmail.com");
        messageHelper.setTo(jmSubscription.getEmail());
        messageHelper.setSubject(jmSubscription.getTitle());
        String emailBody = buildEmailBody(jmSubscription);
        messageHelper.setText(emailBody, true);

        mailSender.send(mimeMessage);
    }

    private String buildEmailBody(JMSubscription subscription) {
        return """
        <html>
        <body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;'>
            <div style='max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);'>
                <h2 style='color: #003366;'>Bienvenue sur JobConnect, %s 👋</h2>
                <p>Merci de vous être inscrit à notre plateforme. Nous sommes ravis de vous compter parmi nous.</p>
                <p>Voici un récapitulatif de votre inscription :</p>
                <ul>
                    <li><strong>Nom :</strong> %s %s</li>
                    <li><strong>Email :</strong> %s</li>
                    <li><strong>Message :</strong> %s</li>
                </ul>
                <p>Nous vous contacterons prochainement avec les meilleures opportunités correspondant à votre profil.</p>
                <p style='margin-top: 20px;'>À bientôt,<br/><strong>L’équipe JobConnect</strong></p>
            </div>
        </body>
        </html>
        """.formatted(
                subscription.getFirstName(),
                subscription.getFirstName(),
                subscription.getLastName(),
                subscription.getEmail(),
                subscription.getTitle(),
                subscription.getBody()
        );
    }

}
