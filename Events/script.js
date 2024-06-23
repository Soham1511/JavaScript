// document.querySelector('#food').onclick = () =>
//     {
//         alert('food')
//     }

document.querySelector('#images').addEventListener('click',()=>
{
    // console.log("ul images was clicked");
})

document.querySelector('#girl').addEventListener('click',() =>
{
    console.log("girl images was clicked");
}) 
/**
 
// so above two event listners is defining the bubblig up propagation. 
firstly images is selected by image id then some action needs to be happen after clicking the image
that is "ul image was clicked".
now the second event listner is defining that on clicking the girl's image the action is need 
to be performed that is girl image was clicked. but this event is comes under 1st event.
so because of bubble up propagation after clicking girl image 'girl image was clicked' event is fired
then 'ul image was clicked' event will print.

but this is wrong in some cases. so to prevet this there is another paramerter in addEventListner
method 1st is event type, 2nd is callback fn then 3rd is true or false value. by defalut there is
flase but if we set it on true then above case will behave oppositly.
 */

// to stop this bubble propagation there is another method
document.querySelector('#road').addEventListener('click',(e) =>
    {
        console.log("road images was clicked");
        e.stopPropagation()
    });

document.querySelector('#images').addEventListener('click',(e)=>
{
    console.log(e.target.parentNode); // will give the li of images(parent node of images)
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG')
        {
            let removeLi = e.target.parentNode;
            removeLi.remove();
        }
    // removeLi.parentNode.removeChild(removeLi);
},false);

