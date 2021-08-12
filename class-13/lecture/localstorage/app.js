"use strict";

// target our order form from the html
const orderForm = document.getElementById("orderForm");
const orders = document.getElementById("orders");

// A class to hold the coffee orders
class Coffee {
  constructor(name, size, milk, isHot, drinkType) {
    this.name = name;
    this.size = size;
    this.isHot = isHot;
    this.drinkType = drinkType;
    this.milk = milk;

    // add every drink that gets created into an array
    Coffee.drinks.push(this);

    updateLocalStorage();
  }
}

// set the global array to empty
Coffee.drinks = [];

// event handler function to run everytime the form is submitted
function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  //const drink = event.target;
  const name = event.target.name.value;
  const size = event.target.size.value;
  const isHot = event.target.isHot.value;
  const dType = event.target.drinkType.value;
  const milk = event.target.milk.value;

  new Coffee(name, size, milk, isHot, dType);

  // update the previous orders with the new order
  renderOrders();
}


function renderOrders() {
  // clear all my current uls to prevent duplicate information
  orders.textContent = "";

  // go through the array and output the details of each drink in the array
  for (let i = 0; i < Coffee.drinks.length; i++) {
    const drinkLI = document.createElement("li");
    const infoP = document.createElement("p");
    let temp;
    if (Coffee.drinks[i].isHot === "on") {
      temp = "cold";
    } else {
      temp = "hot";
    }
    infoP.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}

// Add an event listener to the submit button
orderForm.addEventListener("submit", handleSubmit);

function updateLocalStorage() {
  //console.log("Updating localStorage....");
  const arrayString = JSON.stringify(Coffee.drinks);
  //console.log(`${arrayString}`);

  // Store the stringified array in localstorage having a key of 'drinks'
  localStorage.setItem('drinks', arrayString);
}

function getLocalStorage() {
  //console.log("Get stored data from the local storage!!");

  // retrieve data from local storage
  const oldData = localStorage.getItem('drinks');
  
  //console.log(`oldData -- ${oldData}`);
  
  // convert the data (array) from a string to something that we can use in JavaScript.
  const coffeeData = JSON.parse(oldData);

  // If this is the first time we visit the page, there will not be an array for us to use in localStorage
  if (coffeeData !== null) {
    Coffee.drinks = coffeeData;
  }

  // let's render the old data that we retrieved back from the localStorage
  renderOrders();
}

getLocalStorage();