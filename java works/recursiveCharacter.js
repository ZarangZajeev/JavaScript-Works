var text="samplequestions"

var ch={}

text.split("").map(c=>c in ch?ch[c]+=1:ch[c]=1)
console.log(ch);

console.log(Object.entries(ch).reduce((c1,c2)=>c1[1]>c2[1]?c1:c2));