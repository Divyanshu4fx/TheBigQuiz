const user = document.getElementById("login")
let user_name = localStorage.getItem("User_name")
console.log("Hello World")
function userName() {
    user.innerHTML += `<p><img src="User.png">Welcome ${user_name}</p>`
}
function Start(){
    window.location.href="Quiz_Page.html"
}
userName()