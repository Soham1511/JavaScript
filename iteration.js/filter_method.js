const animals = ["lion", "tiger", "elephant", "wolf", "hourse"];

const allAnimals = animals.forEach( (animal) =>{
    console.log(animal);
    return animal;
} )
console.log(allAnimals); // the for each loop do not return anything the above fn will print the names of an animals but the variable returns the undefined.

// so to return some specific element of an array we should use filter property

let myNums = [1,2,3,4,5,6,7,8,9,10];
let newNums = myNums.filter( (nums) =>{
    return nums % 2 == 0
} )
console.log(newNums); // so this property also need an call back fn like for each but it returns the result to the declared variable.

let nums = [1,2,3,4,5,6,7,8,9,10,12];
let devisibleBy3 = nums.filter( (num) => num % 3==0 ) // if we do not use {} after arrow fn declaration so we do not need to define return keyword direcly we can give the  condition.
console.log(devisibleBy3);

let numbers = [22,45,56,356,8764,47,733,93];
let arr = [];
numbers.forEach( (num) => {
    if(num % 2 ==0)
        {
            console.log(num);
            arr.push(num)
        }
} )
console.log(arr);


let mybooks = [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction",
        isbn: "978-0-06-112008-4"
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopian",
        isbn: "978-0-452-28423-4"
      },
      {
        title: "Moby-Dick",
        author: "Herman Melville",
        year: 1851,
        genre: "Fiction",
        isbn: "978-0-14-243724-7"
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Romance",
        isbn: "978-0-19-953556-9"
      },
      {
        title: "The Great Gatsby",
        author: "Mr.unknown",
        year: 1925,
        genre: "Fiction",
        isbn: "978-0-7432-7356-5"
      }
];

const userBook = mybooks.filter( (bk) => bk.genre === 'Fiction' );
const newBook = mybooks.filter( (books) => books.year > 1920 )
//console.log(userBook);
console.log(newBook);



// ****************************************** Chening **************************************************

let num = [1,2,3,4,5,6,7,8,9,10];
let myno =num.map( (no) => no*10 ).map((no) => no+1).filter((no)=> no >= 50);
console.log(myno); // we can use multiple methods in one time like here we have use .map.map.filter 
