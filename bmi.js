var weight=60
var height=170

var height_m=height/100;
var bmi=weight/(height_m**2);
console.log(`BIM: ${bmi}`);

if(bmi<18.5){
    console.log("Under weight");
}
else if(18.5<=bmi<=24.9){
    console.log("Normal weight");
}
else if(25.0<=bmi<=29.9){
    console.log("Overweight");
}
else if(30.0<=bmi<=34.9){
    console.log("Obesity (Class I)");
}
else if(35.0<=bmi<=39.9){
    console.log("Obesity (Class II)");
}
else if(bmi>40.0){
    console.log("Obesity (Class III)");
}