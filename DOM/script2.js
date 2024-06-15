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

const div = document.createElement("div");
console.log(div);
div.className = "main";
div.id = "myId";
div.setAttribute("title","this is title");

div.style.backgroundColor = "red";
div.style.color = "white";
div.style.padding = "12px"
// div.innerText = "Java Script";
const add_element = document.createTextNode("java script");
div.appendChild(add_element); // works same as inner text.

document.body.appendChild(div);


const h1 = document.createElement("h1");
console.log(h1);
h1.className = "header";
h1.id = "h";
h1.setAttribute("title","this is a header");
const head = document.createTextNode("soham balugade");
h1.appendChild(head);
h1.style.color = "white";
h1.style.fontSize = "15px";
h1.style.margin = "10px";

document.body.appendChild(h1);

