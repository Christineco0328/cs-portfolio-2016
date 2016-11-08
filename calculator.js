//Creates variables and links to Calculator Html
var factor1 = document.getElementById("factor1");
var operation = document.getElementById("operation");
var factor2 = document.getElementById("factor2");
var answerButton = document.getElementById("answerButton");
var answerScreen =document.getElementById("answerScreen");

//.addEventListener allows program to listen to when the button is pressed and then follow through with operation or calculation.
//only have to attach ".addEventListener" to answerButton because answer will show up only once the BUTTON is clicked.
answerButton.addEventListener("click", function(){
    var num1 = factor1.value
    var num2 = factor2.value
    var math = operation.value
    
//condition statement for when "+" is selected as an operation

    if (math === "+"){ 
        var a= parseInt(num1);
        var b= parseInt(num2);
        var c= a+b;
        answerScreen.innerHTML= c;  
    }
//If the initial "if" statement is false, program will check to see if next else if statement is true. 
//condition statement for when "-" is the selected operation
    else if (math === "-"){
        var a= parseInt(num1);
        var b= parseInt(num2);
        var c= a-b;
        answerScreen.innerHTML= c; 
    }
//Tells program to multiply the two numbers together when "*" is the selected operation.     
    else if (math === "*") {
        var a= parseInt(num1);
        var b= parseInt(num2);
        var c= a*b;
        answerScreen.innerHTML= c;
        
//Tells program to divide when "/" is the selected operation. 
    }
    else if (math === "/") {
        var a= parseInt(num1);
        var b= parseInt(num2);
        var c= a/b;
        answerScreen.innerHTML= c; 
    }
//Tells program to take the first value(num1) to the power of the next value(num2).    
    else if (math === "^") {
        var a= parseInt(num1);
        var b= parseInt(num2);
        answerScreen.innerHTML= Math.pow(a,b); 
    }
//tells program to do "mod" operation, which is finding the remainder.      
    else if (math === "%") {
        var a= parseInt(num1);
        var b= parseInt(num2);
        var c= a%b;
        answerScreen.innerHTML= c; 
    }

;})