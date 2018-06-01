
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
var input1;
var input2=[];
var display="";
function add()
{
    if(display!="")
    {
operator+="+";
input1=display;
display+="+";
document.getElementById('expression').value=display;
    }
    else{
        alert("please enter any numbers before pressing operator");
    }
}
function subtract()
{
    if(display!="")
    {
operator+="-";
input1=display;
display+="-";
document.getElementById('expression').value=display;
    }
    else{
        alert("please enter any numbers before pressing operator");
    }
}
function multiply()
{
    if(display!="")
    {
operator+="*";
input1=display;
display+="*";
document.getElementById('expression').value=display;
    }
    else{
        alert("please enter any numbers before pressing operator");
    }
}
function divide()
{
    if(display!="")
    {
operator+="/"
input1=display;
display+="/";
document.getElementById('expression').value=display;
    }
    else{
        alert("please enter any numbers before pressing operator");
    }
}
function modulo()
{
    if(display!="")
    {
operator+="%";
input1=display;
display+="%";
document.getElementById('expression').value=display;
    }
    else{
        alert("please enter any numbers before pressing operator");
    }
}
function decimal()
{
    display+=".";
    document.getElementById('expression').value=display;
}
function displayResult()
{
    if(operator.length==1)
    switch(operator)
    {
    case "+":
            var split=document.getElementById('expression').value;
            input2=split.split("+");
            result=Number(input1)+Number(input2[1]);
            document.getElementById('answer').value=result;
            break;
    case "-":
            var split=document.getElementById('expression').value;
            input2=split.split("-");
            result=Number(input1)-Number(input2[1]);
            document.getElementById('answer').value=result;
            break;
    case "*":
            var split=document.getElementById('expression').value;
            input2=split.split("*");
            result=Number(input1)*Number(input2[1]);
            document.getElementById('answer').value=result;
            break;
     case "/":
            var split=document.getElementById('expression').value;
            input2=split.split("/");
            result=Number(input1)/Number(input2[1]);
            document.getElementById('answer').value=result;
            break;
    case "%":
            var split=document.getElementById('expression').value;
            input2=split.split("%");
            result=Number(input1)%Number(input2[1]);
            document.getElementById('answer').value=result;
            break;
    default:
            break;

    }
    else{
        alert("invalid expression");
        document.getElementById('expression').value="";
        document.getElementById('answer').value="";
        display="";
    }
}
function clearinputbox()
{
document.getElementById('expression').value="";
document.getElementById('answer').value="";
display="";
}
function displayInput(disp)
{
    display+=disp.toString();
    document.getElementById('expression').value=display;

}