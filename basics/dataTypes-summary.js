/*
    primitive 7 types = String , Number, Bollean , Null, Undefined, Symbol, BigInt.
    Non-Primitive (referance) = Array, Objects, Functions.
*/



let id = Symbol('123');
let anotherId = Symbol('123'); // Symbol treated every input as a different instance.
// console.log(id === anotherId);
console.log(typeof id); // The type of id is Symbol.

let heros = ["Iron Man", "Thor", "captain America", "Spider Man", "Black Widow"];
// console.log(heros);

let myObj = {
    name : "Soham",
    id : 729,
    rollNo : 51 //These are the key - Value Pairs..
};
// console.log(myObj);

let myFunc = function(){
    console.log("Hello");
}
// console.log(typeof myFunc); //type of myFunc is function but it also called as function object.

let num = null;
console.log(typeof num); //The type of num is object i don't kow why??...


/**
Quick Summary => 

DataType        ReturnType 
1] Integer      Number
2] String       String
3] Null         Object
4] Array        Object
5] function     Function(Function Object)
5] Symbol       Symbol
 */