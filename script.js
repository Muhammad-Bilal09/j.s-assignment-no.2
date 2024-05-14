document.getElementById("string") .onclick = function(){
let x="have nice day";
let y=" "+"bilal"+"!"
document.getElementById("statement") .innerHTML="have nice day"+" "+"bilal"+"!";
document.getElementById("output") .innerHTML= x+y;
}
document.getElementById("ask name") .onclick = function(){
     num1=prompt("please enter your first name");
     num2=prompt("please enter your second name");
    document.getElementById("output") .innerHTML= num1+num2;
}
document.getElementById("comparison operator").onclick=function(){
    num1=prompt("enter first number");
    num2=prompt("enter second number");
    if(num1===num2){
    document.getElementById("statement") .innerHTML="num1+"==="num2";
    document.getElementById("output") .innerHTML= "number are equal with datatype" ;
    }
    else if(num1==num2)
    {
        document.getElementById("statement") .innerHTML="num1+"==="num2";
        document.getElementById("output") .innerHTML= "number are equal without datatype" ;
    }
    else {
        document.getElementById("statement") .innerHTML="num1+"==="num2";
        document.getElementById("output") .innerHTML= "number is not equal" ;
    }
}
document.getElementById("if else").onclick=function(){
    marks=+prompt("enter marks out of 100")
    if(marks>=90){
    document.getElementById("statement") .innerHTML="marks";
    document.getElementById("output") .innerHTML= "you got a A+ grade" ;
    }
    else if(marks>=80)
    {
        document.getElementById("statement") .innerHTML="marks";
        document.getEglementById("output") .innerHTML= "you got a B+ grade" ;
    }
    else if(marks>+70){
        document.getElementById("statement") .innerHTML="marks";
        document.getElementById("output") .innerHTML= "you got a c grade" ;
    }

else{
    document.getElementById("statement") .innerHTML="marks";
    document.getElementById("output") .innerHTML= "you are failed" ;
}
}
document.getElementById("testing condition").onclick=function(){
    let A=prompt("enter your age")
    let w=prompt("enter yur weight")
    if(A<=18&&W<=30){
    document.getElementById("statement") .innerText="your age="+A+"<br>+your weight="+W+"";
    document.getElementById("output") .innerHTML= "you are child" ;
    }
    else if(A<=30&&W<=60)
    {
        document.getElementById("statement") .innerText="your age=A<br>your weight=W";
        document.getEglementById("output") .innerHTML= "you are young" ;
    }
    else{
        document.getElementById("statement") .innerText="your age=A<br>+your weight=W";
        document.getElementById("output") .innerHTML= "you are old" ;
    }
}
document.getElementById("nested if").onclick = function() {
    let str1 = prompt("What Is Your Age")
    if (str1 >= 18) {
        let str2 = +prompt("What Is Your Weight")
        if (str2 >= 70) {
            document.getElementById("output").innerHTML = "<p class='text-center pt-2 fw-i'>  You Are fat</p>";
            document.getElementById("originalStatment").innerHTML = "<p> YOur agr:" + str1 + " <br> your weight:" + str2 + "</p>"
        } else {
            document.getElementById("output").innerHTML = "<p class='text-center pt-2 fw-i'>  You Are Smart</p>";
            document.getElementById("originalStatment").innerHTML = "<p> YOur agr:" + str1 + " <br> your weight:" + str2 + "</p>"
        }
    } else {
        document.getElementById("output").innerHTML = "<p class='text-center pt-2 fw-i'>  You Are under 18</p>";
        document.getElementById("originalStatment").innerHTML = "<p> YOur agr :    " + str1 + "</p>"
    }
}
document.getElementById("login").onclick = function() {
    let emai = prompt("Please Enter email")
    let passwored = prompt("Please 8 digit Password")
    document.getElementById("originalStatment").innerHTML = ("YOUR EMAIL: " + emai + " <br>" + "YOUR PASSWORD:  " + passwored)
    document.getElementById("output").innerHTML = "Log IN SuccessFully"
}
document.getElementById("check").onclick = function() {
document.getElementById("originalStatment").innerHTML = ("Congratulations")
document.getElementById("output").innerHTML = ("Congratulations")
}
document.getElementById("clear1").onclick = function() {
    document.getElementById('statement').innerHTML = '';

}
document.getElementById("clear2").onclick = function() {
document.getElementById('output').innerHTML = '';
}