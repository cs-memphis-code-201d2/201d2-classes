
// Create an array to hold the entries
let journalEntries = [];

// Get a reference to the DIV where we will display entries
let entriesDiv = document.getElementById('journalEntriesDiv');

/*
    Purpose: To log all reflection journal entries to the console
*/
function logJournalEntries() {
    // iterate the array and add each entry to the DOM so it displays in the browser
    console.log(`There are ${journalEntries.length} journal entries in the array:`);
    for (let index = 0; index < journalEntries.length; index++) {
        console.log(`${journalEntries[index].creation_date}`);
        console.log(`${journalEntries[index].confidence_level}`);
        console.log(`${journalEntries[index].journal_entry}`);
        console.log('');
    }
}

// Add a new journal entry
function addJournalEntry(create_date, entry, confidence) {
    // Create a new journal object
    let newEntry = {
        creation_date: create_date,
        journal_entry: entry,
        confidence_level: confidence
    }

    // Add the entry to the Array
    journalEntries.push(newEntry);
    //
    // Add new entry to DOM
    //
    
    let entryList = document.createElement("ul");
    // Make element for date
    let entryItem = document.createElement("li");
    let entryItemText = document.createTextNode(`Date: ${newEntry.creation_date}`)
    entryItem.appendChild(entryItemText);
    entryList.appendChild(entryItem);
    entriesDiv.appendChild(entryList);
    
    // Make element for entry confidence
    entryItem = document.createElement("li");
    entryItemText = document.createTextNode(`Confidence: ${newEntry.confidence_level}`)
    entryItem.appendChild(entryItemText);
    entryList.appendChild(entryItem);
    entriesDiv.appendChild(entryList);    
    
    // Make element for entry text
    entryItem = document.createElement("li");
    entryItemText = document.createTextNode(`${newEntry.journal_entry}`)
    entryItem.appendChild(entryItemText);
    entryList.appendChild(entryItem);
    entriesDiv.appendChild(entryList);
    
    // add hr
    entriesDiv.appendChild(document.createElement("hr"));

    // Log all entries to the console
    logJournalEntries();
}

// Setup our event listeners
// Event handler
function addJournalEntries(evt) {

    // We want to keep making entries until user asks to stop
    let stillMakingEntries = true;
    while (stillMakingEntries) {
        let entryDate = prompt('Enter a date for the journal entry\n\nEnter quit or select cancel to stop entering items');
        // Lets check to see if they cancelled or wanted to quit
        if (entryDate == null || entryDate.toLowerCase() === 'quit') {
            stillMakingEntries = false;
            continue;
        }
        
        // Let's wrap this in a loop so we can keep asking them for confidence until they enter a valid one
        let confidenceInvalid = true;
        let entryConfidence = ""; // start with an empty confidence
        while (confidenceInvalid) {
            entryConfidence = prompt('Enter your confidence level (Low, Medium, or High)\n\nEnter quit or select cancel to stop entering items');
            confidenceInvalid = (entryConfidence.toLowerCase() != 'quit' && entryConfidence.toLowerCase() != 'low' && entryConfidence.toLowerCase() != 'medium' && entryConfidence.toLowerCase() != 'high');
        }
    
        // Lets check to see if they cancelled or wanted to quit
        if (entryConfidence == null || entryConfidence.toLowerCase() === 'quit') {
            stillMakingEntries = false;
            continue;
        }

        // Lets check to see if they cancelled or wanted to quit
        let entryText = prompt('Enter the text for the journal entry\n\nEnter quit or select cancel to stop entering items');
        if (entryText == null || entryText.toLowerCase() === 'quit') {
            stillMakingEntries = false;
            continue;
        }
    
        // Have user confirm they want to add journal entry
        if (confirm(
            `Save this Journal Entry?
            Date: ${entryDate}
            Text: ${entryText}
            Confidence: ${entryConfidence}
            `)) 
            {
                // Add the entry to the array if confirmed        
                addJournalEntry(entryDate, entryText, entryConfidence);

            }
    }
};

// Attach event handler for button click
document.getElementById('addJournalEntries').addEventListener('click', addJournalEntries);