// // # Additional JavaScript Loops Exercises

// // 1. Write a for loop that prints the numbers from 1 to 20.
// //    Hint: Use a for loop with a counter that starts at 1 and ends at 20.

for(let counter=1; counter<=20; counter++) 
    console.log(counter);

// //    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 2. Create a while loop that prints odd numbers from 1 to 15.
// //    Hint: Use a counter that increments by 2 in each iteration.

let oddNum=1
while(oddNum<=15){
    console.log(oddNum);
    oddNum=oddNum+2
}

// //    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// // 3. Use a do...while loop to ask the user for a number between 1 and 10 until they enter a valid number.
// //    Hint: Use prompt() to get user input and parseInt() to convert it to a number.
        
        // let num1to10=5
        // let userInput=``
        // do{
        //     if (num1to10!==userInput)
        //         userInput = prompt(`Enter a number from 1 to 10`)

        // } while(userInput===num1to10)


// //    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// // 4. Write a for loop that calculates the sum of all numbers from 1 to 100.
// //    Hint: Initialize a sum variable to 0 and add each number in the loop.

let sum=0
for (let i=1; i<=100; i++){
    sum=i+sum
}
console.log(sum);


// //    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 5. Create a while loop that prints a countdown from 10 to "Blast off!".
// //    Hint: Start with a counter at 10 and decrement it in each iteration.

let countdown=10
while(countdown>=1){
    console.log(countdown)
    countdown--
}
console.log(`Blast Off`);

// //    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// // 6. Use a for loop to print the first 10 numbers in the Fibonacci sequence.
// //    Hint: Start with two variables for the first two numbers, then calculate the next.

let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
    console.log(a);
    [a, b] = [b, a + b];
}


// //    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 7. Write a do...while loop that generates random numbers between 1 and 6 (simulating a die roll) until it rolls a 3.
// //    Hint: Use Math.random() and Math.floor() to generate random integers.

let roll;

do {
    roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll); 
} while (roll !== 3);

console.log("Rolled a 3!");


// //    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// // 8. Create a for loop that prints the multiplication table for the number 7 (up to 10).
// //    Hint: Use the loop counter as one factor and 7 as the other.

const number = 7;
for (let i = 1; i <= 10; i++) {
    const product = number * i;
    console.log(`${number} x ${i} = ${product}`);
}


// //    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 9. Use a while loop to find the first number greater than 1000 that is divisible by both 3 and 7.
// //    Hint: Start at 1001 and use the modulus operator (%) to check divisibility.

firstNumber=1001
while(firstNumber>=1000 && firstNumber%3!==0 && firstNumber%7!==0 ){
     firstNumber++
}
console.log(firstNumber);

// //    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// // 10. Write a for loop that calculates the factorial of a given number.
// //     Hint: Start with a result of 1 and multiply by each number up to the given number.

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result; 
}
const number1 = 5; 
console.log(`The factorial of ${number1} is ${factorial(number1)}`);


// //     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 11. Create a do...while loop that asks the user to guess a secret number between 1 and 20, giving "higher" or "lower" hints.
// //     Hint: Generate a random number at the start and compare it with the user's guess.

// const secretNumber = Math.floor(Math.random() * 20) + 1;
// let guess;
// do {
//     guess = parseInt(prompt("Guess the secret number between 1 and 20:"));
//     if (guess < secretNumber) {
//         alert("Higher! Try again.");
//     } else if (guess > secretNumber) {
//         alert("Lower! Try again.");
//     } else if (guess === secretNumber) {
//         alert("Congratulations! You guessed the correct number!");
//     } else {
//         alert("Please enter a valid number.");
//     }
// } while (guess !== secretNumber);


// //     [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// // 12. Use a for loop to check if a given number is prime.
// //     Hint: Check if the number is divisible by any integer from 2 to its square root.

function isPrime(num2) {
    if (num2 <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num2); i++) {
        if (num2 % i === 0) {
            return false; 
        }
    }

    return true;
}
const number2 = 29;
if (isPrime(number2)) {
    console.log(`${number2} is a prime number.`);
} else {
    console.log(`${number2} is not a prime number.`);
}

