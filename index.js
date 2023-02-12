//Write a function that multiples two numbers. Call that function to multiply any two numbers of your choice and log the answer in your console

let a = 11;
let b = 5;

function multiply(a, b) {
    return a * b;
}

console.log(multiply(a, b));


// create variables for your first name, last name, Stutern track, skills, favourite color, year of your country’s independence. Use these variables to form a sentence and log the sentence in the console.

const fName = "Wendy";
const lName = "Ahadome";
let sTrack = "Software Engineering";
let skills = "HTML, CSS and JavaScript";
let fColor = "peach";
let countryInd = 1957;

//my name is Wendy Ahadome, I'm from Ghana and my favorite color is peach; I'm currently enrolled in Stutern's Software Engineering track, learning HTML, CSS, and JavaScript skills, and I'm proud to say that my country gained independence in 1957.

console.log("My name is " + fName + " " + lName + ", "  + " and my beloved country, Ghana gained her independence in the year " + countryInd + "; " + "My favourite color is " + fColor + "," + " and I'm currently enrolled in " + "Stutern's " + sTrack + " track" + " with " + skills + " skills.");