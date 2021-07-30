function button2Click(evt) {
    console.log(`Triggered by: ${evt.target.id}`);
    alert(`Event Triggered!!!`);
}

// Here's an example where we attach the same event handler function to many different elements of different types
// Events will 'bubble up' from child element(s) to parent element(s)
function addEvents() {
    let buttonArray = document.getElementsByClassName('evElement');
    for (i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", button2Click);

    }
}

/* 
Here is some javascript showing how to handle the form submission in index2.html. 

IMPORTANT!
* Load javascript with handler *after* the form is defined in HTML
* In the event handler for submit, call preventDefault() to disable default form processing (re-route to page, clear form)
*/

// Add function for event triggered when the user clicks submit button on form
function submitPerson(evt) {
    evt.preventDefault(); // prevent the default stuff from happening
    // alert("form submit");
    let fname = evt.target.fname.value;
    let lname = evt.target.lname.value;
    // do with values (eg. add to array)
    alert(`Well howdy ! ${fname} ${lname}`);

};



// POE Here - 
// set up handlers for bubble up example
addEvents();

// get the element reference of the example form when the page is loaded
let myForm = document.getElementById('nameForm');
// attach listener on submit button
myForm.addEventListener('submit', submitPerson);