var text="saas"
isPallindrome=true;
var textLength=text.length-1;
var reverse=""
for(let i=textLength;i>=0;i--){
    let char=text[i];
    reverse+=char;
}

console.log(reverse==text?"Pallindrome":"not pallindrome");



// with array

var word="javascript";
var reverseString=word.split("").reverse().join("")
console.log(reverseString==word?"Is pallindrome":"Is not Pallindrome");