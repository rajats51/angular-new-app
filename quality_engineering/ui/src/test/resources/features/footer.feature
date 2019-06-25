Feature: Footer for Page
  Testing the footer part on page

  @HomeFooter
  Scenario: CPO Solutions footer validation on Home Page
    #Given the user has successfully logged into the CPO solutions hub
    Given we are on PgCPOLogin
    When we navigate to the "/prospect/home" page
    Then we should see Footer1
    And we should see Footer2
    #And we should see year in Footer1
    #When the user is on any page 
    #Then the Footer displays with the following text: "Copyright <copyright symbol> <copyright year>.  The PNC Financial Services Group, Inc.  All Rights Reserved."
    #Then we should see Footer

    @SolutionsFooter
    Scenario: CPO Solutions footer validation on Solutions Page
    #Given the user has successfully logged into the CPO solutions hub
    Given we are on PgCPOLogin
    When we navigate to the "/prospect/solutions" page
    Then we should see Footer1
    And we should see Footer2