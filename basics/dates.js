let myDate = new Date();
// console.log(myDate.toString()); //convert to string
// console.log(myDate.toDateString()); // return without time
// console.log(myDate.toISOString()); // represent date and time in numbers like => 2024 - 04 - 16
// console.log(myDate.toJSON()); // same as ISOString
// console.log(myDate.toLocaleString()); // simply prints 4/16/2024 and time => 6:20:32 pm
// console.log(myDate.toLocaleDateString());// only date

// console.log(typeof myDate); // date is an object 

let newDate = new Date(2024 , 3 , 24); // In js months are started from 0. 1st declare year after that month and then date.
// console.log(newDate.toDateString());

let myTimeStamp =   Date.now();
// console.log(myTimeStamp);
// console.log(newDate.getTime);
console.log(Math.round(Date.now()/1000)); // in seconds

let thisDate = new Date();
console.log(thisDate);
console.log(thisDate.getDay()); // we can extract the months, dates and time from the output