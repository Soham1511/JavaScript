/**
 
Stack and Heap
 - Stack Memory is used in Primitive Data Types..
 - Heap Memory is used in non-Primitive(Reference) Data Types. 
 */

 let myName = "Soham";
 let anotherName = myName;
 console.log(myName);
 console.log(anotherName);
/**
 In stack Memory the declared variable used to copid in another declared variable.
 But in Heap memory only reference value is provide to the another object variable.

 */

let userOne = {
    email : "soham@gmail.com"
};

let userTwo = userOne;

userTwo.email = "Sam@gmail.com";
// console.log(userOne.email);
// console.log(userTwo.email);
