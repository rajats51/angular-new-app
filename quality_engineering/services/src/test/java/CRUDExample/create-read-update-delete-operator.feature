Feature: Create, Read, Update and Delete and Operator

  Background: 
    * url baseUrl
    * def login = call read('./login.feature')
    * def allHeaders = { Accept: '*/*', companyId: "qa2api", operatorId: "admin1", Content-Type: 'application/json' } 
    * def basePath = 'EntitlementsWeb/operators/'

	@loginTest
	Scenario: Login to application
		Given path basePath + 'loginauthentication'
		And request {companyId: "qa2api", companyMigrate: true, operatorId: "admin1", password: "password!1"}
		When method post
		And print response
		#And match response contains {payload: {authenticated: true}}
	  	And match response contains {"status": 401, "message": "Full authentication is required to access this resource" }

  	@smokeTest @deleteTest
  	Scenario: Create New Operator
	  	Given path basePath + 'saveoperatorinfo'
		And headers allHeaders
		And request read('Create_Operator.json')
		When method post
	  	Then status 401
		And print response
	  	#And match response contains {payload: { companyId: "qa2api", operatorId: "test10", ackMessge: "Operator information added successfully"}}
	  	And match response contains {payload: {status: "401", message: "Full authentication is required to access this resource" }}
#
# 	@deleteTest
# 	Scenario: Get and Display Operator status After create Operator
# 		Given path basePath + 'displayoperatorstatus'
# 		And request { companyId: "qa2api",  operatorId: "test10", requestedOperatorId: "test10" }
# 		And headers allHeaders
# 		When method post
# 		Then status 401
# 		And print response
# 		And match response contains {payload: {"status": 401, "message": "Full authentication is required to access this resource" }}
# 		#And match response contains { payload: { companyId: "qa2api", operatorId: "test10", operatorStatus: "Enabled", pwStatus: "Password Not Set", lockedStatus: "Unlock/Clear",  pwdStrikeCount: 0, mfaStatus: "NOT ENROLLED", passwordLastChanged: null, pwdExpireDate: "#", lastSuccessfulLogin: null, passwordTemporary: "Not Temporary password", hasActivePortalSession: false}}
#
#   	@smokeTest
#   	Scenario: Update Contact Information
# 	  	Given path basePath + 'updatecontactinfoself'
# 	  	And request { companyId: "qa2api", emailAddress: "richtest@pnc.com", operatorId: "test10", phoneNumber: "4445558888" }
# 	  	And headers { Accept: '*/*', Content-Type: 'application/json' }
# 	  	When method post
# 	  	Then status 401
# 		And print response
# 		And match response contains {payload: {"status": 401, "message": "Full authentication is required to access this resource" }}
# 	  	#And match response contains any {  "errors": [{ field: null, fieldValue: null, errorId: 0, errorCode: "#", errorDesc: "Cannots update the phone and email as the operator is not logged in.", errorType: "NON_CRITICAL"}]}
#
# 	@deleteTest @smokeTest
# 	Scenario: Delete the Operator
# 		Given path basePath + 'deleteoperator'
# 		And request { companyId: "qa2api",  operatorId: "test10", requestedOperatorId: "test10" }
# 		And headers allHeaders
# 		When method post
# 		Then status 401
# 		And print response
# 		And match response contains {payload: {"status": 401, "message": "Full authentication is required to access this resource" }}
# 		#And match response contains { payload: { companyId: "qa2api", operatorId: "test10", ackMessge: "Operator has been deleted successfully." }}
#
#
#
#
# #	@getTest
# #	Scenario: Update operator contact information
# #		Given path basePath + 'updatecontactinfoself'
# #		And headers = { Accept: '*/*', Content-Type: 'application/json' }
# #		And request { companyId: "qa2api", emailAddress: "richtest@pnc.com", operatorId: "test6", phoneNumber: "5556667777" }
# #		When method post
# #		Then status 401
#
#
# #  @getTest
# #  Scenario: Get operator roles list
# #  	Given path 'EntitlementsWeb/operators/getroleoperatorslistforcompany'
# #  	And param companyId = 'qa2api'
# #   	And header Accept = 'application/json'
# #  	And header operatorId = 'admin1'
# #  	When method get
# #  	Then status 401
# #
# # 	@getTest
#
# #	  	Given path basePath + 'updateoperatorstatus'
# #	  	And param status = 'enable'
# #	  	And request { companyId: "qa2api", operatorId: "admin1", requestedOperatorId: "test9" }
# #	  	And headers allHeaders
# #	  	When method post
# #	  	Then status 401
# #		And print response
# #	  	And match response contains {payload: { companyId: "qa2api", operatorId: "test9", ackMessge: "Operator is successfully enabled."}}


