Feature: Login Page
  Testing the Login part on page

@LoginTest1
  Scenario Outline: CPO Solutions Hub Login
    Given we are on PgCPOLogin
    #When we fill in the following:
    #|UserName  |text   |cpo |
    #|Password  |text   |cpo |
    And we wait
    And we enter <Login> in the UserName field
    And we enter <Password> in the Password field
		And we should see LoginPageWlcmMsg
    And we validate object LoginPageWlcmMsg
    And we should see Header
    And we should see FYU
    And we should see FYP
    When we click on SubmitButton
    Then we should see Solution Hub

Examples:
 |Login|Password|
 |"cpo@pnc.com"|"cpo"|
 |"admin@pnc.com"|"admin"|
 |"solutions@pnc.com"|"solution"|
 |"pinacle@solutionshub.com"|"prospect"|
 |"team@solutionshub.com"|"test"|

@LoginTest2
    Scenario: Login without Username
    #Given the user has successfully logged into the CPO solutions hub
    Given we are on PgCPOLogin
    #When we navigate to the "login" page
    And we wait
    And we enter "" in the UserName field
    And we enter "Joe" in the Password field
    Then we wait
    Then button is disable

    Scenario: Login without Password
    #Given the user has successfully logged into the CPO solutions hub
    Given we are on PgCPOLogin
    #When we navigate to the "login" page
    And we wait
    And we enter "bob" in the UserName field
    And we enter "" in the Password field
    Then we wait
    Then button is disable
  
  @LoginTest3
    Scenario: Footern Link Validation in Login Page
    Given we are on PgCPOLogin
    Then we should see LoginFooter
    When we click on LoginPageLink1
    Then we switch windows
    And we click on LoginPageLink2
    Then we switch windows
    And we click on LoginPageLink3
    Then we switch windows
    
    @FYUTest
    Scenario: Forget Username Modal in Login Page
    Given we are on PgCPOLogin
    Then we click on FYU
    And we should see queryMsg
    And we validate object queryMsg
    And we should see responseMsg
    And we validate object responseMsg
    And we should see continueBtn