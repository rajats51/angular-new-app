package tests;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import pnc.mtp.configurations.CheckConfigurationSettings;
import pnc.mtp.frameworktests.BaseTestBeforeMethod;
import pnc.mtp.frameworktests.TestEnvironmentConfigurations;
import pnc.mtp.frameworktests.TestMembersFactory;
import pnc.mtp.reporting.framework.ReportFunctions;

public class TemplateBaseTestBeforeMethod extends BaseTestBeforeMethod {
	/**
	 * Before Test Class file method - Will set the BaseTest testEnvironment variables used for testing.
	 * 
	 * @param environment acronym representing the environment to run tests in.
	 */
    @Parameters({"environment"})	
	@BeforeMethod(alwaysRun=true)
	public void setupBeforeMethod(String environment) {
		try {			
			String environmentLocal = CheckConfigurationSettings.getPropertyValue("environment");
			if (environmentLocal != null && !environmentLocal.isEmpty()) {
				environment = environmentLocal;
			}
			
	   		String testEnvironmentURL = TestEnvironmentConfigurations.getTestURL(environment);
    		TestMembersFactory.getTest().log(LogStatus.INFO, "Navigate to URL - " + testEnvironmentURL);
    		TestMembersFactory.getDriver().get(testEnvironmentURL);		
    	}
    	catch (Exception e) {
    		TestMembersFactory.getTest().log(LogStatus.SKIP, ReportFunctions.formatTestSkippedMessage("Test Skipped", e.getMessage()));
    		Assert.assertTrue(false);
		}
	}
    
    /**
	 * Before Test Class file method - Will set the BaseTest testEnvironment variables used for testing.
	 */
	@Test
	public void testMethodExample() {
		//Report Details Link to Test in Details Report
		WebDriver driver = TestMembersFactory.getDriver();
		ExtentTest testStep = TestMembersFactory.getTest();
		SoftAssert softAssert = TestMembersFactory.getSoftAssert();

		//Initialize page classes here
		//PageClass newPageClassObject = new PageClass(driver, testStep, softAssert);
		
		//PUT TEST STEPS IN HERE
		//newPageClassObject.testMethod();
		
		//Assert all Soft Assert Failures.	
		softAssert.assertAll();		
	}
}
