function logout(){
    localStorage.setItem("loginstatus","0")
    window.alert("Logged Out succesfully")
    window.open("Home.html","_self")
}