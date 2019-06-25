@get
Feature: Match Response

  Background: 
    * url baseUrl

	@getTest
  Scenario: Check JSON response FAIL
    Given path 'bars'
    When method get
    Then status 200
    And match response ==
      """
      [ THE WRONG RESPONSE ]
      """