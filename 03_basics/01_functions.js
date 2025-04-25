
function sayMyName(){
    console.log("L");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
}
// sayMyName()    

// function addTwoNumber(number1, number2){  //parameters
//     console.log(number1 + number2)

// }

function addTwoNumber(number1, number2){  //parameters
// let result = number1 + number2
// return result

return number1 + number2

}

const result = addTwoNumber(3,4) // arguments
// console.log(result);



function loginUserMessage(username = "kamboj"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("laksh"))
// console.log(loginUserMessage())


function calculateCartPrice(value1, value2,...num1){
    return num1

}
// console.log(calculateCartPrice(200, 300, 400, 500))

const user = {
    username: "laksh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "laksh",
    price: 399
})

const myNewArray = [100, 200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 4000, 5000]))
