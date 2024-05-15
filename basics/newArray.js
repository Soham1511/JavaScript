//arrays in java scirpt are resizable

let arr = [1, 3, 5, 85, 7];

// console.log(arr[3]);
arr.push(99);
// console.log(arr);

arr.pop()
// console.log(arr);

let mya1 = console.log(arr.slice(0, 3)); // slice do not manipulate to the original array. slice gives the portion of the original array and leaves original array as it is.
console.log("OG", arr);

let mya2 = console.log(arr.splice(0, 3)); // splice manipulate to the original array. It gives the portion of the array and also cut that portion from original array.
console.log("OG", arr);
