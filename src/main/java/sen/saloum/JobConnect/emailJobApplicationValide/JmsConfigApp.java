package sen.saloum.JobConnect.emailJobApplicationValide;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import sen.saloum.JobConnect.utilis.CustomMessages;

import java.util.Properties;

@Configuration
public class JmsConfigApp {


    @Bean(name = "emailValidationMailSender")
    public JavaMailSender javaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost(CustomMessages.SMTP_GMAIL);
        mailSender.setPort(CustomMessages.SMTP_PORT);

        mailSender.setUsername(CustomMessages.STS_USERNAME);
        mailSender.setPassword(CustomMessages.STS_PASSWORD);

        Properties props = mailSender.getJavaMailProperties();
        props.put(CustomMessages.MAIL_PROTOCOL, CustomMessages.SMTP);
        props.put(CustomMessages.MAIL_AUTH, CustomMessages.TRUE);
        props.put(CustomMessages.MAIL_STARTTLS_ENABLE, CustomMessages.TRUE);
        props.put(CustomMessages.MAIL_SSL_ENABLE, CustomMessages.FALSE);
        props.put(CustomMessages.MAIL_DEBUG, CustomMessages.TRUE);

        return mailSender;
    }

}
