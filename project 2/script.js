const form = document.querySelector('form');
form.addEventListener('submit', (event)=>
{
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value); // the input value of height and weight will be parse into string
    const result = document.querySelector('#result'); 

    if(height === '' || height < 0 || isNaN(height))
        {
            result.innerHTML = "Please enter the valid height";
        }
    else if(weight === '' || weight < 0 || isNaN(weight))
        {
            result.innerHTML = "Please enter the valid weight";
        }
        else{
           const bmi = (weight / ((height * height)/10000)).toFixed(2);
           // now display the result
           result.innerHTML = `<span>${bmi}</span>`
        }
    
})