const form = document.querySelector('form');
form.addEventListener('submit', (event)=>
{
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value); // the input value of height and weight will be parse into string
    const result = document.querySelector('#result'); 
    const msg = document.querySelector('.msg');

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
           if(bmi < 18.6)
               {
                   msg.innerHTML = 'The BMI is less';
               }
           if(bmi > 18.6 && bmi < 24.9)
               {
                   msg.innerHTML = 'The BMI is in normal range';
               }
           if(bmi > 24.9)
            {
               msg.innerHTML = 'The BMI is more than normal range';
            }
        }

})