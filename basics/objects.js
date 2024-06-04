// if the object is declared with constructure then it is called singletone object.
// singltone = obj.create() -> this is a constructure 
// obj = {} -> this is an object litreals. 


let sym = Symbol();
const user = {
    name : "soham",
    [sym] : "hi",         // used symbole as a key. take care of using brackets while using symbole as a key in objects.
    age : 21,
    email : "sohambalugade@gmail.com",
    isLoggedin : false
};

console.log(user.name); // we are not able to get the value if the key is in string type.
console.log(user["name"]); // use ""  for accessing values from objects by using [].
console.log(user["age"]);
console.log(user[sym]);  

user.email = "soham@gmail.com"; // we can easily change the val of any key val pair by only putting '=' sign
console.log(user.email);

// Object.freeze(user); // we can freeze the changes of objects so that it will never overwritten
// user.email = "soham@google.com";


user.grettings = function()
{
    console.log("hello JS user");
}
console.log(user.grettings())



user.grettingsTwo = function()
{
    console.log(`hello JS user ${user.name}`);  
}
console.log(user.grettingsTwo())


