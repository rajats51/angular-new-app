@get
Feature: Check Endpoint

	@getTest
  Scenario: Verify Endpoint returns value
    Given url 'http://localhost:4567'
    When method get
    Then status 200
    And match response == "Hello World"