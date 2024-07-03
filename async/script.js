setTimeout(() =>
{
    // console.log("soham");
},3000); // after completing 3 sec set timeout will do the work only once. like here after 3 sec this fn will print one time "soham". 

setInterval(() =>
{
    // console.log("sam");
},2000); // setInterval fn do the work after every given time interval. such as here this fn will print "sam" after every 2 sec.

// there is another way to represent setTimeout and setInerval method as ->
const sayHI = () =>
    {
        // console.log("hi");
    }
setTimeout(sayHI,4000); // actually it is a handler so we can not execute the fn inside the setTimeout and setInterval method just give the referance of the fn do not run the fn by giving ().

const greeting = () =>
    {
        // console.log("how are you");
    }
setInterval(greeting,5000);

const changeH1 = () =>
    {
        const head1 = document.querySelector('h1');
        head1.innerHTML = "Learning about js";
    }
const changeMe = setTimeout(changeH1,5000);

document.querySelector('.stop').addEventListener('click',()=>
    {
        clearTimeout(changeMe)
        console.log("stopped")
    })




// make the machanism for on clicking start interval will start and after clicking stop it should be stop
const btnStart = document.querySelector('.start');

btnStart.addEventListener('click',()=>
{
    const start = setInterval(() =>
        {
            console.log("soham");
        },1000); 
    
    const btnStop = document.querySelector('.stop');
    btnStop.addEventListener('click',() =>
    {
        clearInterval(start);
    })
})



