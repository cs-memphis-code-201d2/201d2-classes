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

// dot notation
console.log("Here is the age of person: " + person.age);
// call a function
// console.log(person);
person.sayHi();
// log the zip code of my person
console.log("Zip: " + person.address.zip);
console.log(person.name.middle);



