// ******************************************for of loop***********************************************


let arr = [1,2,3,4,5];
for(const num of arr) // declare a variable like i have declared here 'num' then 'of' name of an array
    {
        //console.log(num)
    }

// for of loop on strings
let grettings = "Hello World";
for (const greet of grettings)
    {
        //console.log(`each char of grettings: ${greet}`);
    }

// for loop on map
let m = new Map();
m.set('IN', "India")
m.set('UK', "United kingdom")
m.set('WI', "west indies")
m.set('FR', "France")
//console.log(m);
for(let key of m) // this will be in array 
    {
        //console.log(key) 
    }
// in above for of loop all keys and values comes inside the array but we only need keys specifically
for(let [key] of m)
    {
        //console.log(key)// so this for of loop will print the keys value only.
    }
for(let [key, value] of m)
    {
        //console.log(key, ':-', value)
    }
// Note : objects are not iterateble in for of loop


//*******************************************For in loop********************************************/
   


// for in loop in object
let myObj = {
    g1 : "Minecraft",
    g2 : "Palworld",
    g3 : "NFS",
    g4 : "Red Dead Redumption"
}
for (const key in myObj) {
    //console.log(key) // this loop will print keys of myObj loop
}

for (const val in myObj)
{
    // console.log(myObj[val]) // like this we can print values of object
}

// for in loop in arrays

let games = ['minecraft', "palworld", "propnight", "granny"];
for(let keys in games)
    {
        // console.log(keys) // this will print the index number of array elements not element
    }

for(let keys in games) 
    {
        // console.log(games[keys]) // this will print the values of an index numbers in the array
    }

//******************************************** for each loop **************************************** */

let lang = ["java","c","python","rust"];

lang.forEach( function (langName){
    console.log(langName) // write a function without name and pass a parameter for fn about array or obj
} )

let contries = ["ind", "uk", "usa", "can"];

contries.forEach( (contryName) =>{
    console.log(contryName)
} )

let coding = [
    {
        lang : "javascript",
        file : "js"
    },
    {
        lang : "java",
        file : "java"
    },
    {
        lang : "python",
        file : "py"
    }
]

coding.forEach( (item)=>
{   
    console.log(item.file); // item will give us the access of all objects inside the array. to access individal value we need to give specific .name after the item. such as here i have gave .file
} )
