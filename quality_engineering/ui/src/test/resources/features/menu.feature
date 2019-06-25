Feature: Menu for Page
  Testing the hamburger menu on each page
 
 
 @MenuHomePage
Scenario: Validate Menu Option in Hamburger menu In Home Page 
Given we are on PgCPOLogin
When we navigate to the "/prospect/home" page
Then we click on 3bars
And we should see Home
And we should see Payments
And we should see Receivables
And we should see Accounts
And we should see FinancialAtoms
And we should see Settings
And we should see Help
And we wait
And we click on XIcon
And we wait
Then we should see 3bars

@MenuSolutionPage
Scenario: Validate Menu Option in Hamburger menu In Solutions Page
Given we are on PgCPOLogin
When we navigate to the "/prospect/solutions" page
Then we click on 3bars
And we should see Home
And we should see Payments
And we should see Receivables
And we should see Accounts
And we should see FinancialAtoms
And we should see Settings
And we should see Help
And we wait
And we click on XIcon
Then we should see 3bars





