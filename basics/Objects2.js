const tinderuser = {
    name : "sam",
    id : "sam2443",
    email : "sam@gmail.com"
};

const regularuser = {
    email : "sam@gmail.com",
    userfullname : {
        fullname :{
            name : "sam",
            lastname : "balugade",
            
        }
    }
}
// console.log(regularuser.email);
// console.log(regularuser.userfullname.fullname.name); nested objects

const o1 = {1 : "a" , 2 : "b"};
const o2 = {3 : "c" , 4 : "d"}; 

// console.log({o1 , o2}); // merging of objcts. will return obj inside obj.

// another way : 
const obj = Object.assign(o1,o2); // o2 val will add to the o1 and return merged obj
const obj2 = Object.assign({},o1,o2); // o1 and o2 val will merge and stored in {}. will gurantee that it will return obj

// console.log(obj);
// console.log(obj2);

const target = {a : 1, b : 2};
const res = {b :  4, c : 5};

// const returntarget = Object.assign(target,res);
// console.log(returntarget);
// console.log(returntarget === target); // ans will true because res value will also stored in target and then target to returntarget hence target === returntarget is true. if we want to target unchanged then use empty {}.
// console.log(target);

// we can also use spread operator 
const returnobj = {...target, ...res}; //not necessary of using {}
// console.log(returnobj);

// array of objects
const arr = [
    {
        email : "s@gmail.com",
        name : "sam"
    },
    {
        email : "s@gmail.com",
        name : "sam"
    },
    {
        email : "s@gmail.com",
        name : "sam"
    },

]
//for accessing values :
// console.log(arr[0].name); // first name off array then index number of obj[] and .key

console.log(tinderuser)
console.log(Object.keys(tinderuser)); //will give the keys of tinder user in the form of arrays -> [ 'name', 'id', 'email' ]
console.log(Object.values(tinderuser)); 
console.log(Object.entries(tinderuser)); //will give array of array where inner array is containing pair of key and value 



