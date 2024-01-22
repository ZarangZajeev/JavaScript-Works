var student={
    id:100,
    name:"Vijay",
    course:"django",
    gender:"male"
}

console.log(student.name);
console.log(student["name"]);

student["email"]="vijay@gmail.com"

console.log(student);


// attribute check?

console.log("contact" in student);
console.log("name" in student);