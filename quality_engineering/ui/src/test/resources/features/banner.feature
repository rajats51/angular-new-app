Feature: Banner 
  Testing the Banner
  
Scenario:Banner Secondary  
Given we are on PgCPOLogin

When we navigate to the "/prospect/home" page
And we wait
Then we should see Solution Hub
And we should see Crew
And we should see ActivitySecondary
And we should see HelloMsg 
And we should see WelcomeMsg
And we should see KeyContactInfo 
And we should see JobTitle
And we should see UserImage
And we should see SolutionCount

Scenario:Banner Tertiary  
Given we are on PgCPOLogin
When we navigate to the "/prospect/solutions" page
And we wait
Then we should see My Tasks
And we should see Timeline
And we should see Crew
And we should see Solution 
And we should see Activity
And we should see Status message 
And we should see ProgressBar
And we should see KeyContactInfo
And we should see JobTitle
And we should see UserImage
And we should see Header
And we should see Footer1
And we should see Footer2