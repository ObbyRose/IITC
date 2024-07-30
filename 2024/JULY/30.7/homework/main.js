// Nested Loops

// Exercise 1: Star Pattern
// Objective: Create a program that prints a right triangle pattern of stars (*).
// Instructions:
// Use two nested loops. The outer loop should iterate through numbers 1 to 5 (representing the row number).
// The inner loop should print stars equal to the current row number.
// Each row should end with a new line.
// Example Output:
// *
// **
// ***
// ****
// *****

function starPattern() {
  for (let i = 1; i <= 5; i++) {
    let stars = ``;
    for (let j = 1; j <= i; j++) {
      stars += `*`;
    }
    console.log(stars);
  }
}
// starPattern();

// Exercise 2: Multiplication Table
// Objective: Write a program that prints a multiplication table for numbers 1 through 5.
// Instructions:
// Use two nested for loops. The outer loop should iterate through numbers 1 to 5.
// The inner loop should also iterate through numbers 1 to 5.
// Multiply the numbers from the outer and inner loops and print the result.
// Example Output:
// Copy code
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25

function makeMultTable() {
  for (let i = 1; i <= 10; i++) {
    let row = `Mult of ${i} --- `;
    for (let j = 1; j <= 10; j++) {
      row += i * j + " ";
    }
    console.log(row);
  }
}

// Exercise 3: Array Search
// Objective: Find a specific number in a 2D array and print its position.
// Instructions:
// Create a 2D array (e.g., let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];).
// Use two nested loops to iterate over the elements of the array.
// Check each element to see if it matches the target number.
// If the target number is found, print its position (row and column).
// Example Output:
// For target = 5, output: Found 5 at position (1, 1)
// For target = 7, output: Found 7 at position (2, 0)

function searchInArray(array_2D, target) {
  let row;
  let col;

  for (let i = 0; i < array_2D.length; i++) {
    let currentArray = array_2D[i];
    console.log(`currentArray:`, currentArray);

    for (let j = 0; j < currentArray.length; j++) {
      let currentNumber = currentArray[j];
      console.log(`currentNumber:`, currentNumber);

      if (currentNumber === target) {
        row = i;
        col = j;
        console.log(`Found ${target} at position (${row}, ${col})`);
        return { row, col };
      }
    }
  }

  console.log(`For target ${target}, output: Not found`);
  return { row, col };
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// let result = searchInArray(arr, 4);
// console.log(result);

// Exercise 4: Count Vowels and Consonants
// Objective: Write a program to count the number of vowels and consonants in a given string.
// Instructions:
// Take a string as input.
// Use a loop to iterate over each character in the string.
// Use another loop (or a set of conditions) to check if the character is a vowel or consonant.
// Keep a count of vowels and consonants.
// for simplicity,string should contain only letters.
// Example Output:
// For input = "hello", output: Vowels: 2, Consonants: 3
// For input = "world", output: Vowels: 1, Consonants: 4

function countVowelsAndConsonants(str) {
  let vowels = `aeiouAEIOU`;
  let vowelCount = 0;
  let consonantCount = 0;
  for (i = 0; i < str.length; i++) {
    let char = str[i];

    if (vowels.includes(char)) vowelCount++;
    else consonantCount++;
  }
  console.log(
    `the word ${str} has ${vowelCount} vowels and ${consonantCount} consonants`
  );
}
countVowelsAndConsonants(`Chicken`);

// Exercise 5: Reverse a String
// Objective: Write a program that reverses a given string using nested loops.
// Instructions:
// Take a string as input.
// Use a loop to iterate over each character in the string.
// Use a nested loop to reverse the string by iterating from the end to the beginning.
// Example Output:
// For input = "hello", output: olleh
// For input = "world", output: dlrow
function reverse(str) {
  let newArr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newArr += str[i];
  }
  return newArr;
}
console.log(reverse(`truck`));

// Exercise 6: Number Pyramid
// Objective: Create a program that prints a number pyramid.
// Instructions:
// Use nested loops to print a pyramid of numbers.
// The outer loop should iterate through the number of rows (e.g., 5).
// The inner loop should print numbers from 1 up to the current row number.
// Example Output:
// 1
// 12
// 123
// 1234
// 12345

function numberPyramid() {
  let row = ``;
  for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
      row += i + ` `;
      break;
    }
    console.log(row);
  }
}
numberPyramid();

// Exercise 7: Sum of 2D Array Elements
// Objective: Calculate the sum of all elements in a 2D array.
// Instructions:
// Create a 2D array with numbers.
// Use nested loops to iterate over each element.
// Sum all the elements and print the total.
// Example Output:
// For arr = [[1, 2], [3, 4], [5, 6]], output: Sum: 21

