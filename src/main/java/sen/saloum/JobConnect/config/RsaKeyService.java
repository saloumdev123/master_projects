//package sen.saloum.JobConnect.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.security.PrivateKey;
//import java.security.PublicKey;
//
//@Service
//public class RsaKeyService {
//
//
//    private final RsaKeyUtil rsaKeyUtil;
//
//    public RsaKeyService(RsaKeyUtil rsaKeyUtil) {
//        this.rsaKeyUtil = rsaKeyUtil;
//    }
//
//    public void testKeys() throws Exception {
//        PublicKey pubKey = rsaKeyUtil.getPublicKey();
//        PrivateKey privKey = rsaKeyUtil.getPrivateKey();
//
//        System.out.println("Public key format: " + pubKey.getFormat());
//        System.out.println("Private key format: " + privKey.getFormat());
//    }
//}
