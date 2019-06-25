Feature: Reset Phone Authentication Page 
  Testing the Reset Phone Authentication Page

@ResetPhonePage 
Scenario:Validate Reset Phone Authentication Page 
Given we are on PgCPOLogin
When we navigate to the "/verify/phone/reset" page
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





