function displayNumber(num){
    result.value+=num;
}
function clearBox(){
    result.value=""
}
function evalExpresion(){
    let currentExpresion=result.value;
    let output=eval(currentExpresion);
    result.value=output
}
function backSpace(){
    let currentValue=result.value.slice(0,-1);
    result.value=currentValue;
}