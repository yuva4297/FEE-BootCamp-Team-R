
var result = 0;
var expression = "";
var operator = "";
var tempNumber = 0;
function calculate(e)
{
    //result = result + parseInt(String.fromCharCode(e.which));
    
    var valueFromKeyboard = String.fromCharCode(e.which);
    addValueToOperations(valueFromKeyboard);
    calculateExpression();
    document.getElementById('answer').value = result;
    
}

function addValueToOperations(value)
{
    expression = expression + value;
    var isNumber = checkValueIsNumber(value);
    if(isNumber)
    {
        tempNumber = parseInt(value);
        if(operator == "")
        {
            result = tempNumber;
        }
        console.log(tempNumber);
    }
    else
    {
        var isOperator = checkValueIsOperator(value);
        if(isOperator)
        {
            operator = value;
            console.log(operator);
        }
    }
}
function checkValueIsNumber(value)
{
    if(isNaN(value))
    {
        
        return false;
    }
    return true;
}
function checkValueIsOperator(value)
{
    if(value == "+" || value == "-" || value == "*" || value == '/' )
    {
        return true;
    }
    return false;
}
function calculateExpression()
{
    var lastValue = expression.charAt(expression.length-1);
    var lastBeforeValue = expression.charAt(expression)
    if(checkValueIsNumber(lastValue))
    {
        doMathOperation();
    }
}
function doMathOperation()
{
    switch(operator)
    {
        case "+":
            result = result + tempNumber;
            break;
        case "-":
            result = result - tempNumber;
            break;
        case "*":
            result = result * tempNumber;
            break;
        case "/":
            result = result /tempNumber;
            break;
        case "":
            result = tempNumber;
            break;
        
    }
}
var res;
var input1;
var input2;
var display="";
function getFirstInput(inp1)
{

}
function getSecondInput(inp2)
{

}
function add()
{
input1=display;
}
function subtract()
{
input1=display;
}
function multiply()
{
input1=display;
}
function divide()
{
input1=display;
}
function displayResult()
{

}
function clearinputbox()
{
document.getElementById('inputbox').value="";
}
function displayInput(disp)
{
    display+=disp.toString();
    document.getElementById('inputbox').value=display;

}