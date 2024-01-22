function isPrimeNum(num){
    let isPrimeNumber=true;
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrimeNumber=false;
            break;
        }
    }
    return isPrimeNumber
 }
 
 function nextPrimeNumber(num){
    let nextNum=num+1;
    while(!isPrimeNum(nextNum)){
        nextNum++;
    }
    return nextNum
 }
 console.log(nextPrimeNumber(29));