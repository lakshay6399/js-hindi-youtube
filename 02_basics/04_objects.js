// const tinderUser = new Object() //singleton object
const tinderUser = {}     // non-singleton object

 tinderUser.id = "123abc"
 tinderUser.name = "laksh"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "lakshay.kamboj@gmail.com",
    fullname: {
        userfullname: {
            firstname: "lakshay",
            lastname: "kamboj"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
    id: 1,
    email: "lakshaykqmboj.com"
    },

    {
    id: 1,
    email: "lakshaykqmboj.com"
    },

    {
    id: 1,
    email: "lakshaykqmboj.com"
    },
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "laksh"
}
// course.courseInstructor 

const {courseInstructor: instructor} = course
// console.log(courseInstructor);                   //destructuring
console.log(instructor);   



// const navbar = ({company}) => {

// }                           // react concept

// navbar(company = "lakshay")
 

// *************API******************

// {
//     "name"": "laksh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]







