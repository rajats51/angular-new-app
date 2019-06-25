@get
Feature: Data Driven Response

  Background: 
    * url baseUrl

  @dataDriven
  Scenario Outline: Data Driven Get
    Given path 'bars'
    When method get
    Then status 200
    And match response[1][<index>] == { id:<id>, name:'<name>', addr:'<addr>' }

    Examples: 
      | index | id | name         | addr                                   |
      |     0 |  1 | Fat Head\\'s | 1805 E Carson St, Pittsburgh, PA 15203 |
      |     1 |  2 | PUT test     | 123 put test st                        |
      |     2 |  4 | DELETE test  | 123 third test st                      |
      |     3 |  5 | Mario\'s     | 1514 E Carson St                       |
      |     4 |  6 | Bar 11       | 1101 Bradish St                        |
      |     5 |  7 | Jimmy D\\'s  | 1707 E Carson St                       |
      |     6 |  8 | Tiki Lounge  | 2003 E Carson St                       |
      |     7 |  9 | Steel Cactus | 1831 E Carson St                       |
