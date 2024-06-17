const button = document.querySelectorAll('.buttons');
const body = document.querySelector('body');
const head = document.querySelector('.head')
const head2 = document.querySelector('.head2');

button.forEach( (btn) =>
{
    btn.addEventListener('click', (event) =>
    {
        console.log(event.target) // this gives the id, class attributes of an event.
        if(event.target.id === 'orange')
            {
                body.style.backgroundColor = 'orange';
            }
        if(event.target.id === 'black')
            {
                body.style.backgroundColor = 'black';
                head.style.color = 'white';
                head2.style.color = 'white';
            }
        if(event.target.id === 'red')
            {
                body.style.backgroundColor = 'red';
                head.style.color = 'white';
                head2.style.color = 'white';
            }
        if(event.target.id === 'yellow')
            {
                body.style.backgroundColor = 'yellow';
            }
    })
} )
