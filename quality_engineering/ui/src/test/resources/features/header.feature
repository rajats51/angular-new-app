Feature: Header for Page
  Testing the Header on page

  @HeaderHome
  Scenario: CPO Solutions Header
    #Given the user has successfully logged into the CPO solutions hub
    Given we are on PgCPOLogin
    When we navigate to the "/prospect/home" page
    Then we should see Header
    # And we should see Hamburger menu
    And we should see PNC logo 
    And we should see Operator
    And we should see Avatar icon
    And we should see Help icon

    @HeaderSolution
    Scenario: CPO Solutions Header
    #Given the user has successfully logged into the CPO solutions hub
    Given we are on PgCPOLogin
    When we navigate to the "/prospect/solutions" page
    Then we should see Header
    # And we should see Hamburger menu
    And we should see PNC logo 
    And we should see Operator
    And we should see Avatar icon
    And we should see Help icon
    