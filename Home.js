let StartEl = document.getElementById("Start");
// localStorage.setItem("loginstatus","1")
let lbuttonel=document.getElementsByClassName("lbutton")
let user_name = localStorage.getItem("User_name")
function Start() {
  if (loginstatus == null) {
    window.open("login.html","_self")
  }
  else {
    window.open("Quiz_Selection.html","_self")
  }
}
window.addEventListener('load', function() {
  var customPosition = 100;
  window.scrollTo(0, customPosition);
});

let loginstatus=localStorage.getItem("loginstatus");
if (loginstatus=="1"){
  lbuttonel[0].innerHTML=`<button id="login1"></button>
  <div id="logMenu">
  <a href="#">My Account</a>
  <a href="logout.html" target="_self">Logout</a>`
  const user = document.getElementById("login1")
  userName(user)
}
function userName(user) {
  user.innerHTML = `<p><img src="User.png">Welcome ${user_name}</p>`
}