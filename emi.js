var loanAmount=200000;
var interestRate=9;
var tenure=20;

// EMI = [P x R x (1+R)^N]/[(1+R)^N-1]

r=interestRate/12
i=r/100
n=tenure*12

var oneplusi=(1+i)**n

emi=(loanAmount*i*oneplusi)/(oneplusi-1)
console.log(`Monthly interest: ${emi}`);