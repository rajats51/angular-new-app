Feature: sample karate soap call

  Background: 
    * url soapUrl

  Scenario: soap 1.1
    Given request read('soapRequest.xml')
    And header Content-Type = 'text/xml'
    And header x-ibm-client-id = '855d4d92-dddf-445b-9176-9aa059c9045e'
    When method post
    Then status 200
    And print response
