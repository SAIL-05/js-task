// 1. Ticket Price Calculator
// //This program calculates the ticket price based on the user's age with the given conditions.


    const age = parseInt(prompt("Please enter your age:"));
 5667
    let price;

    if (age < 12) {
        price = 5;
    } else if (age < 18) {
        price = 10;
    } else if (age < 60) {
        price = 20;
    } else {
        price = 15;
    }

    alert(`Your ticket price is ₦${price}`);


// 2. Leap Year Checker
// // This program checks if a given year is a leap year.

    const year = parseInt(prompt("Please enter a year:"));

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    alert(`${year} is ${isLeap ? "a leap year!" : "not a leap year."}`);



// 3. Discount Calculator
// This program calculates a discount based on the purchase amount.


   
    let amount = prompt("Please enter your purchase amount:");

    let discount;
    if (amount >= 100) {
        discount = 20;
    } else if (amount >= 50) {
        discount = 10;
    } else {
        discount = 0;
    }

    alert(`Your discount is  ₦${discount}`);



// 4. Time-Based Greeting
// This program greets the user based on the current time of day.
// javascript

// Function to greet user based on time of day
function greetByTime() {
    // Get current hour
    let hour = new Date().getHours();

    // Determine greeting based on hour
    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = "Good morning!";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Display the greeting
    alert(greeting);
}

// Run the program
greetByTime();

// 5. Number Guessing Game
// This program implements a simple number guessing game with a fixed secret number.
// javascript

// // Function for number guessing game
// function numberGuessingGame() {
//     // Set a secret number (you can change this)
//     let secretNumber = 42;

//     // Get guess from user using prompt
//     let guess = prompt("Guess the secret number (between 1 and 100):");

//     // Convert input to number and check if it's valid
//     guess = Number(guess);
//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         alert("Please enter a valid number between 1 and 100!");
//         return;
//  haut   }

//     // Compare guess with secret number
//     if (guess === secretNumber) {
//         alert("Correct! You guessed the secret number!");
//     } else if (guess > secretNumber) {
//         alert("Too high! Try a lower number.");
//     } else {
//         alert("Too low! Try a higher number.");
//     }
// }

// // Run the program
// numberGuessingGame();

