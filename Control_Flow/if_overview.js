let temprature = 41;
if (temprature === 41)
    {
        console.log("temprature is 41");
    }
    else{
        console.log("temprature is not equal to 41");
    }
  
let user = "sam";
let score = 200;
if(score > 100)
    {
        const superPower = "hypnosis";
        console.log(`${user} can do ${superPower}`);
    }
    else{
        console.log("she can not able to do hypnosis");
    }

//implisit implimentation of if statement =>
let balance = 1000;
if (balance > 500) console.log(`Your balance is ${balance}. Which is greater than 500`); //we assume that there is a scope.

const isLoggedIn = true ;
const isDebit = true;
if(isDebit && isLoggedIn)
    {
        console.log("user access");
    }
else{
    console.log("not allowed");
}
