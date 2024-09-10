
const username = document.getElementById('username').value;
let user = username.toUpperCase();
const password = document.getElementById('password').value;
let pass = password.toUpperCase();
const submit = document.getElementById('submit');

submit.addEventListener("click",myFunction);

function myFunction(){
    if(user === "NEHAB" && pass === "NEHAB123"){
        document.getElementById('user').innerHTML = "Welcome";
        document.getElementById('welcome').innerHTML = user;
        document.body.style.backgroundColor = "green";
    }else {
        document.getElementById('user').innerHTML = "Enter the Right credentials";
        document.getElementById('welcome').innerHTML = "";
        document.body.style.backgroundColor = "red";

        
    }

}