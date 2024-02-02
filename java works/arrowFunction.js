// arrow function

// Add
var add=(num1,num2)=>(num1+num2);
console.log(add(10,20));

// Subtract
var sub=(num1,num2)=>(num1-num2);
console.log(sub(30,10));

// Square
var square=(num)=>(num**2);
console.log(square(6));

// Cube
var cube=(num)=>(num**3);
console.log(cube(3));

// minTwo
var minTwo=(num1,num2)=>num1<num2?num1:num2;
console.log(minTwo(65,43));

// maxTwo
var maxTwo=(num1,num2)=>num1>num2?num1:num2;
console.log(maxTwo(78,72));

// is even
var isEven=(num)=>num%2==0?true:false;
console.log(isEven(7));