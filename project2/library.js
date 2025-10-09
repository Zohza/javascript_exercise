let loginBtn = document.getElementById("login");
let userName = "admin";
let password="library123";
loginBtn.addEventListener("click",function libarianLogin(){
    let user = document.getElementById("username").value.trim();
     let pass = document.getElementById("password").value.trim();
     if (user=== "" || password === ""){
     alert("This field cannot be empty")
     }else if (user === userName && pass === password){
        window.location.href="../project2/liberian_dashboard.html"
        alert("Username and Password correct! Logged In!!")
     }else{
    alert("Invalid Credentials!")
     }
});



