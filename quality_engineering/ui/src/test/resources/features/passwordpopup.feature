Feature: Welcome Password Page and Popup
  Testing the Welcome Password Page and Popup

@WelcomePasswordPopup
Scenario:Welcome Password Page and Popup  
Given we are on PgCPOLogin
When we navigate to the "/createpassword/welcome" page
And we wait
Then we should see welcomeMsgPasswordPage
And we validate object welcomeMsgPasswordPage
And we should see instructionsContainer
And we should see ProgressContainer
And we should see NewPassword 
And we should see confirmPassword
And we should see Step3
And we click on SubmitButton
And we wait
And we should see successMsg
And we validate object successMsg
And we should see passwordPopupH3Msg
And we validate object passwordPopupH3Msg
And we should see ProgressContainer
And we should see passwordPopupCntbtn

# Feature: Reset Password Page and Popup
#   Testing the Reset Password Page and Popup

@ResetPasswordPopup
Scenario:Reset Password Page and Popup  
Given we are on PgCPOLogin
When we navigate to the "/createpassword/reset" page
And we wait
Then we should see welcomeMsgPasswordPage
And we validate object welcomeMsgPasswordPage
And we should see instructionsContainer
And we should see ProgressContainer
And we should see NewPassword 
And we should see confirmPassword
And we should see Step3
And we click on SubmitButton
And we wait
And we should see successMsg
And we validate object successMsg
And we should see passwordPopupH3Msg
And we validate object passwordPopupH3Msg
And we should see ProgressContainer
And we should see passwordPopupCntbtn


@ChangePasswordPage
Scenario:Change Password Page (Returning User)  
Given we are on PgCPOLogin
When we navigate to the "/changepassword" page
And we wait
Then we should see changepageWlcmMsg
And we validate object changepageWlcmMsg
And we should see instructionsContainer
And we should see changepageoldpassword
And we should see changepageConfirmPassword 
And we should see changepageCnfrmNewPassword
And we should see Step3
And we validate object Step3