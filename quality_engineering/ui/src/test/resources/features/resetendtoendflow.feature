Feature: Reset Scenario End to End Flow 
  Testing the Reset Scenario End to End Flow from User Entry page to Password Page

@ResetEndtoEnd 
Scenario: Reset Scenario End to End Flow   
Given we are on PgCPOLogin
When we navigate to the "/verify/user/reset" page
# User Page
And we wait
Then we should see Header
Then we should see Briefcase
And we should see welcomeMsgUserPage
And we validate object welcomeMsgUserPage
And we should see confirmMsgUserPage
And we validate object confirmMsgUserPage
And we should see EmailInputUserPage
And we should see SubmitButton 
And we should see LoginFooter
And we should see LoginPageLink1
And we should see LoginPageLink2
And we should see LoginPageLink3
And we enter "cpo@pnc.com" in the EmailInputUserPage field
And we click on SubmitButton 
#Phone Page
Then we should see Header
Then we should see Briefcase
And we should see welcomeMsgAuthPage
And we validate object welcomeMsgAuthPage
And we should see InstructionAuthPage
And we validate object InstructionAuthPage
And we enter AuthCode "123456"
And we click on NextButton
#Password Page
Then we should see welcomeMsgPasswordPage
And we validate object welcomeMsgPasswordPage
And we should see instructionsContainer
And we should see ProgressContainer
And we should see NewPassword 
And we should see confirmPassword
And we should see Step3
And we validate object Step3
#password Popup screen
And we click on SubmitButton
And we wait
And we should see successMsg
And we validate object successMsg
And we should see passwordPopupH3Msg
And we validate object passwordPopupH3Msg
And we should see ProgressContainer
And we should see passwordPopupCntbtn











