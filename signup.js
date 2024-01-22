let inputel=document.getElementsByClassName("inputfield");
function signup(){
    let userName=inputel[0].value;
    let email=inputel[1].value;
    let password=inputel[2].value;
    if (!email.includes("@")){
        window.alert("Please enter valid email id.")
        return false
    }
    window.alert("Sign Up succesfull");
    window.location.href="login.html"
    return false
}