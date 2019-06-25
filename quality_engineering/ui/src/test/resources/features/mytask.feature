Feature: Mytask 
  Testing the Mytask
  
Scenario:My Task Main Page  
Given we are on PgCPOLogin
When we navigate to the "/prospect/solutions" page
And we wait
Then we should see ToDo
And we should see In Progress
And we should see Completed
And we should see Blocked
And we should see No Task
And we should see Count





