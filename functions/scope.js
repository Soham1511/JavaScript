// let, const and var are the three types variable declaration keywords. Every keywords comes with different 
// scope. Scope in the sense we can not access the val of let or const  keyword outside of scope ex->

let a = 1;
var b = 1;
const c = 1; // these are some var declaration methods in js
console.log(a);
console.log(b);
console.log(c); // such as we can access the var

//lets assume one if condition 
if(true)
    {
        let d = 4; 
        console.log(d);  //here we can access the variable d
    }
// console.log(d); //here we can not access the val of d because it is only accessible inside the if condition 

// but it is totally different in var keyword case. beacause it is accessible outside of scope.

if (true)
    {
        var e = 6;
        console.log(e); 
    }
console.log(e); // variable e is accessible outside of if condition beacause of var keyword.
// usually we do not declare a variable with var keyword. 