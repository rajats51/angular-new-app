@nonGet
Feature: Delete/Post/Put Test

	Background:
	* url baseUrl
	
	@postTest
  Scenario: Test Post
  	Given path 'bars'
  	And request { name:"test", addr:"123 test st" }
  	When method post
  	Then status 200

	@putTest
  Scenario: Test Put
  	Given path 'bars/2'
  	And request { name:"PUT test", addr:"123 put test st" }
  	When method put
  	Then status 200
  
  @postTest	
  Scenario: Test Second Post
  	Given path 'bars'
  	And request { name:"DELETE test", addr: "123 third test st" }
  	When method post
  	Then status 200
  
  @deleteTest	
  Scenario: Test Delete
  	Given path 'bars/3'
  	When method delete
  	Then status 200