window.onload = pageLoad;
function pageLoad() {
    var registerForm = document.getElementById("myForm");
    registerForm.onsubmit = validateForm;
}


function validateForm() {
    var errMsg = document.getElementById("errormsg");
    var password = document.forms["myForm"] ["password"].value;
    var repassword = document.forms["myForm"] ["repassword"].value;
    if (password != repassword) 
    {
        alert("Password do not Match");
        errMsg.innerText = "Passwords do not match.";
        return false;
    }
    else 
    {
        alert("Next Login");
    }
    // var form = document.forms["myForm"];
    // var errMsg = document.getElementById("errormsg");

    // if (!form["firstname"].value || !form["lastname"].value || !form["gender"].value || !form["bday"].value || 
    // !form["email"].value || !form["username"].value || !form["password"].value) {
    //     errMsg.innerText = "Please fill all required fields.";
    //     return false;
    // }

    // if (form["password"].value !== form["password2"].value) {
    //     errMsg.innerText = "Passwords do not match.";
    //     return false;
    // }

    // localStorage.setItem("username", form["username"].value);
    // localStorage.setItem("password", form["password"].value);

    //     return true;
}

