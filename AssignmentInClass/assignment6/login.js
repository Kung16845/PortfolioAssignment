window.onload = loginLoad;

function loginLoad(){
	var loginForm = document.getElementById("myLogin");
    loginForm.onsubmit = checkLogin;
}

function checkLogin(){
	var form = document.forms["myLogin"];
	const web = window.location.search;
	const urlParams = new URLSearchParams(web);
	const User = urlParams.get('username');
	const Password = urlParams.get('password');
	console.log(User);
	console.log(Password);

	if(form['username'].value === User && form['password'].value === Password)
	{
		alert("Login successful");	
		return true;
	}
	else 
	{
		alert("Invalid username or password. Please try again.");
		return false;
	}
	// var form = document.forms["myLogin"];

	// var savedUsername = localStorage.getItem("username");
	// var savedPassword = localStorage.getItem("password");
	// // var username = form["username"].value;
	// // var password = form["password"].value;

	// if (form["username"].value !== savedUsername|| form["password"].value !== savedPassword) {
	// 	alert("Invalid username or password. Please try again.");
	// 	return false;
	// }
	// alert("Login successful");	
	// return true;
}

			