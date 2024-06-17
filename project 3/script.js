const clock = document.querySelector('.clock');

setInterval(()=>{ // runs the code on console after given interval of time like here i have give 1000ms.
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000)