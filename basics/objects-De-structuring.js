const course ={
    name : "java script",
    teacher : "sam",
    fees : 999
};

//types of accessing values of an obj =

// console.log(course.name); // 1st way of accessing val
// console.log(course["fees"]); //2nd way of accessing val

// obj de structuring ->
const {teacher, fees, name} = course //3rd way of accessing val
console.log(teacher);
console.log(fees); //declare a empty {} and assign it to the name of an object. by doing this we will able to access the val just by seprating the key by ,
console.log(name);

//JSON -> json is in the form of object but it dont have any name 

{
    //this is the json
}

//sometimes api comes with in the array format such as ->
[
    {},
    {},
    {},
    {},
    {} //inside this json obj their further data is stored.
]