// //     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 13. Write a while loop that converts a decimal number to its binary representation.
// //     Hint: Repeatedly divide by 2 and keep track of the remainders.

let decimalNumber = 13;

if (decimalNumber === 0) {
    console.log("Binary: 0");
} else {
    let binaryString = "";
    let dNum = decimalNumber;

    while (dNum > 0) {
        let remainder = dNum % 2;
        binaryString = remainder + binaryString;
        dNum = Math.floor(dNum / 2);
    }

    console.log(`Decimal: ${decimalNumber}, Binary: ${binaryString}`);
}


// //     [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// // 14. Create a for loop that prints a triangle pattern of numbers:
// //     ```
// //     1
// //     22
// //     333
// //     4444
// //     55555
// //     ```
// //     Hint: Use nested loops - one for rows and one for columns.

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += i;
    }
    console.log(line);
}

// //     [Learn more about nested loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 15. Use a do...while loop to implement a simple calculator that performs operations until the user chooses to exit.
// //     Hint: Use prompt() to get user input for numbers and operations.

// let operation;
// let result;

// do {
//     operation = prompt("Enter the operation (+, -, *, /) or 'exit' to quit:");
//     if (operation === 'exit') {
//         console.log("Exiting the calculator.");
//         break;
//     }
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let num2 = parseFloat(prompt("Enter the second number:"));
//     if (isNaN(num1) || isNaN(num2)) {
//         console.log("Invalid number input. Please enter valid numbers.");
//         continue;
//     }
//     switch (operation) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 === 0) {
//                 result = "Error: Division by zero";
//             } else {
//                 result = num1 / num2;
//             }
//             break;
//         default:
//             result = "Invalid operation";
//             break;
//     }
//     console.log("Result: " + result);
// } while (operation !== 'exit');

// //     [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// // 16. Write a for loop that finds the greatest common divisor (GCD) of two numbers.
// //     Hint: Use the Euclidean algorithm: repeatedly replace the larger number with the remainder of the larger divided by the smaller.

let num1 = 48;
let num2 = 18;

num1 = Math.abs(num1);
num2 = Math.abs(num2);

let gcdA = num1;
let gcdB = num2;

for (let i = 0; gcdB !== 0; i++) {
    let remainder = gcdA % gcdB;
    gcdA = gcdB;
    gcdB = remainder;
}

console.log(`The GCD of ${num1} and ${num2} is ${gcdA}`);


// //     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 17. Create a while loop that implements the Caesar cipher for a given string and shift value.
// //     Hint: Use charCodeAt() and String.fromCharCode() to manipulate character codes.
let inputString = "HELLO WORLD";
let shift = 3;
let result = "";
shift = shift % 26;
let index = 0;
inputString = inputString.toUpperCase();

