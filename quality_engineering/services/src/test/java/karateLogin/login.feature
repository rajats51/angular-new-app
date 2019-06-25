Feature: Login to Treasury application

Background:
	* url baseUrl
	
Scenario:
	Given path 'idp/j_spring_security_check.ht'
  	And form field txtUserID = 'qa2api' 
  	And form field txtOperID = 'admin1' 
 	And form field txtPwd = 'password!1' 
  	When method post 
  	Then status 200 
  	Then print response