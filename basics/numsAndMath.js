const numOfPals = 40;
// console.log(numOfPals);

const pals = new Number(50);
// console.log(pals);
// console.log(pals.toString().slice(0,1));

const balance = 23432.343234;
// console.log(balance.toFixed(2)); // give the precision value up to 2 decimal points. 23432.32

const number = 39.3866;
// console.log(number.toPrecision(4)) //.3866 => 3900 return => .39

const randomValue = 1000000;
// console.log(randomValue.toLocaleString('en-IN')); // will add commas in US standards in the values such as 1,000,000.. to make it in Indian standards add 'en-IN'

// console.log(Math);
// console.log(Math.abs(-4)); // absolute value(abs) convert negative number to positive number.
// console.log(Math.round(3.4)); // round off the decimal values to the whole numbers
// console.log(Math.ceil(3.2)); // ceil refers to the ceiling of the house it always choose the upper value it means 
//3.2 => 4 as actual round off is 3..
// console.log(Math.floor(4.9)); // floor always choose the smaller values..  
// console.log(Math.sqrt(49)); //square root

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));
const min = 10;
const max = 20;
console.log(Math.round(Math.random()*(max - min + 1)+min));

