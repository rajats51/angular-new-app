Feature: Welcome Phone Authentication Page 
  Testing the Welcome Phone Authentication Page 

@WelcomePhonePage 
Scenario:Welcome Validate Phone Authentication Page 
Given we are on PgCPOLogin
When we navigate to the "/verify/phone/welcome" page
And we wait
Then we should see Header
Then we should see Briefcase
And we should see welcomeMsgAuthPage
And we validate object welcomeMsgAuthPage
And we should see InstructionAuthPage
And we validate object InstructionAuthPage
And we should see NextButton 
And we should see LoginFooter
And we should see LoginPageLink1
And we should see LoginPageLink2
And we should see LoginPageLink3
And we see AuthCode 





