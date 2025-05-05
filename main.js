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