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


// nested scope->
/*
lets assume that outer function as a parent and inner function as a child. so while thinking about 
variable scope there is one condition that is parent cannot access child's variable but child child 
can access parent's variable. Remeber icescream example.
*/

function one()
{
    const programmer = "soham";

    function two()
    {
        const name = "sam";
        console.log(programmer);
    }
    // console.log(name); // here parent is trying to access child's variable which is simply not possible

    two();
}
//one();

if(true)
    {
        let name = "soham";

        if(name === "soham")
            {
                let web = "@gmail.com";
                console.log(name + web);
            }
            // console.log(web); this statement is in parent scope and trying to accessing child's var
    }
    // console.log(name);  this statement is outside of parent's scope 

    function addOne(num)
    {
        return num + 1;
    }
    console.log(addOne(5)); // this is the declaration of function by giving specific name.. addOne



    const addTwo = function(num)
    { 
        return num + 2;
    }
    console.log(addTwo(10)) // this is the function declaration by storing the function in variable it allows scope protocols.
