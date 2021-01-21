const prompt = require("prompt-sync")();

// this would give a boolean result
console.log(3==2);

// writing a multiline if statement

let x = 4;
if (x==42){
    console.log("entered if statement");
    console.log("hallow");
    console.log("what shall i say");
    console.log("this is an example");
}
console.log("program ended");


// JS would convert numeric strings into int or float accordingly and do the maths for you.
// however, it is not a good practice and you should always convert the string yourself.
let y = "3";
console.log(y/ 2);

// using if/else
let z = prompt("give me a number: ")
z = parseFloat(z);
if(z%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

// using if/else if/else

if(z< 10){
    console.log("smaller than 10");
}
else if(z>=10 && z<20){
    console.log("between 10 and 20");
}
else{
    console.log("something");
}



// if a number is divisible by 2 it will say divisible by 2
// if a number is divisible by 3 it will say divisible by 3
// if a number is divisible by 2 AND 3 it will say divisible by both


// ternary operator
let p = prompt("put a number: ");
console.log( p%2==0 ? "Even":"Odd")

