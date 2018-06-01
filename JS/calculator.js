
var result = 0;
var expression = "";
var operator = "";
function calculate()
{
    document.getElementById('answer').value = "HELLO";
}
var input1;
var input2=[];
var display="";
function getFirstInput(inp1)
{

}
function getSecondInput(inp2)
{

}
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