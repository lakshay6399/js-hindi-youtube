// Dates

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());

console.log(typeof myDate); // OBJECT

// let myCreateDate = new Date(2025, 0 , 12)
// let myCreateDate = new Date(2025, 0 , 12, 5, 3)
let myCreateDate = new Date("2025-01-14")
// console.log(myCreateDate.toLocaleString());



let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());


