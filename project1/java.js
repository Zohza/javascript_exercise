let loginBtn = document.getElementById("login-button");
let user = "admin";
let pass = "password";
loginBtn.addEventListener("click", function stafflogin(){
    let username= document.getElementById("username").value.trim();
    let password= document.getElementById("password").value.trim();

    if (username ==="" || password ==="" ){
        alert("This fields cannot be empty!!!")
    } else if(username === user && password === pass){
        window.location.href = "../liberian_dashboard.html"
        alert("Password accepted! Logged in!!!")
    } else {
        alert("Incorrect username or password!")
    }
});
// /window.location.js/ 