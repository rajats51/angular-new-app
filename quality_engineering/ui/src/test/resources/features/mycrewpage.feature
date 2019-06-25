Feature: My Crew Page 
  Test My Crew Page

@MyCrewPage 
Scenario:My Crew Page Components 
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
Then we click on Crew
And we should see CrewCard
And we validate object CrewCard
And we should see CrewKey
And we should see CrewList
And we should see CrewMembers