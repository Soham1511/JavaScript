// let mydate = new Date(); // date is an object   
// console.log(mydate); //not readable output

// console.log(mydate.toString()); //will display live date and time  
// console.log(mydate.toDateString()); //will not display time.
// console.log(mydate.toLocaleString()); //will display the date in local format
// console.log(mydate.toJSON());

let mynewdate = new Date (2025 , 0 , 5); // we can also declare specific dates where months should be start from 0.
// console.log(mynewdate.toDateString());

let timeStamp =  Date.now();
console.log(Math.floor(timeStamp/1000)); //will convert to seconds. and .floor is round off method
console.log(mynewdate.getTime());

let mydate = new Date();
console.log(mydate.getMonth() + 1); // if you want only month,day or year then you can use .get method. +1 because months are starts from 0

console.log(`The day is: ${mynewdate.getDay()}, And the time is ${mynewdate.getTime()}`);

let newAboutLocalString = mydate.toLocaleString('default', {
    weekday: "long",
}); // we can extract extra info about date and time
console.log(newAboutLocalString);