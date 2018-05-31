
var result = 0;
var expression = "";
var operator = null;
var tempNumber = 0;
function calculate(e)
{
    result = result + parseInt(String.fromCharCode(e.which));
    document.getElementById('answer').value = result;
    var valueFromKeyboard = String.fromCharCode(e.which);
    addValueToOperations(valueFromKeyboard);

    
}

function addValueToOperations(value)
{
    expression = expression + value;
    var isNumber = checkValueIsNumber(value);
    if(isNumber)
    {
        tempNumber = parseInt(value);
        console.log(tempNumber);
    }
    else
    {
        var isOperator = checkValueIsOperator(value);
        if(isOperator)
        {
            operator = value;
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