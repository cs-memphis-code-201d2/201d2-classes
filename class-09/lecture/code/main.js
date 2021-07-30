// alert("Let's Go!");
/*
Adding event listeners in different ways

I recommend you comment out different event handler methods as you test them

*/

// add an event handler for attribute event method
function buttonClicked(evt)
{
    alert(`Button Clicked!!! Listener`);
}

// Event handler for body load attribute
function loaded(evt) {
    alert('Page is loaded!!');
}

// Traditional method working through DOM
let buttonEl = document.getElementById("button1");
buttonEl.onclick = buttonClicked; // no parens so no IIFE


// Use add listeners (RECOMMENDED)
let buttonEl = document.getElementById("button1");
// attach listeners to the element
buttonEl.addEventListener('click', buttonClicked);
// listen on a second button
let buttonEl2 = document.getElementById('button2');
buttonEl2.addEventListener('click', buttonClicked);

