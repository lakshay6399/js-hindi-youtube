const  marvel_heroes = ["thor", "Ironman", "spiderman"]
const  dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeros = marvel_heroes.concat(dc_heroes);
// console.log(allHeros);


const all_new_heros = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heros);


const another_Array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [6, 9]] ]

const real_another_Array = another_Array.flat(Infinity)
// console.log(real_another_Array);

console.log(Array.isArray("lakshay"))
console.log(Array.from("lakshay"))
console.log(Array.from({name: "lakshay"}))// intersting 


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));






