function myname() {
    console.log("S");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("M");
}
// myname();

function addingTwoNumbers(num1, num2){
    return num1 + num2;
}
console.log(addingTwoNumbers(3,4));

function product(no1, no2)
{
    console.log(no1*no2);
}
let res = product(3,4); // the val of product will not be store in res because we haven't return anything so res will be undefined
console.log(res); //if we want to get the o/p from res var then we need to return the product val. 

function division(a , b)
{
    let divisonRes = a/b;
    return divisonRes;
}
console.log(division(8,4));

function userloggedin(username)
{
    return `${username} is logged in`;
}
console.log(userloggedin("soham"));


function userloggedin(username)
{
    if(!username) // !username means username is not provided it is undefined 
        {
            console.log("please enter your name");
            return;
        }
    return `${username} is logged in`;
}
console.log(userloggedin("sam"));
