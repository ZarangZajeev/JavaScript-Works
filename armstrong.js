var num=153;
var onum=num
var digitCount=String(num).length;
var sum=0

while(num!=0){
    let digit=num%10;
    let power=digit**digitCount;
    sum=sum+power
    num=Math.floor(num/10);
}

console.log(sum==onum?"Armstrong number":"Not armstrong number")

// if (onum==sum){
//     console.log(`Given number ${onum} is Armstrong number`);
// }
// else{
//     console.log(`Given number is not Armstrong number`);
// }
