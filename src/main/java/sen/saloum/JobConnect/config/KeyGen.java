//package sen.saloum.JobConnect.config;
//
//import javax.crypto.KeyGenerator;
//import javax.crypto.SecretKey;
//import java.util.Base64;
//
//public class KeyGen {
//    public static void main(String[] args) throws Exception {
//        KeyGenerator keyGen = KeyGenerator.getInstance("HmacSha256");
//        keyGen.init(256);
//        SecretKey secretKey = keyGen.generateKey();
//        String encodedKey = Base64.getEncoder().encodeToString(secretKey.getEncoded());
//        System.out.println("Your JWT Secret Key: " + encodedKey);
//    }
//}
