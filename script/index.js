const doSignIn = () => {
    const userNameField = document.getElementById("username-input");
    const passwordField = document.getElementById("password-input");
 const userName = userNameField.value;
 const password = passwordField.value;

 if(userName == "admin" && password == "admin123"){
    alert("Sign In Successfull!");
    window.location.href = "/dashboard.html";
 } else {
    alert("Enter Correct Credentials!");
    userNameField.value= "";
    passwordField.value= "";
    return;
 }
};