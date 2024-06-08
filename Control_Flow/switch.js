const month = 3;

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case");
        break;
}  

//************************************ Truthy and falsy value ************************************* */
let userEmail = "sam@gmail.com";
if(userEmail)
    {
        console.log("got user email");
    } 
else{
    console.log("not got the user email")
}

// considerd as a falsy val -> false, 0, -0, BigInt 0n, NaN, undefined, null and "" are the falsy value 
// considerd as a truthy val -> "0", "false", " ", [], {}, function(){}

// Nullish coalescing operator(??) specialy used for handling null and undefined 

let a;
// a = 5 ?? 10 // will assign 5 to variable a
a = null ?? 10 // this is the case for which this nullish coalescing is used for. now the 10 will be assign to the a
console.log(a);

// terinary operator -> condition ? true : false
let score = 500
score > 400 ? console.log("you are passed") : console.log("you are fail")



