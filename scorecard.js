// localStorage.setItem("Score",`${18}`)
let result=localStorage.getItem("Score")
let scoretxtel=document.getElementById("scoretxt")
let msgel=document.getElementById("msg")
let imageel=document.getElementById("image")
scoretxtel.innerHTML=`Score : ${result}/20`;
function check(){
    score=parseInt(result)
    if(score <8 ){
        msgel.innerHTML="Bad"
        imageel.innerHTML=`<img src="poor.png">`
    }
    else if(score>=8 && score<=14){
        msgel.innerHTML="Average"
        imageel.innerHTML=`<img src="average.png">`
    }
    else if(score>14 && score<18){
        msgel.innerHTML="Good"
        imageel.innerHTML=`<img src="good.png">`
    }
    else if(score>=18){
        msgel.innerHTML="Excellent"
        imageel.innerHTML=`<img src="excellent.png">`
    }
}
function gotoinstruction(){
    window.location.href="instruction.html"
}
check()