//Arrays
const marval = ["Iron man", "Spider Man","Thor"];
const DC = ["Bat Man","Flash","Super Man"];
// marval.push(DC);
// console.log(marval);

// const allHeros = marval.concat(DC);
// console.log(allHeros);

// const allNewHeros = [...marval, ...DC]; // Spreding of two arrays (Concatination of Two diff Arrays);
// console.log(allNewHeros);

const arr = [1,2,5,7, [6,3,8,4,9],8,8,[5,8,9,55,25],5];
const newArr = arr.flat(Infinity); // flat creates one array by combining all sub array.
// console.log(newArr);

console.log(Array.isArray("Soham"));
console.log(Array.from("Soham")); // will convert to the array
console.log(Array.from({name:"Soham"})); // will give empty array []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // 'of' converts variables to the Arrays 



