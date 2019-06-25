Feature: Solution Card 
  Testing Solution Card Main Page

@SolutionMainPage  
Scenario:Solution Card Main Page 
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
Then we validate tile
And we click tilebutton

