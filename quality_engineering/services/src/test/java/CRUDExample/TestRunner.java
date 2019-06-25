package CRUDExample;

import cucumber.api.CucumberOptions;
import org.testng.annotations.Test;
import pnc.mtp.karate.KarateRunner;

@Test
@CucumberOptions(features = "src/test/java/CRUDExample/create-read-update-delete-operator.feature", tags = {"@smokeTest, @deleteTest"})
public class TestRunner extends KarateRunner {

}