// Question # 01

let number = parseFloat(prompt("Enter a positive number: "));
let rounded = Math.round(number);
let floored = Math.floor(number);
let ceiled = Math.ceil(number);

console.log("number: " + number);
console.log("round off value: " + rounded);
console.log("floor value: " + floored);
console.log("ceil value: " + ceiled);

document.write("number: " + number + "<br>");
document.write("round off value: " + rounded + "<br>");
document.write("floor value: " + floored + "<br>");
document.write("ceil value: " + ceiled + "<br>");

    // Question # 02
let number = parseFloat(prompt("Enter a negative floating point number:"));
let rounded = Math.round(number);
let floored = Math.floor(number);
let ceiled = Math.ceil(number)
console.log("number: " + number);
console.log("round off value: " + rounded);
console.log("floor value: " + floored);
console.log("ceil value: " + ceiled);

document.write("number: " + number + "<br>");
document.write("round off value: " + rounded + "<br>");
document.write("floor value: " + floored + "<br>");
document.write("ceil value: " + ceiled + "<br>");

// Question # 03

let number = parseFloat(prompt("Enter a number: "));
let absoluteValue = Math.abs(number);
console.log("The absolute value of " + number + " is " + absoluteValue);
document.write("The absolute value of " + number + " is " + absoluteValue);

// Question # 04

function rollDice() {
    var diceValue = Math.floor(Math.random() * 6) + 1;
    document.write("Random dice value: " + diceValue);
 }
rollDice();

// Question # 05

function simulateCoinToss() {
    var result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    document.write('Random coin value: ' + result);
}

simulateCoinToss();

// Question # 06

function showRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.write('Random number between 1 and 100: ' + randomNumber);
}

showRandomNumber();

// Question # 07

function getWeight() {
    var userInput = prompt("Please enter your weight:");
    var weight = parseFloat(userInput);
    document.write("Your weight is: " + weight + " kg");
}

getWeight();


// Question # 08

function guessSecretNumber() {
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"), 10);

    if (userInput === secretNumber) {
        alert("Congratulations! You guessed the secret number.");
    } else {
        alert("Sorry, the secret number was " + secretNumber + ". Try again!");
    }
}

guessSecretNumber();