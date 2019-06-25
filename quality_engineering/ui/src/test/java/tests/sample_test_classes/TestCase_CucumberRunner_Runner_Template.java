package tests;


import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import pnc.mtp.cucumber.AbstractCucumberTestNGTest;
/*
 * Cucumber TestNG Abstract Test Runner Class File for running Cucumber Feature Files
 */
@Test
@CucumberOptions(
		monochrome = true, 
		features = { "Path to Feature File" }, 
		glue = {"pnc.mtp.cucumber.stepdefinitions","stepdefinitionfiles" }, 
		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:" }
	)
public class TestCase_CucumberRunner_Runner_Template extends AbstractCucumberTestNGTest {

}

