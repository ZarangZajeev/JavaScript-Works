var arr=[7,10,2,3,4,5];

// Map
var square=arr.map((n)=>n**2)
console.log(square);

// Filter
var evens=arr.filter((n)=>n%2==0)
console.log(evens);

var numGtFive=arr.filter((n)=>n>5);
console.log(numGtFive);

// Reduce

var sum=arr.reduce((n1,n2)=>n1+n2);
console.log(sum);

var product=arr.reduce((n1,n2)=>n1*n2);
console.log(product);

var maxNum=arr.reduce((n1,n2)=>n1>n2?n1:n2);
console.log(maxNum);

var minNum=arr.reduce((n1,n2)=>n1>n2?n2:n1);
console.log(minNum);


// sort
var srt=arr.sort((n1,n2)=>n1-n2);
console.log(srt);