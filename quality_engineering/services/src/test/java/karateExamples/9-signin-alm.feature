@get
Feature: Match Response

  Background: 
    * url baseUrl
#    * header Authorization = call read('classpath:basic-auth.js') { username: 'pp74183', password: 'Pum$poo9' }        
#    * header Content-type = 'application/json'
    
  @getTest
  Scenario: Check JSON response
    Given path 'authentication/sign-in'
    And header Authorization = call read('classpath:basic-auth.js') { username: 'pp74183', password: 'Pum$poo9' }        
    And header Content-type = 'application/json'    
    And request ''
    When method post
    Then status 200