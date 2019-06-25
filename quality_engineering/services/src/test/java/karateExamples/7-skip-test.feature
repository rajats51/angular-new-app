@get
Feature: Match Response

  Background: 
    * url baseUrl

	@getTest
  Scenario: Check JSON response
    Given path 'bars/123'
    When method get
    Then status 200
    And match response ==
      """
      [ "SUCCESS", [ {
  		"id" : 1,
 		 	"name" : "Fat Head's",
 		 	"addr" : "1805 E Carson St, Pittsburgh, PA 15203"
			}, {
  		"id" : 2,
  		"name" : "The Library",
  		"addr" : "2304 E Carson St, Pittsburgh, PA 15203"
			} ] ]
      """
      
    