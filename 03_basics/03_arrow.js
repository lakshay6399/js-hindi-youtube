const user = {
    username: "lakshay",
    price: 999,

    welcomeMessage: function () {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "laksh"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "lakshay"
//     console.log(this.username); 
// }
// chai()



// ********** arrow function ********

// const chai = function () {

//     let username = "lakshay"
//     console.log(this.username)
// }

const chai = () => {

    let username = "lakshay"
    console.log(this)
}


// chai()



// const addTwo = (num1, num2) => {
// return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "lakshay"})

console.log(addTwo(4,5));


// const myArray = [2,4,5,6,7]
//  myArray.forEach(() => {})

