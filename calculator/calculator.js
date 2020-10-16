let firstnum = "";
let secnum = "";
let op = "";
let operationcompleted = false;
document.addEventListener("DOMContentLoaded", function() {
    const calculator = document.getElementById('calculator');
    calculator.addEventListener('click', (event) => {
        handler(event);
    }) 
});

function operate(a,operator,b){
    switch(operator){
        case '+' :
            return a + b
           
        case '-' :
            return a - b
            
        case '*' :
             return  a * b
            
        case '/' :
            if(a === 0 || b === 0){
        
                return "Don't try to crash me"
            }
            else{
            
            return a / b
            }
        }
    }
    
function handler(event){
    // does nothing if display is pressed
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return
    }
    
    else if (event.target.value === "c"){
       clear()
       
    }  
    
    else if (event.target.value === "ce"){
    backspace();
    }
    
    else if(event.target.value === '='){
        equals()
    }
    
    else if(event.target.value === "+"||event.target.value === "*"||event.target.value === "-"||event.target.value === "/"){
        
        event = event.target.value;
        operators(event)
    }
    
    else if (op === ""){
        event = event.target.value;
        firstnumber(event);
    }
    
    else if (op !== ""){
        event = event.target.value;
        secondnumber(event);
    }
}

function clear(){
    firstnum = '';
    secnum = '';
    op = '';
    display.innerHTML='0';
}

function equals(){
// If an equals was pushed before an number  
if(firstnum == "" && secnum == "") {
    display.innerHtml = '0';
    return
    }
//if no second number was entered displays first again
if (secnum == "" && firstnum != ""){
    display.innerHTML = firstnum;
    return
    }
else{

    result = operate(Number(firstnum), op, Number(secnum));
        if(result === "Don't try to crash me"){
            display.innerHTML  = result
            firstnum = "";
            secnum = "";
            op = "";
        }
        else{
            display.innerHTML = result; 
            //Sets first number as the result incase of an ongoing calculation
            firstnum = result;
            secnum = "";
            op = "";
            // A Booleen to know if an operation has been completed 
            operationcompleted = true;
            }
        }  
}


function operators (event){
    
    decimal.disabled = false;
    if (firstnum !== "" && secnum !== "" && op !== ""){
        result = operate(Number(firstnum), op, Number(secnum));
        // Result will go out of display if to large.
        display.innerHTML = result;
        firstnum = result;
        secnum = "";
        op = event;
    }
    // If an operator was pushed before a number
    if (firstnum === "" && secnum === ""){
        op = "";
    }
    else{
        op = event;
    }
}

function firstnumber(event){
    //If a calculation has been completed already then a number was chosen resets to perform a new calculation
    if(operationcompleted === true){
        firstnum = ""; 
        operationcompleted = false;
    }
    firstnum += event;
    decimal.disabled = false;
    //checks for decimal and if found disables the button
    if (firstnum.includes(".")) {
        decimal.disabled = true;   
    }
    
    if (firstnum.length<10){
    display.innerHTML = firstnum;
    }
}

function secondnumber(event){
    decimal.disabled = false;
    secnum += event;
    if (secnum.includes(".")) {
        decimal.disabled = true;   
    }
    if (secnum.length<10){
    display.innerHTML = secnum;
    }
}
//erases only what is on display
function backspace(){
    if (firstnum !== "" && secnum !== ""){
        display.innerHTML = '0';  
        secnum = "";
    }
    else if(secnum === "") {
        display.innerHTML = '0';
        firstnum = "";
    }
}

