@nonGet
Feature: Data Driven Post

	Background:
	* url baseUrl
	
	@dataDriven
  Scenario Outline: Data Driven Post
  	Given path 'bars'
  	And request { name:'<name>', addr:'<addr>' }
  	When method post
  	Then status 200
  	
  	Examples:
  	| name         | addr             |
  	| Mario\'s     | 1514 E Carson St |
  	| Bar 11       | 1101 Bradish St  |
  	| Jimmy D\'s   | 1707 E Carson St |
  	| Tiki Lounge  | 2003 E Carson St |
  	| Steel Cactus | 1831 E Carson St |
  	