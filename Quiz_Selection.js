const user = document.getElementById("login")
let user_name = localStorage.getItem("User_name")
let loginstatus=localStorage.getItem("loginstatus")
if (loginstatus!="1"){
    window.location.href="login.html";
}
function userName() {
    user.innerHTML += `<p><img src="User.png">Welcome ${user_name}</p>`
}
function Selection(topic){
    localStorage.setItem("topic",topic)
}
userName()