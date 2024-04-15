let name = "Soham";
let repoCount = "10";
console.log(`My name is ${name} and my repository count on github is ${repoCount}`);
// console.log(name +" "+ repoCount + " repo"); //String conactination

const gameName = new String('Palworld-game-is-beautiful'); 
console.log(gameName);//another Way to declare the String by using JavaScript Objects. OutPut will be in key-value Pairs.
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('w'));
console.log(gameName.substring(0,3));
console.log(gameName.slice(-8,4));

const newString = "   PalWorld-game  ";
console.log(newString);
console.log(newString.trim());

const url = "sohambalugade.com";
console.log(url.replace('.com','#in')); // first search .com in string(url) and replace it with #in.

console.log(url.includes('@')); // ask a question to the string  is there any given substring present or not. ans will be true or false.
console.log(gameName.split('-'));
