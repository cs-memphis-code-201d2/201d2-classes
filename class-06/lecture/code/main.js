// console.log("New !!!!! Sanity Test!");

// function to say hello
// DRY - dont repeat yourself
// let sayHello = function(whatName,anotherName) 
// {
//     alert("Howdy " + whatName +"! Maybe u know " + anotherName);
//     let someVal = "test";
//     return (someVal);
// }

// // anon function
// let myanonfunc = function(msg)
// {
//     console.log(msg);
// }

// // call the function
// let finishMsg = sayHello("Bob","Kim");
// //console.log("received this message:  " + finishMsg);

// myanonfunc("dont panic");

// do some research into JavaScript arrow functions

// Object literals
// OOP

// Define some instances of objects with object literal notation
const person = 
{
    name: {
        first: "Grace",
        middle: "Nell",
        last: "Hopper"
    },
    age: 85,
    isNinja: true,
    address: 
    {
        street:"main street",
        city: "cordova",
        state: "TN",
        zip: "38016-2435"
    },
    sayHi: function() 
        { 
            alert("Well hello there!!!!"); 
        }
} 

// // dot notation
// console.log("Here is the age of person: " + person.age);
// // call a function
// // console.log(person);
// person.sayHi();
// // log the zip code of my person
// console.log("Zip: " + person.address.zip);
// console.log(person.name.middle);


let company1 = 
{
    name: "Toys Not Us",
    city: "Memphis",
    areYouOpen: function() 
    {        
        return("No we are not open in "+ this.city +". srry.");
    }
}

let company2 = 
{
    name: "Crappy Pies",
    city: "Nashville",
    areYouOpen: function() 
    {        
        return("Yes we are open.");
    }
}

let company3 = 
{
    name: "Geek Zone",
    city: "Paducah",
    areYouOpen: function() 
    {        
        return("Yes we are open.");
    }
}

// use dot notation for company2
console.log("Company 1 Name: " + company1.name + " Is it open? " + company1.areYouOpen());

// add them all to an array
let myCompanyList = [company1, company2, company3];

// loop through company list of city
console.log("Here's all of the cities for the stores");

// print each city for each company instance
for (let i = 0; i < myCompanyList.length; i++)
{
    console.log(myCompanyList[i].city); // use dot notation to get specific properties (vars) and/or methods (function)
}

// What is 'this'








