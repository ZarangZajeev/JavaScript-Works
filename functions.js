
function maxTwo(num1,num2){
    return num1>num2?num1:num2;
}

console.log(maxTwo(20,15));

// =============================

console.log(maxTwo(20,15));

function maxTwo(num1,num2){
    return num1>num2?num1:num2;
}

// Hoisting     - "when javascript executing a program align all fuctions top of that program starts"

//===================================================
function nthDigitMax(num1,num2){
    let first=num1%10;
    let second=num2%10;
 
    return first>second?num1:num2;

    // return num1%10>num2%10?num1:num2;
 }
 
 console.log(nthDigitMax(127,870));

 //============================================

