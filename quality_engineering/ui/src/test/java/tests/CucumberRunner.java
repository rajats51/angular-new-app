package tests;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import pnc.mtp.cucumber.AbstractCucumberTestNGTest;

@Test
@CucumberOptions(
        monochrome = true, 
        features = { "src/test/resources/features/" }, 
        glue = { "pnc.mtp.cucumber.stepdefinitions", "stepdefinitionfiles" },
        //Modifying the plugin line will disable reporting capablities.
        plugin = { "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:", "pretty", "html:target/cucumber-html-reports", "json:target/cucumber-html-reports/cucumber.json" }
    )

public class CucumberRunner extends AbstractCucumberTestNGTest {

}