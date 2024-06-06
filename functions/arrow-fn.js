const user = 
{
    name : "soham",
    msg : function()
    {
        console.log(`${this.name}, welcome to our wibsite`); // this keyword holds the current constext
        //console.log(this) // so this line shows the current context of user object such as user holds the key name and msg, msg further holds the function
    } 
}
user.msg()
//console.log(this); // this line shows the empty object {}. so besically context of 'this' keyword is depends on environment on which javascript is executing. I'm executing in node environment hence getting empty obj if you check the context of 'this' keyword on browser yor will get window object.


// function one()
// {
//     let username = "sam"
//     console.log(this.username) // so we cannot get context of var in function
// }
// one()

const two = () =>
    {
        let name = "soham"
        console.log(this); // this.name will also shows the undefined o/p like normal function but normal function's 'this' gives the context of fn but arrow fn's 'this' will shows the empty obj {}. Unlike regular functions, arrow functions do not have their own 'this' context
    }
// two()

// const add = (num1 , num2) =>
//     {
//         return num1 + num2;
//     }

// console.log(add(3,4));

//implicit arrow fun - where we do not need to add {} so not need of return statement.
const add = (num1 , num2) => (num1 + num2)
console.log(add(3,4))

const sample = () => ({name : "sam"}); //if you want to declare obj inside fn then we should wrap it in ()
console.log(sample())