/*
 * This is the basic HTTP authorization needed to log into an API(Rest Service)
 * 
 * @param username user name for authentication.
 * @param password password for authentication
 */
function(creds) {
  var temp = creds.username + ':' + creds.password;
  var Base64 = Java.type('java.util.Base64');
  var encoded = Base64.getEncoder().encodeToString(temp.bytes);
  return 'Basic ' + encoded;
}