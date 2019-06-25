package stepdefinitionfiles;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jfrog.build.client.artifactoryXrayResponse.Alert;
import org.mockito.internal.stubbing.answers.Returns;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.asserts.Assertion;

import com.cucumber.listener.Reporter;
import com.gargoylesoftware.htmlunit.javascript.background.JavaScriptExecutor;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pnc.mtp.configurations.ConfigurationException;
import pnc.mtp.cucumber.stepdefinitions.AbstractStepDefinitions;
import pnc.mtp.cucumber.state.TestState;
import pnc.mtp.framework.CommonElementMethods;
import pnc.mtp.framework.JavaScriptMethods;
import pnc.mtp.frameworktests.TestEnvironmentConfigurations;
import pnc.mtp.reporting.framework.Logging;
import pnc.mtp.databaseframework.database.OracleDatabase;
import pnc.mtp.databaseframework.database.Database;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import pnc.mtp.framework.VerificationMethods;


public class ProjectStepDefinitions extends AbstractStepDefinitions {
	CommonElementMethods commonMethods;
    JavaScriptMethods jsMethods;
    VerificationMethods verify;
    //FormMethods formMethods;
    
    
    public ProjectStepDefinitions(TestState state) {
        super(state);      
    }
    

    WebDriver driver =  this.state.getDriver();

    @Before(order=1)
    public void setup(Scenario scenario) throws IOException, ConfigurationException {
        super.setupBeforeScenario(scenario);
        this.state.setDriver(super.getDriver());
        this.commonMethods = new CommonElementMethods(this.state.getDriver());
        this.navigateToURL(TestEnvironmentConfigurations.getTestURL(getBaseURL()), (this.state.getDriver()));
    }

    //
    // Add Project specifc Step Definitions here
    //

    @When("^(?:|we |I )clear (.*)$")
    public void clear_data(String textBox) throws Throwable {
    	By textBoxLocator = this.state.getPage().get(textBox);
        this.commonMethods.clearWhenVisible(textBoxLocator);
    } 
    
    @Then("^we wait$")
    public void we_wait() throws InterruptedException {
        Thread.sleep(5000);
    }

    @After
    public void teardown(Scenario scenario) {
        super.tearDownAfterScenario(scenario);
    }

    // @Then("^we wait$")
    // public void we_wait() throws InterruptedException {
    //     Thread.sleep(3000);
    // }

    @And("^we validate year$")
    public void val_year() throws Throwable{
    By locator = By.xpath("//*[@id='copyright-1']"); 
    verify = new VerificationMethods(super.getDriver()); 
    verify.verifyContainsText(locator, "1969");
    
    }

    // Function to navigate page in browser
    @When("^we navigate to the \"([^\\\"]*)\" page$")
    public void we_navigate_to(String url) throws Throwable{
    System.out.println(getBaseURL() + url);
    super.getDriver().get(TestEnvironmentConfigurations.getTestURL(getBaseURL()) + url);

    }

    // Function to validate whether bution is disabled
    @Then("^button is disable$")
    public void btnDisable() throws Throwable{
    By locator = By.xpath("//*[@type='submit']");
    verify = new VerificationMethods(super.getDriver()); 
    verify.verifyDisabled(locator);
    }

    @When("^we switch windows$")
	public void we_switch_windows() throws Throwable {
        Thread.sleep(4000);
        String winHandleBefore = super.getDriver().getWindowHandle();
		for (String winHandle : super.getDriver().getWindowHandles()) {
            super.getDriver().switchTo().window((winHandle));
        }
            super.getDriver().close();
            super.getDriver().switchTo().window(winHandleBefore);
        
}

// Function to close tab in browser
@And("^we close (.*)$")
    public void we_close(String icon) throws Throwable{
     Thread.sleep(1000);
     //Actions action = new Actions(driver);
     //WebElement element=driver.findElement(By.xpath("//img[@class='close_on']"));
    //Double click
    //action.doubleClick(element).perform(); 
     //driver.findElement(By.xpath("//img[@class='close_on']")).click();
     By locator = By.xpath("//img[@class='close_on']");
     //action.doubleClick(element).perform(); 
    //  JavascriptExecutor jsp = (JavascriptExecutor) super.getDriver();
    //  jsp.executeScript("document.getElementsByClassName(\"close_on\")[0].click()");
     //super.getDriver().findElement(locator).click();
     jsMethods = new JavaScriptMethods(super.getDriver());
     jsMethods.clickWhenExists(locator, 10);
    }