function searchInArray(array_2D, target) {
  let row;
  let col;

  for (let i = 0; i < array_2D.length; i++) {
    let currentArray = array_2D[i];
    console.log(`currentArray:`, currentArray);

    for (let j = 0; j < currentArray.length; j++) {
      let currentNumber = currentArray[j];
      console.log(`currentNumber:`, currentNumber);

      if (currentNumber === target) {
        row = i;
        col = j;
        console.log(`Found ${target} at position (${row}, ${col})`);
        return { row, col }; // Return immediately once found
      }
    }
  }

  console.log(`For target ${target}, output: Not found`);
  return { row, col }; // Return (-1, -1) to indicate not found
}

// Example usage
arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let result = searchInArray(arr, 4);
console.log(result);

// Exercise 8: Character Frequency
// Objective: Write a program to find the frequency of each character in a string.
// Instructions:
// Take a string as input.
// Use nested loops to count the frequency of each character.
// Print each character and its frequency.
// Example Output:
// For input = "hello", output: h: 1, e: 1, l: 2, o: 1

function findFrequency(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(char);
  }
}
findFrequency(`Hello`); // come back to solve

// Exercise 9: Flatten a 2D Array
// Objective: Convert a 2D array into a 1D array.
// Instructions:
// Create a 2D array with some numbers.
// Use nested loops to iterate over each element.
// Store all elements in a new 1D array and print the result.
// Example Output:
// For arr = [[1, 2], [3, 4], [5, 6]], output: [1, 2, 3, 4, 5, 6]
// option 1 with loops
// function flatten2DArray(twoDArray) {
//     let oneDArray = [];
//     for (let i = 0; i < twoDArray.length; i++) {
//       for (let j = 0; j < twoDArray[i].length; j++) {
//         oneDArray.push(twoDArray[i][j]);
//       }
//     }
//     return oneDArray;
//   }

//   let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ];

//   let flattenedArray = flatten2DArray(arr);
//   console.log(flattenedArray);

// option 2 without loops
// let arr2d = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// function arr1d(nestedArr) {
//   return console.log(nestedArr.flat());
// }
// arr1d(arr2d);

// Exercise 10: Matrix Transpose
// Objective: Transpose a given matrix.
// Instructions:
// Create a 2D array representing a matrix.
// Use nested loops to switch the rows and columns of the matrix.
// Print the transposed matrix.
// Example Output:
// For matrix = [[1, 2, 3], [4, 5, 6]], output: [[1, 4], [2, 5], [3, 6]]

function transposeMatrix(matrix) {
  let rows = matrix.length;
  let columns = matrix[0].length;
  let transposed = [];
  for (let i = 0; i < columns; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(transposeMatrix(matrix));

// Exercise 11: Palindrome Check
// Objective: Check if a given string is a palindrome.
// Instructions:
// Take a string as input.
// Use nested loops to compare characters from the beginning and end of the string.
// Print whether the string is a palindrome.
// Example Output:
// For input = "radar", output: Palindrome
// For input = "hello", output: Not a palindrome

// function checkPalindrome(str){
//     let isPalindrome=""
//     for (let i=0; i<str.length;i++){
//         isPalindrome[i]=str
//         for(let j=0; j<isPalindrome.length; j++){
//             if( isPalindrome[i][j]=str[j][i])
//                 return true
//                 else
//                 return false
//         }
//     }
// }
// console.log(checkPalindrome("radar")); // was unable to do

// Exercise 12: Find Common Elements in Two Arrays
// Objective: Find common elements between two arrays.
// Instructions:
// Create two arrays with numbers.
// Use nested loops to find and print the common elements.
// Example Output:
// For arr1 = [1, 2, 3, 4] and arr2 = [3, 4, 5, 6], output: Common elements: 3, 4

function findCommonElements(arr1, arr2) {
  let commonElements = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        if (!commonElements.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        }
      }
    }
  }

  return commonElements;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let common = findCommonElements(arr1, arr2);
console.log("Common elements:", common);

// Exercise 13: Check for Prime Numbers in a Range
// Objective: Write a program to find all prime numbers in a given range.
// Instructions:
// Take a range (start and end) as input.
// Use nested loops to check each number in the range.
// Print the prime numbers found.
// Example Output:
// For range = (10, 20), output: Prime numbers: 11, 13, 17, 19

function printPrimesInRange(start, end) {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }

    return true;
  }
  let primes = [];
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }

  console.log("Prime numbers:", primes);
}
printPrimesInRange(10, 20);

// Exercise 14: Sort a 2D Array by Row Sum
// Objective: Sort the rows of a 2D array based on the sum of their elements.
// Instructions:
// Create a 2D array with numbers.
// Use nested loops to calculate the sum of each row.
// Sort the rows based on their sum and print the sorted array.
// Example Output:
// For arr = [[3, 1, 2], [1, 4, 5], [2, 3, 1]], output: [[2, 3, 1], [3, 1, 2], [1, 4, 5]]
// didnt make it
// function sort2DArrayByRowSum(arr) {
//   let rowSums = [];

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//     rowSums[i] = sum;
//   }
