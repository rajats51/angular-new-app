package karateLogin;

import cucumber.api.CucumberOptions;
import org.testng.annotations.Test;
import pnc.mtp.karate.KarateRunner;

@Test
@CucumberOptions(features = "src/test/java/karateLogin/login.feature")
public class KarateLogin extends KarateRunner {

}