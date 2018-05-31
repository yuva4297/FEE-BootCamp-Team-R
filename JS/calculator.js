
var result = 0;
var expression = "";
var operator = null;
function calculate()
{
    document.getElementById('answer').value = "HELLO";
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
display+="+";
document.getElementById('expression').value=display;
}
function subtract()
{
input1=display;
display+="-";
document.getElementById('expression').value=display;
}
function multiply()
{
input1=parseInt(display);
display+="*";
document.getElementById('expression').value=display;
}
function divide()
{
input1=display;
display+="/";
document.getElementById('expression').value=display;
}
function displayResult()
{
var split=document.getElementById('expression').value;
var splitaft=split.split('+')[2];
console.log(input1);
console.log(splitaft);

//var input2=parseInt(split[2]);
//display+=split[2];
document.getElementById('answer')=input2;
}
function clearinputbox()
{
document.getElementById('expression').value="";
display="";
}
function displayInput(disp)
{
    display+=disp.toString();
    document.getElementById('expression').value=display;

}