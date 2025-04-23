// primitive dataTypes

// there are 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const ourSide = null

let userEmail;
const id = Symbol('1234')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 223423456756n 


// Non - Primitive / reference

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj= {
    name: "lakshay",
    age: 24,
}


const myFunction = function(){
console.log("hello world");
}


console.log(typeof anotherId);


// ********************************************************************

// stack(primitive), Heap(Non-primitive) 

let myYoutubeName = "lakshaykamboj.com"
let anotherName = myYoutubeName
anotherName = "chai or code"
console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "lakshay.kamnboj2.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "lakshaykamboj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


