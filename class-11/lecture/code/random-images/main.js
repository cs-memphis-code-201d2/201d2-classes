// Here is where we define classes/instantiate clickable classes/add event handlers to track clicks IN THE OBJECT (encapsulation)

// Define base set of properties for our Domain object
// with ES6 class syntax (remember... Encapsulation. One of the 4 pillars of OOP - google it ;-) )
class GoatPicture {
    // Properties that I want for my domain object, but just not passed in at creation/instantiation time.
    clicks = 0; // How many times this GoatImage instance gets clicked
    timesShown = 0; // How many times this GoatImage instance was available/displayed and possibly clicked.

    // Initial constructor (MUST BE NAME CONSTRUCTOR)
    constructor(name, imageSrc) {
        this.name = name; // Image name
        this.imageSrc = imageSrc; // src href to image for a given instance
    };
}

// Add variables we need in multiple places
let leftGoatOnThePage = null;
let rightGoatOnThePage = null;
let totalClicks = 0;
const MAX_CLICKS_ALLOWED = 5;

// We will randomly pull from a list of Goat Image Objects and display them but
// first I need them in a list/array. Can add while I instantiate them (or add individually with .push() )
let allGoatImageObjects = [
    new GoatPicture('Cruising Goat', './images/cruisin-goat.jpg'),
    new GoatPicture('Float Your Goat', './images/float-your-goat.jpg'),
    new GoatPicture('Kissing Goat', './images/kissing-goat.jpg'),
    new GoatPicture('Sweater Goat', './images/sweater-goat.jpg')
];

// Setup up our element references in the DOM 
// These are simply targeted parts of the DOM where we want to dynamically set content
const goatHeader = document.getElementById('goatHeader');
const goatImageSectionTag = document.getElementById('all_goats');
const finalScores = document.getElementById('finalScores');
const leftGoatImageName = document.getElementById('left_goat_name');
const leftGoatImageTag = document.getElementById('left_goat_img');
const rightGoatImageName = document.getElementById('right_goat_name');
const rightGoatImageTag = document.getElementById('right_goat_img');

// Implement a function to pick 2 random goat objects
let pickNewGoats = function () {
    // randomly pick the left object/goat from our list of goats
    leftGoatIndex = Math.floor(Math.random() * allGoatImageObjects.length); // classic random pattern with a max
    // Pick randomly from the list a goat object for the right
    // TODO: In final version we should check to make sure we dont display the same image 
    rightGoatIndex = leftGoatIndex; // Let's start by setting the 2nd image array index equal to the first
    // Then we can just loop until we get a different index value
    // TODO Probably a better way to do this but meh...
    while (rightGoatIndex === leftGoatIndex) {
        rightGoatIndex = Math.floor(Math.random() * allGoatImageObjects.length); // classic random pattern with a max value
    }
    // Keep up with the 2 instances of the goat objects that got picked randomly (so we can update view and click counts)
    // Render on page at the targeted sections of the page
    // Update left
    leftGoatImageName.innerText = allGoatImageObjects[leftGoatIndex].name;
    leftGoatImageTag.src = allGoatImageObjects[leftGoatIndex].imageSrc;
    // Update right
    rightGoatImageName.innerText = allGoatImageObjects[rightGoatIndex].name;
    rightGoatImageTag.src = allGoatImageObjects[rightGoatIndex].imageSrc;


    // update the 2 displayed
    leftGoatOnThePage = allGoatImageObjects[leftGoatIndex];
    rightGoatOnThePage = allGoatImageObjects[rightGoatIndex];
}

// Handle clicks on the goats
// Get which goat clicked on from the event target
const handleClickOnGoat = function (evt) {
    console.log(`You clicked this target element id ${evt.target.id}`);
    // if they can still click, do clicky things
    if (totalClicks < MAX_CLICKS_ALLOWED) {

        const thingWeClickedOn = evt.target;
        const id = thingWeClickedOn.id;

        // Mark that they were shown
        leftGoatOnThePage.timesShown++;
        rightGoatOnThePage.timesShown++;

        console.log(`Left goat ${leftGoatOnThePage.name} has been shown ${leftGoatOnThePage.timesShown} and the rght goat ${rightGoatOnThePage.name} has been shown ${rightGoatOnThePage.timesShown} so far.`);

        // Check which was clicked and update counter
        if (id === 'left_goat_img' || id === 'right_goat_img') {
            //track the goats

            if (id === 'left_goat_img') { // clicked on the left image
                leftGoatOnThePage.clicks++;
                console.log(`Left goat ${leftGoatOnThePage.name} has ${leftGoatOnThePage.clicks} so far`);
            }

            if (id === 'right_goat_img') { // clicked on the right image
                rightGoatOnThePage.clicks++;
                console.log(`Right goat ${rightGoatOnThePage.name} has ${rightGoatOnThePage.clicks} so far`);
            }

            //after we update the old, pick new pictures
            pickNewGoats();
        }

    }
    // increment amount of clicks
    totalClicks++;
    //when they reach total max clicks, remove the clicky function
    if (totalClicks === MAX_CLICKS_ALLOWED) {
        goatImageSectionTag.removeEventListener('click', handleClickOnGoat); // housekeeping
        console.log('You picked 5 goats, thanks!');
        alert('You picked 5 goats, thanks!');

        // display the clicks to the page
        for (let index = 0; index < allGoatImageObjects.length; index++) {
            // Probably can do this on one line with dot notation/nesting
            let newLiScore = document.createElement('li');
            newLiScore.innerText = `${allGoatImageObjects[index].name}: ${allGoatImageObjects[index].clicks}`;
            finalScores.appendChild(newLiScore); // Add score
        }
    }

}
// POE
// Set the listener at the divider level that contains both images.
// Events bubble up!!!
goatImageSectionTag.addEventListener('click', handleClickOnGoat);
pickNewGoats();










// // test array with goats by printing names of goats in array
// for (let index = 0; index < allGoatImageObjects.length; index++) {
//     console.log(allGoatImageObjects[index].name);
// }

// This would add an instance too, just longer to type
// let extra = new GoatPicture('Sweater Goat122334455', './images/sweater-goat.jpg');
// allGoatImageObjects.push(extra);