while (index < inputString.length) {
    let char = inputString[index];
    if (char >= 'A' && char <= 'Z') {
        let charCode = char.charCodeAt(0);
        let shiftedCode = ((charCode - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0);
        result += String.fromCharCode(shiftedCode);
    } else {
        result += char;
    }
    index++;
}

console.log(`Original String: ${inputString}`);
console.log(`Shift: ${shift}`);
console.log(`Encrypted String: ${result}`);

// //     [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// // 18. Use a for loop to print the first n numbers in the sequence: 2, 4, 8, 16, 32, ...
// //     Hint: Start with 2 and multiply by 2 in each iteration.

let n = 10;
let value = 2;

for (let i = 0; i < n; i++) {
    console.log(value);
    value *= 2;
}


// //     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 19. Write a do...while loop that simulates flipping a coin until it lands on heads 3 times in a row.
// //     Hint: Use Math.random() to simulate a coin flip and keep a counter for consecutive heads.
// //     [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// // 20. Create a for loop that calculates the sum of the squares of numbers from 1 to n.
// //     Hint: Square each number and add it to a running total.
// //     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 21. Use a while loop to find the smallest number of terms in the series 1 + 2 + 3 + ... that exceeds a given value.
// //     Hint: Keep adding terms to a sum until it exceeds the given value.
// //     [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// // 22. Write a for loop that prints a diamond pattern of asterisks.
// //     Hint: Use nested loops and pay attention to spaces and asterisks in each row.
// //     [Learn more about nested loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 23. Create a do...while loop that implements a guessing game where the computer tries to guess a number the user is thinking of.
// //     Hint: Use binary search algorithm to guess efficiently.
// //     [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// // 24. Use a for loop to calculate the sum of the series: 1 - 1/2 + 1/3 - 1/4 + ... for n terms.
// //     Hint: Use the loop counter in the denominator and alternate between adding and subtracting.
// //     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// // 25. Write a while loop that simulates the Collatz conjecture: start with a number n, if it's even, divide it by 2, if it's odd, multiply it by 3 and add 1. Repeat until you reach 1.
// //     Hint: Use an if-else statement inside the loop to handle even and odd cases.
// //     [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// // Remember to use only concepts that have been covered so far, focusing on loops and basic arithmetic operations!



// # JavaScript Loops Exercises

// ## 'for' Loop Exercises

// 1. Write a loop that counts from 10 to 1 (backwards).
//    Hint: Start your counter at 10 and decrement it in each iteration.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// 2. Create a loop that prints only even numbers from 2 to 20.
//    Hint: Start at 2 and increment by 2 in each iteration.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// 3. Make a loop that adds up all numbers from 1 to 10 and prints the sum.
//    Hint: Use a variable to keep track of the sum and add each number in the loop.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// 4. Write a loop that prints the 5 times table (5, 10, 15, ..., 50).
//    Hint: Multiply each number in the loop by 5.
//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// 5. Create a loop that prints this pattern:
//    ```
//    *
//    **
//    ***
//    ****
//    *****
//    ```
//    Hint: Use nested loops - one for rows and one for columns.
//    [Learn more about nested loops](https://www.w3schools.com/js/js_loop_for.asp)

// ## 'while' Loop Exercises

// 1. Write a while loop that prints numbers from 1 to 10.
//    Hint: Initialize a counter before the loop and increment it inside.

// let pNum=1
// while(pNum<10){
//     pNum++;
//     console.log(pNum);
// }

//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// 2. Create a while loop that doubles a number until it's bigger than 100.
//    Hint: Start with 1 and multiply by 2 in each iteration.

// let doubleNum=1
// while(doubleNum<=100){
//     console.log(doubleNum);
//     doubleNum=doubleNum*2
// }


//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// 3. Make a while loop that counts down from 20 to 0.
//    Hint: Start with 20 and decrement in each iteration.

// let countDown=21
// while (countDown>=1){
//     countDown--;
//     console.log(countDown);
// }

//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// 4. Write a while loop that keeps asking for a password until the correct one is entered.
//    Hint: Use prompt() to get user input and compare it to the correct password.

// let correctPass=`1234`
// let inputPass=``
// while(inputPass!==correctPass){
//     inputPass= prompt('Enter the password')
//     if (inputPass !== correctPass) 
//         console.log('Incorrect password. Please try again.');
// }
// console.log(`Password successful`);

//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// 5. Create a while loop that generates random numbers between 1 and 10 until it gets a 5.
//    Hint: Use Math.random() and Math.floor() to generate random integers.

//    [Learn more about while loops](https://www.w3schools.com/js/js_loop_while.asp)

// ## 'do...while' Loop Exercises

// 1. Write a do...while loop that prints numbers from 1 to 5.
//    Hint: Initialize a counter before the loop and increment it inside.
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// 2. Create a do...while loop that asks the user if they want to play again.
//    Hint: Use prompt() to get user input and check if it's "yes" or "no".
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// 3. Make a do...while loop that rolls a die (1-6) until it gets a 6.
//    Hint: Use Math.random() and Math.floor() to simulate a die roll.
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// 4. Write a do...while loop that keeps doubling a number until it's over 1000.
//    Hint: Start with 1 and multiply by 2 in each iteration.
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// 5. Create a do...while loop that asks for names and adds them to a list until the user enters "done".
//    Hint: Use prompt() to get names and push them to an array.
//    [Learn more about do...while loops](https://www.w3schools.com/jsref/jsref_dowhile.asp)

// Remember to test your code with different inputs to ensure your loops work correctly!

