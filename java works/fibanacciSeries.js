var num=7;
pre=0;
cur=1;
i=2;
console.log(pre);
console.log(cur);
while(i<num){
    var next=pre+cur;
    console.log(next);
    pre=cur;
    cur=next;
    i++;
}