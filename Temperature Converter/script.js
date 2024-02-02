function celsiusToFahrenheit(){
    let temp=document.querySelector("#box1").value;
    let result=((+temp)*9/5)+32;
    // document.querySelector("#far-result").innerHTML=result;
    box2.value=result
}
function fahrenheitToCelsius(){
    let temp=document.querySelector("#box2").value;
    let result=5/9*(temp-32);
    // document.querySelector("#cel-result").innerHTML=result;
    box1.value=result
}
