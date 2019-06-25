package karateExamples;

import cucumber.api.CucumberOptions;
import pnc.mtp.karate.KarateRunner;

@CucumberOptions(tags = "@Test", features = "src/test/java/karateExamples/feature-examples.feature")
public class KarateExample extends KarateRunner {

}