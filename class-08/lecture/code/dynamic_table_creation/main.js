// alert("locked and loaded!!!!!");

//
// Programatically add rows to a table with createElement
//
let tableEl = document.getElementById('mytable');
// lets make sure we got the element
console.log(`the element: ${tableEl} `)
// lets define a list of names to load into the table
const nameList = ["Kevin Yancy","Albert Lawrence","Bean Wurth"];
// use the list values and build table rows
for (let index = 0; index < nameList.length; index++) {
    let element = nameList[index]; // get the full name
    // split name up into first and last name (see 'split()' )
    const splitName = element.split(" ");
    console.log(`First: ${splitName[0]} Last: ${splitName[1]}`);
    //
    // create a table row
    //
    const newRowEl = document.createElement('tr');
    // create each cell for row
    // fname
    const fnameCell = document.createElement('td');
    const fnameTxt = document.createTextNode(splitName[0]);
    fnameCell.appendChild(fnameTxt);
    // lname
    const lnameCell = document.createElement('td');
    const lnameTxt = document.createTextNode(splitName[1]);
    lnameCell.appendChild(lnameTxt);    
    // add cells to row
    newRowEl.appendChild(fnameCell);
    newRowEl.appendChild(lnameCell);
    // add row to table
    console.log(`Adding row ${newRowEl}`);
    tableEl.appendChild(newRowEl);
}