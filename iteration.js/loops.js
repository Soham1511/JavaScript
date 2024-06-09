//for

for(let i = 0; i<10; i++)
    {
        const val = i;
        //console.log(val);
    }


for(let i = 0; i<10;i++)
    {
        //console.log(`outer loop val: ${i}`);
        for(let j = 0;j<10;j++)
            {
                //console.log(`inner loop val: ${j} and inner loop is ${i}`)
                // console.log(`${i} * ${j} = ${i*j}`);
            }
    }


// loops on arrays ->

let arr = ["iron man", "thor", "spider man", "hulk"];
for(let i = 0; i<arr.length; i++)
    {
        //console.log(arr[i]);
    }

// break and continue

for (let i = 1 ; i<=20 ; i++)
    {
        if(i == 15)
            {
                console.log("15 detected");
                // break; it immediattly comes out of loop after conditon is achived
                continue; // it continues to print the result after if statement
            }
        console.log(i)
    }

