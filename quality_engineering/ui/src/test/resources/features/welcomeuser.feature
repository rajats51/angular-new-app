Feature: Welcome User Entry Page 
  Testing the Welcome User Entry Page

@WelcomeUserPage 
Scenario: Welcome Validate User Entry Page  
Given we are on PgCPOLogin
When we navigate to the "/verify/user/welcome" page
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





