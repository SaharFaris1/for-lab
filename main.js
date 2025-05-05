for (let i = 0; i <= 26; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}



for (let i = 1; i <= 10; i++) {
    let square = i * i
    console.log(square)
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}






for (let i = 1; i <= 10; i++) {
    let square2 = i * i; 
    console.log( square2)
}


for (let i = 1; i <= 3; i++) { 

    for (let j = 1; j <= 10; j++) { 
        let result = i * j;
        console.log(result);
    }
  
}



let a = 0
let b = 1

console.log(a);
console.log(b)

for (let i = 2; i < 10; i++) {
    let next = a + b; 
    console.log(next); 
    a = b;
    b = next; 
}





// Array



let characters = [
    { name: "Luke Skywalker", height: 177, gender: "male", mass: 77, eyeColor: "brown" },
    { name: "Leia Organa", height: 160, gender: "female", mass: 56, eyeColor: "blue" },
    { name: "Han Solo", height: 180, gender: "male", mass: 80, eyeColor: "brown" },
    { name: "Chewie", height: 222, gender: "male", mass: 190, eyeColor: "black" },
    { name: "kevien", height: 106, gender: "male", mass: 32.2, eyeColor: "red" },
];

  //Map

  let names = characters.map(function(character) {
    return character.name;
});

let heights = characters.map(function(character) {
    return character.height;
});

console.log(names);
console.log(heights);

console.log(names);
console.log(heights);



//reduce

let totalHeight = characters.reduce(function(accumulator, character) {
    return accumulator + character.height; 
}, 0);

console.log(totalHeight);

//filter 


let lesheight = characters.filter(function(character) {
    return character.height < 200;
});


let maleCharacters = characters.filter(function(character) {
    return character.gender === "male";
});

console.log(lesheight);
console.log(maleCharacters);



//sort

let sortByMass = characters.slice().sort(function(a, b) {
    return a.mass - b.mass; 
});

const sortByHeight = characters.slice().sort(function(a, b) {
    return a.height - b.height; 
});

console.log( sortByMass);
console.log(sortByHeight);


// every 


let massMoreThan40 = characters.every(function(character) {
    return character.mass > 40; 
});


const shorterThan200 = characters.every(function(character) {
    return character.height < 200; 
});

console.log(massMoreThan40);
console.log( shorterThan200);

// some 
let blueEyes = characters.some(function(character) {
    return character.eyeColor === "blue"; 
});


let tallerThan210 = characters.some(function(character) {
    return character.height > 210; 
});

console.log(blueEyes);
console.log( tallerThan210);