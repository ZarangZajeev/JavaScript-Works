function isFibanacciNum(num){
    let isFibanacci=true;
    let i=2;
    let nextNum=num+1;
    while(i<num){
        let next=num+nextNum;
        num=nextNum;
        nextNum=next
        i++;
    }
}
