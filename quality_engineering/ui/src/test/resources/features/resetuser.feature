Feature: Reset User Entry Page 
  Testing the Reset User Entry Page

@ResetUserPage 
Scenario:Validate Reset User Entry Page  
Given we are on PgCPOLogin
When we navigate to the "/verify/user/reset" page
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
# And we validate year 
And we should see LoginPageLink1
And we should see LoginPageLink2
And we should see LoginPageLink3





