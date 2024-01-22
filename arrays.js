var languages=["python","java","js","c#"];
for(let i=0;i<languages.length;i++){
    console.log(languages[i]);
}

//1,    Update an array

languages[1]="php"
console.log(languages);


//2,    add new object in an array at last      - push()

languages.push("C++")
console.log(languages);

//3,    add new object in an array at begining  - unshift()

languages.unshift("C")
console.log(languages);

// 4,   remove last element from an array       -pop()
languages.pop()
console.log(languages);

// 5,   Remove the first element from an array  -shift()
languages.shift()
console.log(languages);

// 6, Reverse an array                          -reverse()
languages.reverse()
console.log(languages);