const marvel = ["thor", "iron man","spiderman"]
const dc = ["superman","flash","batman"]

// marvel.push(dc); // will display dc as a element of marvel (array inside array)
// console.log(marvel[3][2]); // will give the access of inner array

// let marvelAndDc = marvel.concat(dc) 
// console.log(marvelAndDc); // will display the 2 arrays in single array

const allHeros = [...marvel, ...dc];  // ...is a spread operator which spread the entire array works as concatination
console.log(allHeros); 

const spread = [...marvel]; // if u use single array and ... then nothing will change in array
console.log(spread);

let arr = [1,2,4,5,[7,9,3,8],9,34,46,29,[12,43,64],2];
console.log(arr);
console.log(arr.flat(Infinity)); //will display one array with all subarray elements just give depth infinity.


console.log(Array.isArray("Soham")) //asked question about it is array or not will return true or false
// console.log(Array.from("Soham")); // will convert string to array

console.log(Array.from({name : "soham"})); // do not process {} will give empty []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements. like var, obj, array 
