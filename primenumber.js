var num=13;
var isPrime=true

for(i=2;i<num;i++){
    if(num%i==0){
        isPrime=false;
        break
    }
}
var result=isPrime==true?"Is prime number":"Is not prime number"
console.log(result);