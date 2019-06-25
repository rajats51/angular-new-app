function() {
	/*
	 * Get java environment system property 'karate.env' at beginning of test run.
	 * the env property is the Acronym used to represent the envrioment you want to run in
	 * such as "QA" or "UAT".  Then environment variable value will come from the TestNG.XML
	 * suite file that your run.
	 */
	var env = karate.env; 
	
	//Logs the current environment in the karate.log file under the project root/target folder.
	karate.log('karate.env system property was: ', env);
	
	/*
	 * Sets the ssl to 'true' or 'false.
	 * 
	 * enable GLOBAL ssl (and no certificate is required) - if true
	 */
	karate.configure('ssl', true);

	/*
	 * Base config JSON object property and value default values.
	 * You can set any/all properties that are global and can be used in any 
	 * tests you have written.
	 * 
	 * Basically Global environment variables.
	 */ 
	var config = {
		baseUrl: ''
	};

	//Defaults the environment to 'QA' when no env value is passed in at startup.
	if (!env) {
		env = 'qa'; // a custom 'intelligent' default
	}
	
	/*
	 * if statement used to evaluate the environment variable for the test run.
	 * If the environment variable passed in is not a valid condition/options
	 * then a Non-Valid environment message is logged in the karate.log file.
	 * 
	 * The below conditions are standard environment options.  If you don't need them
	 * then delete them and/or if you need more then add them.
	 */
	if (env.equalsIgnoreCase('qa')) {
		config.baseUrl = 'https://pwows-qa2.pncint.net';
	} 
	else if (env.equalsIgnoreCase('uat')) {
		config.baseUrl = 'https://www.treasury-qa2.pnc.com';
	}
	else if (env.equalsIgnoreCase('dev')) {
		config.baseUrl = 'https://apilink-qa.pnc.com/qa-provider-org/qa/obp-party-soap-service';
	}
	else if (env.equalsIgnoreCase('qa_example')) {
		config.baseUrl = 'test';
	}
	else {
		karate.log("NON-VALID environement value passed in to run from: ", env);
	}
	
	//Log baseUrl in the karate.log file.
	karate.log('karate.baseUrl property was set to: ', config.baseUrl);
	
	// timeout on connection if not received within 10 seconds
	karate.configure('connectTimeout', 10000);
	// timeout on reading response if not received in 10 seconds.
	karate.configure('readTimeout', 10000);
			
	return config;
}