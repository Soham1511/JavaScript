const h =document.getElementById("h"); //we can select in id attribute element by getElementById() method.
console.log(h);

const head = document.getElementsByClassName("heading"); // we can select class attribute by getElementsByClassName() method.
console.log(head);

const h2 = document.querySelector("h2"); // by this method we can select first method.
console.log(h2);

// now our task is to change the background color of 1st list.
const myul = document.querySelector("ul"); 
console.log(myul) // first select the ul

const myli = myul.querySelector("li");
console.log(myli); // then select the li element which you want to change. this line will select the first li

myli.style.backgroundColor = "red" // after selecting the li add the style.
myli.style.padding = "10px"
myli.innerHTML = "this is my first list" // this will change the inner html content like text inside the list.

const myAllLi = document.querySelectorAll("li");
console.log(myAllLi) // this will give us the nodelist of all list that are present in the page. this looks like the array but it is not an actual array. it have property like forEach loop.

// myAllLi.style.color = "red"; // this will not work because of nodelist we have to define the the actual element of that node list that you want to control. like give it's index no inside [];
myAllLi[0].style.color = "red"
myAllLi[0].style.backgroundColor = "white"
myAllLi[0].innerHTML = "one" // so like this we can manupulate the first list of an unordered list. to manupulate second list or anyother change the index number inside the [].

// as we can use forEach loop on the node list lets try that :
myAllLi.forEach( (list)=>{
    list.style.backgroundColor = "white"
    list.style.color = "red"
    list.style.padding = "10px"
    list.style.margin = "2px"
} );

// suppsose we have class name to the lists like i have list-item .
const classList = document.getElementsByClassName("list-item")
console.log(classList) // now we have html collection in that we have list elements but we can not manupulate all the list element because we do not have access of forEach or anything array method.
// so to manupulate this html collection we have to convert this list to an array for that we can use=

const classListArr = Array.from(classList);
console.log(classListArr) // now we have the array of html collection so we can use the loops on that

classListArr.forEach( (li) =>
{
    li.style.color = "orange"
} )

/**
 note = 1) querySelectorAll() will give us the node list of all that element
           on that element we can use forEach loop.

        2) if we have same class names to many element and we have uses getElementByClassName()
           then we have html collction. we can not use any array operation on that.
           to use array operation on html collection we need to convert that collection list to the 
           array by Array.from() method 
 */

