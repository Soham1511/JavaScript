const animals = ["lion", "tiger", "elephant", "wolf", "hourse"];

const allAnimals = animals.forEach( (animal) =>{
    console.log(animal);
    return animal;
} )
console.log(allAnimals); // the for each loop do not return anything the above fn will print the names of an animals but the variable returns the undefined.

// so to return some specific element of an array we should use filter property

let myNums = [1,2,3,4,5,6,7,8,9,10];
let theNums = myNums.filter( (nums)=> nums > 4 ); // so this property also need an call back fn like for each but it returns the result to the declared variable. but notice that we haven't use {} after arrow fn declaration. if we use this it will return empty array([]);
console.log(theNums);   