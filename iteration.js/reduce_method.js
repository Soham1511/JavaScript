let nums = [1,2,3,4,5,6,7];
let total = nums.reduce((acc, curr) => acc+curr,0); // reduce method accepts tow values that is accumulator and current value. give the intialization to the acc so that codition will start from there.
console.log(total);

let shoppingCart = [
    {
        course : "js",
        price : 2999
    },
    {
        course : "py",
        price : 999
    },
    {
        course : "java",
        price : 3999
    },
    {
        course : "data science",
        price : 5999
    }
];

const totalofAllCourses = shoppingCart.reduce((acc,item) => acc + item.price,0);
console.log(totalofAllCourses)