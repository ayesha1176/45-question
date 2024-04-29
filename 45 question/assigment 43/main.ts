//assigment 42
/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push("Great " + magician);
    }
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ["Alice", "Bob", "Charlie"];

// Create a copy of the original array
const originalMagicians: string[] = [...magicians];

// Call makeGreat() with a copy of the array
const greatMagicians: string[] = makeGreat([...magicians]);

// Show original magicians
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Show great magicians
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
