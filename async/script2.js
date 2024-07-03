// generate the random color

const randomColor = () =>
    {
        const hex = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0;i < 6; i++)
        {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    }
let interval; 
const startChangingColor = () =>
    {
        const changeBG = () =>
            {
                document.body.style.backgroundColor = randomColor();
            }
        if(interval === null)
            {
                interval = setInterval(changeBG,1000);
            }
    }
const stopChangingColor = function() {
    clearInterval(interval);
    interval = null;
};
document.querySelector('.Start').addEventListener('click',startChangingColor)
document.querySelector('.Stop').addEventListener('click',stopChangingColor)
