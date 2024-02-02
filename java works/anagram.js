var string1="race";
var string2="care";

var srtString1=string1.split("").sort().join("");
var srtString2=string2.split("").sort().join("");
 
console.log(srtString1==srtString2?"Anagram":"not Anagram");

var arr=[8,10,2,7];

var srtarr=arr.sort().reverse().join("")
console.log(srtarr);