    // Function to validate six input box for email and phone page
    @And("^we see AuthCode$")
    public void we_see_AuthCode() throws Throwable{
    for(int i=1;i<=6;i++){
        By locator = By.xpath("//*[@id='pin-"+i+"']"); 
        Assert.assertTrue(commonMethods.elementIsVisible(locator, 5));
        Logging.logInfo("Input Box : "+i+ " is Displayed");
    }
    
   }
 
    // Function to display contennt during run time in application
    @And("^(?:|we |I )validate object (.*)$")
    public void we_validate_object(String objvalue) throws Throwable{
        By locator = this.state.getPage().get(objvalue);
        String msg = this.commonMethods.getTextWhenVisible(locator);
        Logging.logInfo("Content is Displayed as:" +msg);       
    }

    // Definition: Function to validate each element Tile in Soultion Page
    @Then("we validate tile")
    public void we_validate_tile() throws IOException {
        // By locator = By.xpath("//*[@class='example-card mat-card ng-star-inserted']");
        // By locatorimage = By.xpath("//*[@id='image']"); 
        // By locatorstatus = By.xpath("//*[@id='solution-status-text']");  
        // By locatorbutton = By.xpath("//*[@type='button']");   
        List <WebElement> listtile = new ArrayList<>(this.state.getDriver().findElements(By.xpath("//*[@class='example-card mat-card ng-star-inserted']")));
        List <WebElement> listimage = new ArrayList<>(this.state.getDriver().findElements(By.xpath("//*[@class='solution-img mat-card-image']")));
        List <WebElement> liststatus = new ArrayList<>(this.state.getDriver().findElements(By.xpath("//*[@id='solution-status-text']")));
        List <WebElement> listbutton = new ArrayList<>(this.state.getDriver().findElements(By.xpath("//*[@type='button']")));
      
        Logging.logInfo("Tile Count is:" +listtile.size());
        
        for (int i = 0; i < listtile.size(); i++) {
            Logging.logInfo("Tile Number is : "+(i+1));
            String Img = this.commonMethods.getAttributeWhenVisible(listimage.get(i),"alt");
            Logging.logInfo("************Image name is Displayed*****************************");
            Logging.logInfo("Image is Displayed as : " +Img);    
            String status = this.commonMethods.getTextWhenVisible(liststatus.get(i));
            Logging.logInfo("************Status name is Displayed*****************************");
            Logging.logInfo("Satus is Displayed as : " +status); 
            String btntype = this.commonMethods.getTextWhenVisible(listbutton.get(i));
            Logging.logInfo("************Button name is Displayed*****************************");
            Logging.logInfo("Button Type is Displayed as : " +btntype); 
   
    }  

    }
// Definition: Function to Input OTP value in Email and Phone Box
@Then("we enter AuthCode {string}")
    public void we_enter_AuthCode(String inputValue) throws IOException {
        String[] arrbox=inputValue.split("");
        for(int i=1;i<=6;i++){
            By locator = By.xpath("//*[@id='pin-"+i+"']"); 
            this.commonMethods.enterValueWhenVisible(locator, arrbox[(i-1)]);
            Logging.logInfo("Input Box : "+i+ " is Displayed: and OTP value is : "+arrbox[(i-1)]);
            //this.commonMethods.getImageAttachment(this.state.getDriver());
}

}

//Function Definition: This function will click on Button in each tile and validate page which is navigated.
@Then("we click tilebutton")
    public void we_click_tilebutton() throws IOException, InterruptedException {
        // By locator = By.xpath("//*[@class='example-card mat-card ng-star-inserted']");
        // By locatorimage = By.xpath("//*[@id='image']"); 
        // By locatorstatus = By.xpath("//*[@id='solution-status-text']");  
        // By locatorbutton = By.xpath("//*[@type='button']");   
        List <WebElement> listtile = new ArrayList<>(this.state.getDriver().findElements(By.xpath("//*[@class='example-card mat-card ng-star-inserted']")));
        List <WebElement> liststatus = new ArrayList<>(this.state.getDriver().findElements(By.xpath("//*[@id='solution-status-text']")));
        List <WebElement> listbutton = new ArrayList<>(this.state.getDriver().findElements(By.xpath("//*[@type='button']")));
        Logging.logInfo("Tile Count is:" +listtile.size());
        
        for (int i = 0; i < listtile.size(); i++) {
             listtile = new ArrayList<>(this.state.getDriver().findElements(By.xpath("//*[@class='example-card mat-card ng-star-inserted']")));
             liststatus = new ArrayList<>(this.state.getDriver().findElements(By.xpath("//*[@id='solution-status-text']")));
             listbutton = new ArrayList<>(this.state.getDriver().findElements(By.xpath("//*[@type='button']")));
            Logging.logInfo("Tile Number is : "+(i+1));
            String status = this.commonMethods.getTextWhenVisible(liststatus.get(i)).trim();
            Logging.logInfo("************Status name is Displayed*****************************");
            Logging.logInfo("Satus is Displayed as : " +status); 
            String btntype = this.commonMethods.getTextWhenVisible(listbutton.get(i)).trim();
            Logging.logInfo("************Button name is Displayed*****************************");

            // if (status.equals("Add new") && btntype.equals("DISCOVER")){
            //      // this.commonMethods.clickWhenVisible(listbutton.get(i)); 
            //       listbutton.get(i).click();
            //       this.commonMethods.waitUntilElementVisible(element)  
            // //    Assert.assertTrue(this.commonMethods.elementIsVisible(getbuttonElement(btntype)));
            // //    String tileName = getbuttonElement(btntype).getText();
            // //    Logging.logInfo(tileName+ " :is displayed and " +tileName+ " tab is  selected");
            //       Logging.logInfo("Page is Displayed");
            //       this.state.getDriver().navigate().back();
            //       this.commonMethods.wait(5);
            //    }
            
                if (status.equals("Status: Completed") && btntype.equals("VIEW")){
                    this.commonMethods.clickWhenVisible(listbutton.get(i));   
                    Assert.assertTrue(this.commonMethods.elementIsVisible(getbuttonElement(btntype)));
                    String tileName = getbuttonElement(btntype).getText();
                    Logging.logInfo(tileName+ " :is displayed and " +tileName+ " tab is  selected");
                    we_wait();
                    this.state.getDriver().navigate().back();
                    we_wait();
               }

               else if (status.equals("Status: Not Yet Started") && btntype.equals("BEGIN")){
                this.commonMethods.clickWhenVisible(listbutton.get(i));     
               Assert.assertTrue(this.commonMethods.elementIsVisible(getbuttonElement(btntype)));
               String tileName = getbuttonElement(btntype).getText();
               Logging.logInfo(tileName+ " :is displayed and " +tileName+ " tab is  selected");
               we_wait();
               this.state.getDriver().navigate().back();
               we_wait();
               }

               else if (status.equals("Status: In Progress") && btntype.equals("CONTINUE")){
                this.commonMethods.clickWhenVisible(listbutton.get(i));  
                Assert.assertTrue(this.commonMethods.elementIsVisible(getbuttonElement(btntype)));
                String tileName = getbuttonElement(btntype).getText();
                Logging.logInfo(tileName+ " :is displayed and " +tileName+ " tab is  selected");
                we_wait();
                this.state.getDriver().navigate().back();
                we_wait();
               }
               
               
        }
       

    }

    // xpath("//*[@aria-selected='true']/div/div/span[contains(text(),''"+btnName+"')]")
    public WebElement getbuttonElement(String btnName){
       WebElement button =this.state.getDriver().findElement(By.xpath("//*[@aria-selected='true']/div/div/span"));
        return button;
    }

}