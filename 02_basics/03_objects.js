// singleton 




// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "laksh",
    "full name": "laksh kamboj",
     [mySym]: "mykey1",
    age: 24,
    location: "new delhi",
    email: "lakshay.kamboj31@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "lakshay@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "lakshay.kamboj@.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("hello js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
