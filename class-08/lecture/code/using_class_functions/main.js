// alert("awesome");
// What the heck is a class?
/// blueprint for objects
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Define object factory (class) new way  Constructor
function Person(fname,lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.kids = hours;
}

/// Methods
Person.prototype.getFullName = function()
{
    // build and return a string of first and last name
    return (`${this.firstName} ${this.lastName}`);
}

Person.prototype.avgCookies = function(numCookies)
{
    // build and return a string of first and last name
    return (`Returning num cookies ${numCookies} x 10 = ${numCookies*10}`);
}


// new CookieStand('Pike Place Market', 23, 65, 6.3, 'pike');