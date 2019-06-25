package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.asserts.SoftAssert;

import com.relevantcodes.extentreports.ExtentTest;

import pnc.mtp.framework.CommonElementMethods;

/**
* This is the Page Class Template with base constructor and objects already setup to start a Page Class.  
*  
*/
public class PgClass_Template {
	WebDriver driver;
	ExtentTest testStep;
	SoftAssert softAssert;
	CommonElementMethods commonMethods;
	boolean cucumberTest = false;
	
	/**
	 * Page Constructor and will include an instance of the <b>commonMethods</b> class for interacting with common objects on the page.
	 * <br><br>
	 * 
	 * Will also include the <b>PageFactory</b> class object to initialize elements on page before preceding.
	 * 
	 * @param driver Current Test Driver passed in
	 * @param testStep Current extent test object passed in for current test detailed reporting. 
	 * @param softAssert Current softAssert passed in for current test to hold all softAsserttions to log all in detailed report.
	 */
	public PgClass_Template(WebDriver driver, ExtentTest testStep, SoftAssert softAssert) {
		this.driver = driver;
		this.testStep = testStep;
		this.softAssert = softAssert;
		commonMethods = new CommonElementMethods(this.driver, this.testStep, this.softAssert);
		PageFactory.initElements(this.driver, this);		
	}
	
	/**
	 * Page Constructor for Cucumber 
	 * will include an instance of the <b>commonMethods</b> class for interacting with common objects on the page.
	 * <br><br>
	 * 
	 * Will also include the <b>PageFactory</b> class object to initialize elements on page before preceding.
	 * 
	 * @param driver Current Test Driver passed in
	 */
	
	public PgClass_Template(WebDriver driver) {
		this.driver = driver;
		commonMethods = new CommonElementMethods(this.driver);
		cucumberTest = true;
		PageFactory.initElements(this.driver, this);
	}
	
	//*************************************************************
	// PAGE OBJECT SECTION
	//*************************************************************
//	@FindBy(id="ID OF OBJECT")
//	WebElement edtEditBox;
//	
//	OR
//	
//	public By edtEditBox = By.xpath("//div[@id='ID OF OBJECT']");

	
	//*************************************************************
	// PAGE METHOD SECTION
	//*************************************************************	
//	/**
//	 * Enter Example Editbox Value.
//	 * 
//	 * @param inputValue - Input value for the Edit box.
//	 * @throws IOException
//	 */
//	public void enterEditBoxValue(String inputValue) throws IOException {
//		ReportFunctions.logtestNGInfoTestStep(testStep, cucumberTest, "Entering Test Step");	
//		this.commonMethods.enterValueWhenVisible(edtEditBox, inputValue);
//	}
}
