// Immediate Invoked Function Expression 
// iife is like it saves extra line of execution line that is giving refrence to the fn and execution of a function.
// use of iife => to remove global scope pollution
function one()
{
    console.log("this is 1st function");
}
one(); // this will simply execute the fn

(function two() // this is named iife
{
    console.log("this is 2nd function"); // wrap this function in () this
})(); // this is reprsentation of iife just wrap the function in braces and give immediate execution braces.

((a,b) => // and this is unnamed iife
{
    console.log(a*b);
})(4,5)

