const parent = document.querySelector(".parent");
console.log(parent);  // will select and show the parent class.
console.log(parent.children); // this will give the html collcetion of days
console.log(parent.children[1]); // to access individual child add its index no just like an array.

// for(let i = 0; i<parent.children.length; i++)
//     {
//         console.log(parent.children[i].innerHTML)
//     }

const day1 = document.querySelector(".day");
console.log(day1);
console.log(day1.parentElement);