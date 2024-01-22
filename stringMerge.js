//if strings length is same
// var firstString="ABC";
// var secondString="PQR";
// var mergedString=""

// for(let i=0; i<firstString.length;i++){  
//     let sub=firstString[i]+secondString[i];
//     mergedString+=sub;
// }

// console.log(mergedString);



//if strings length is different
var firstString="ABC";
var secondString="PQRST";
var mergedString=""


var smallestString=firstString.length<secondString.length?firstString:secondString;
var largestString=firstString.length>secondString.length?firstString:secondString;
for(var i=0;i<smallestString.length;i++){
    var sub=firstString[i]+secondString[i];
    mergedString+=sub
}
if(smallestString.length==largestString.length){
    console.log(mergedString);
}
else{
    console.log(mergedString+largestString.slice(smallestString.length,));
}
