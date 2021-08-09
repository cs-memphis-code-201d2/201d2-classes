// sanity check
//alert("JS linked!");

// JavaScript Review 1
// https://github.com/cs-fullstack-master/javascript-concept-review-level-2/blob/main/README.md
function main() {
    //
    // From this main() function we will call each of our solutions each in their own function
    //

    // Exercise 1
    console.log("Exercise 1");
    console.log(ex1(45, 65)); // get numbers from 45 - 65)


    // Exercise 2
    console.log("Exercise 2");
    ex2(); // Print a multiplication table for 1 - 10

    // Exercise 3
    console.log("Exercise 3");
    ex3(12); // Print a list of the products from 1 - 10 for the number provided as a parameter

    // Exercise 4
    console.log("Exercise 4");
    ex4(); // Print all numbers from 1 - 500 that are divisible by 23

    console.log("Exercise 5");
    // Exercise 5 - Print the larger of 2 numbers passed in
    console.log(ex5_max(2112, 9001)); // success case. 1st parm greater than 2nd parm
    console.log(ex5_max(9001, 9001)); // fail case. Both numbers the same
}

// Ex 1: Write a function in Javascript that takes two integer parameters
// x1 and x2 returns all the integers between them
function ex1(x1, x2) {
    let numberResult = []; // this will hold the numbers between the 2 values

    // check to see if second parm is less than first, and if so return a -1
    if (x1 > x2) // return a -1
    {
        return (-1);
    }
    // check x1 and x2 parameter and determine the range between them
    let currentNumber = x1;
    let finishNumber = x2;
    for (currentNumber; currentNumber <= finishNumber; currentNumber++) {
        // add the number to some list that we can return
        numberResult.push(currentNumber);
    }

    // return numbers in the range when im done
    return numberResult;
}



// ex2. Write a function that writes in the console or browser the multiplication table (from 1 to 10).
function ex2() {

    // Easiest approach using string literls
    // Loop through each number for multiplication
    console.log(`Easiest approach using string literal`);
    for (let index = 1; index <= 10; index++) {
        // Output the row using string literal
        let multiplicationTableRow = `${index}  ${index * 1} ${index * 2} ${index * 3} ${index * 4} ${index * 5} ${index * 6} ${index * 7} ${index * 8} ${index * 9} ${index * 10}`
        console.log(multiplicationTableRow);
    }


    // Longer approach using nexted loops and arrays
    // Loop through each number for multiplication
    console.log(`Alternative approach using nested loops`);
    for (let index = 1; index <= 10; index++) {
        // For the current number, loop from 1 to 10 and calculate product
        let productList = []; // Create a new array to hold the product
        for (let pindex = 1; pindex <= 10; pindex++) { // Use 'pindex' as iterator name to avoid confusion
            productList[pindex-1] = index * pindex;           
        }
        let multiplicationTableRow = `${index}  ${productList[0]} ${productList[1]} ${productList[2]} ${productList[3]} ${productList[4]} ${productList[5]} ${productList[6]} ${productList[7]} ${productList[8]} ${productList[9]}`
        console.log(multiplicationTableRow);
    }


    // For each product, add row to table
}

// ex3. Write a function that writes in the console or browser a multiplication table (in one column) of any number passed as parameter. 
function ex3(someNumber) {
    // loop starting at 1 and multply by starting number until we reach 10
    for (let index = 1; index <= 10; index++) {
        console.log(`${index * someNumber}`);
    }
}

// ex4 Write a program that writes in the console or browser all the multiples of 23 less than 500 
// and at the end writes the sum of all of them
function ex4() {
    for (let index = 1; index < 500; index++) {
        if (index % 27 === 0) // its a multiple of 27 (modulous operator returned 0 as remainder) so log it
        {
            console.log(index);
        }
    }
}

// ex5 Define a function max() that takes two numbers as arguments and returns the largest of them
function ex5_max(firstNum, secondNum) {
    console.log(`First parm: ${firstNum} Second parm: ${secondNum}`);

    // First make sure the numbers arent equal
    if (firstNum === secondNum) {
        return ('Both numbers were the same....'); // return from function early and return error message
    }

    // Check if first number larger
    if (firstNum > secondNum) {
        return firstNum; // First number parm was larger
    }
    else {
        return secondNum; // Second number parm must be larger
    }
}


// POE - first line executed
main();