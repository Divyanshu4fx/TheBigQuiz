let inputel = document.getElementsByClassName("inputfield")
let messageel = document.getElementById("message")
let afterloginel=document.getElementById("afterlogin")
let containerel=document.getElementById("container")
localStorage.setItem("User_name","dino45")

function signin() {
    let username = inputel[0].value
    let password = inputel[1].value
    if (username != "dino45") {
        messageel.innerHTML = "Invalid UserName";
        return false;
    }
    else if (password != "12345") {
        messageel.innerHTML = "Invalid Password";
        return false;
    }
    else{
        localStorage.setItem("loginstatus","1");
        afterloginel.style.display="flex";
        containerel.style.display="none";
    }
    username.innerHTML=""
    password.innerHTML=""
    return false
}

function gotoHome(){
    window.location.href="Home.html"
}