var myFirebaseRef = new Firebase("https://saracns.firebaseio.com/");

//********Login********************
$('#signIn').click(function(e) { //Add the 'e' event object to the parameters
    e.preventDefault() //Prevents navigation (the default link click action)
	var loginEmail = $("#loginEmail").val();
	var loginPassword = $("#loginPassword").val();

	myFirebaseRef.authWithPassword({
	  email    : loginEmail,
	  password : loginPassword
	}, function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
	    console.log("Authenticated successfully with payload:", authData);
	    window.location.assign("cms/index.html");
	  }
	});
});

//Check to see if the user is logged into the system
function isLoggedIn(){
	var authData = myFirebaseRef.getAuth();
	if (authData) {
	  console.log("User " + authData.uid + " is logged in with " + authData.provider);
	} else {
	  console.log("User is logged out");
	  window.location.assign("../index.html");
	}
}

//Log the user out of the cms
function logoutUser(){
	myFirebaseRef.unauth();
	window.location.assign("../index.html");
}