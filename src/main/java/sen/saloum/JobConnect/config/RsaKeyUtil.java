//package sen.saloum.JobConnect.config;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.core.io.Resource;
//import org.springframework.stereotype.Component;
//
//import java.io.InputStream;
//import java.security.KeyFactory;
//import java.security.PrivateKey;
//import java.security.PublicKey;
//import java.security.spec.PKCS8EncodedKeySpec;
//import java.security.spec.X509EncodedKeySpec;
//import java.util.Base64;
//
//@Component
//public class RsaKeyUtil {
//
//    @Value("${jwt.public-key-location}")
//    private Resource publicKeyResource;
//
//    @Value("${jwt.private-key-location}")
//    private Resource privateKeyResource;
//
//    public PrivateKey getPrivateKey() throws Exception {
//        try (InputStream inputStream = privateKeyResource.getInputStream()) {
//            String key = new String(inputStream.readAllBytes());
//            key = key
//                    .replace("-----BEGIN PRIVATE KEY-----", "")
//                    .replace("-----END PRIVATE KEY-----", "")
////                    .replaceAll("\\s+", ""); // remove new lines and spaces
//
//            byte[] decoded = Base64.getDecoder().decode(key);
//            PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(decoded);
//            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
//            return keyFactory.generatePrivate(keySpec);
//        }
//    }
//
//    public PublicKey getPublicKey() throws Exception {
//        try (InputStream inputStream = publicKeyResource.getInputStream()) {
//            String key = new String(inputStream.readAllBytes());
//            key = key
//                    .replace("-----BEGIN PUBLIC KEY-----", "")
//                    .replace("-----END PUBLIC KEY-----", "")
//                    .replaceAll("\\s+", ""); // remove new lines and spaces
//
//            byte[] decoded = Base64.getDecoder().decode(key);
//            X509EncodedKeySpec keySpec = new X509EncodedKeySpec(decoded);
//            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
//            return keyFactory.generatePublic(keySpec);
//        }
//    }
//}
