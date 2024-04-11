// When the button is clicked
function doTheMath(){
    // create varibles
    var returnValue;
    var theOperator;

    //get the operands
    var firstValue = document.getElementById("firstOperand").value
    var secondValue = document.getElementById("secondOperand").value;


    //get the operand types
    var firstValue_type = document.getElementById("choice1").value;
    var secondValue_type = document.getElementById("choice2").value;

    //get the operator
    var radios = document.getElementsByName("operator");

    //convert the operands 
    switch (firstValue_type) {
        case "number":
            firstValue = Number(firstValue);
            break;
    
        case "string":
            firstValue = String(firstValue);
            break;
    }

    switch (secondValue_type) {
        case "number":
            secondValue = Number(secondValue);
            break;
    
        case "string":
            secondValue = String(secondValue);
            break;
    }

    //loop through each possible value and find the checked one

    for (let i = 0, length =radios.length; i < length; i++) {
        
        if(radios[i].checked){
            theOperator = radios[i].value;

            //do a differen operation based on which operator was selected
            switch (radios[i].value) {
                case "+":
                    returnValue = firstValue + secondValue;
                    break;
                case "-":
                    returnValue = firstValue - secondValue;
                    break;
                case "*":
                    returnValue = firstValue * secondValue;
                    break;
                case "/":
                    returnValue = firstValue / secondValue;
                    break;
                case "%":
                    returnValue = firstValue % secondValue;
                    break;
                case "concat":
                    returnValue = firstValue + secondValue;
                    theOperator = "+";
                    break;
                case "==":
                    returnValue = firstValue == secondValue;
                    break;
                case "===":
                    returnValue = firstValue === secondValue;
                    break;
                case "!=":
                    returnValue = firstValue != secondValue;
                    break;
                case "!==":
                    returnValue = firstValue !== secondValue;
                    break;
                case ">":
                    returnValue = firstValue > secondValue;
                    break;
                case ">=":
                    returnValue = firstValue >= secondValue;
                    break;
                case "<":
                    returnValue = firstValue < secondValue;                    
                    break;
                case "<=":
                    returnValue = firstValue <= secondValue;
                    break;
            }
            break;
        }
                
    }

    //display the operation
    if(typeof(firstValue) === "string"){
        firstValue = `"${firstValue}"`;
    }
    if(typeof(secondValue) === "string"){
        secondValue = `"${secondValue}"`;
    }
    document.getElementById("displayOperation").innerHTML = firstValue + theOperator + secondValue;

    //display the return value
    document.getElementById("displayResults").innerHTML = returnValue;
};