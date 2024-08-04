// // # 30 Basic Nested Loop Exercises in JavaScript

// // ## Exercise 1
// // Print a 3x3 grid of asterisks.

// // Hint: Use two nested loops, both running 3 times.
// // Resource: [Nested Loops in JavaScript](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/)
// // Expected Output:
// // ```
// // * * *
// // * * *
// // * * *
// // ```

for (let i = 0; i < 3; i++) {
  let stars = ``;
  for (let J = 0; J < 3; J++) {
    stars += "* ";
  }
  console.log(`${stars}(${i})`);
}

// // ## Exercise 2
// // Print a 5x5 grid of numbers, where each number is the sum of its row and column indices.

// // Hint: Use two nested loops and add the loop variables.
// // Resource: [2D Arrays in JavaScript](https://www.freecodecamp.org/news/javascript-2d-arrays/)
// // Expected Output:
// // ```
// // 0 1 2 3 4
// // 1 2 3 4 5
// // 2 3 4 5 6
// // 3 4 5 6 7
// // 4 5 6 7 8
// // ```

for (let i = 0; i <= 5; i++) {
  let addition = `add of ${i}: `;
  for (let j = 0; j <= 5; j++) {
    addition += i + j + ` `;
  }
  console.log(addition);
}

// // ## Exercise 3
// // Print a right-angled triangle of asterisks with 5 rows.

// // Hint: The outer loop controls rows, the inner loop prints asterisks based on the row number.
// // Resource: [Nested Loops for Patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)
// // Expected Output:
// // ```
// // *
// // * *
// // * * *
// // * * * *
// // * * * * *
// // ```

for (let i = 0; i < 5; i++) {
  let stars = ``;
  for (let j = 0; j <= i; j++) {
    stars += `* `;
  }
  console.log(stars);
}

// // ## Exercise 4
// // Print a 4x4 multiplication table.

// // Hint: Use nested loops where loop variables represent factors.
// // Resource: [Multiplication Tables in JavaScript](https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-62.php)
// // Expected Output:
// // ```
// // 1 2 3 4
// // 2 4 6 8
// // 3 6 9 12
// // 4 8 12 16
// // ```

for (let i = 1; i <= 4; i++) {
  let multi = `multi of ${i}: `;
  for (let j = 1; j <= 4; j++) {
    multi += i * j + ` `;
  }
  console.log(multi);
}

// // ## Exercise 5
// // Print a square border of asterisks with side length 5.

// // Hint: Use nested loops and conditionals to print asterisks only on the border.
// // Resource: [Drawing Shapes with Loops](https://javascript.plainenglish.io/how-to-print-stars-pyramid-patterns-in-javascript-7e58c5eec4b8)
// // Expected Output:
// // ```
// // * * * * *
// // *       *
// // *       *
// // *       *
// // * * * * *
// // ```

// // ## Exercise 6
// // Print numbers from 1 to 25 in a 5x5 grid.

// // Hint: Use a single counter variable that increments in the inner loop.
// // Resource: [Nested Loops in JavaScript](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/)
// // Expected Output:
// // ```
// // 1  2  3  4  5
// // 6  7  8  9  10
// // 11 12 13 14 15
// // 16 17 18 19 20
// // 21 22 23 24 25
// // ```

let counter = 1; // Initialize the counter

for (let row = 0; row < 5; row++) {
  // Loop for each row
  let line = ""; // Initialize an empty string for the current row
  for (let col = 0; col < 5; col++) {
    // Loop for each column
    // Append the counter value followed by a space
    if (counter < 10) {
      line += " " + counter + " "; // Add extra space for single digits
    } else {
      line += counter + " "; // Single space for double digits
    }
    counter++; // Increment the counter
  }
  console.log(line.trim()); // Print the line after constructing it, trimming any trailing spaces
}

// ## Exercise 7
// Print numbers from 1 to 9 in a 3x3 grid.

// Hint: Use a single counter variable that increments in the inner loop.

// [Learn about incrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

let count = 1; // Initialize the counter

for (let i = 0; i < 3; i++) {
  // Loop for each i
  let line = ""; // Initialize an empty string for the current row
  for (let j = 0; j < 3; j++) {
    line += count + " ";
    count++; // Increment the counter
  }
  console.log(line.trim()); // Print the line after constructing it, trimming any trailing spaces
}

// ## Exercise 8
// Print a 3x3 grid of even numbers starting from 2.

count = 2;
for (let i = 0; i < 3; i++) {
  // Loop for each i
  let line = ""; // Initialize an empty string for the current row
  for (let j = 0; j < 3; j++) {
    if (count % 2 === 0) line += count + " ";
    count += 2; // Increment the counter
  }
  console.log(line); // Print the line after constructing it, trimming any trailing spaces
}

// Hint: Start with 2 and increment by 2 in each iteration.

// [Learn about arithmetic in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

// ## Exercise 9
// Print a right-angled triangle of numbers with 3 rows.
// Hint: Use the inner loop variable as the number to print.
count = 1;
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += count + " ";
    count++;
  }
  console.log(line);
}

// [Learn about nested loops for patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)

// ## Exercise 10
// Print a 3x3 checkerboard pattern of 0s and 1s.

// Hint: Use the sum of indices and the modulo operator to determine whether to print 0 or 1.

for (let i = 0; i < 3; i++) {
  // Loop for each i
  let line = ""; // Initialize an empty string for the current row
  for (let j = 0; j < 3; j++) {
    line += count + " ";
    count++; // Increment the counter
  }
  console.log(line.trim()); // Print the line after constructing it, trimming any trailing spaces
}

// [Learn about the modulo operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

// ## Exercise 11
// Print a 3x3 grid where each cell contains its row number.
// Hint: Use the outer loop variable as the number to print.

for (let i = 0; i < 3; i++) {
  // Loop for each i
  let line = " "; // Initialize an empty string for the current row
  for (let j = 0; j < 3; j++) {
    line += i + " ";
  }
  console.log(line);
}

// [Learn about accessing loop variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// ## Exercise 12
// Print a 3x3 grid where each cell contains its column number.

for (let i = 0; i < 3; i++) {
  // Loop for each i
  let line = " "; // Initialize an empty string for the current row
  for (let j = 0; j < 3; j++) {
    line += j + " ";
  }
  console.log(`${line} line number - ${i}`);
}

// Hint: Use the inner loop variable as the number to print.

// [Learn about nested loop variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)

// ## Exercise 13
// Print a 4x4 grid of alternating X and O.

for (let i = 0; i < 4; i++) {
  let line = ``;
  for (let j = 0; j < 4; j++) {
    if ((i + j) % 2 === 0) line += `X`;
    else line += `O`;
  }
  console.log(line);
}

// [Learn about conditional operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#conditional_ternary_operator)

// ## Exercise 14
// Print a right-angled triangle of odd numbers with 4 rows.

// Hint: Use a counter that starts at 1 and increments by 2.

counter = 1;
for (let i = 0; i <= 4; i++) {
  line = ``;
  for (let j = 0; j < i; j++) {
    counter += 2;
    line += counter + ` `;
  }
  console.log(line);
}

// [Learn about incrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// ## Exercise 15
// Print a 3x3 grid where each cell contains the absolute difference between its row and column indices.

// Hint: Use Math.abs() to calculate the absolute difference.

for (let i = 0; i < 3; i++) {
  // Loop for each i
  let line = " "; // Initialize an empty string for the current row
  for (let j = 0; j < 3; j++) {
    line += Math.abs(i - j) + " ";
  }
  console.log(line);
}

// [Learn about Math.abs()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

// ## Exercise 16
// Print a hollow right-angled triangle of asterisks with 4 rows.

// Hint: Print asterisks only when it's the first or last column, or the last row.
let rows = 4;
for (let i = 0; i <= rows; i++) {
  let line = ``;
  for (let j = 0; j < rows; j++) {
    if (j === 0 || j === i || i === rows) {
      line += ` *`;
    } else {
      line += ` `;
    }
  }
  console.log(line);
}

// [Learn about logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

// ## Exercise 17
// Print a 4x4 grid where each cell contains the smaller of its row or column index.

// Hint: Use Math.min() to compare row and column indices.
// We need to compare i and j's index

for (let i = 0; i <= 4; i++) {
  let index = ``;
  for (let j = 0; j <= 4; j++) {
    index += ` ` + Math.min(i, j);
  }
  console.log(index);
}

// [Learn about Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

// ## Exercise 18
// Print a 4x4 grid where each cell contains the larger of its row or column index.

// Hint: Use Math.max() to compare row and column indices.

for (let i = 0; i <= 4; i++) {
  let index = ``;
  for (let j = 0; j <= 4; j++) {
    index += ` ` + Math.max(i, j);
  }
  console.log(index);
}

// [Learn about Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

// ## Exercise 19
// Print a right-angled triangle of consecutive letters (A-Z) with 4 rows.

// Hint: Use String.fromCharCode() to convert numbers to letters.

let currentCharCode = 65; //  letter A
for (let i = 1; i <= 4; i++) {
  let line = ``;
  for (let j = 0; j < i; j++) {
    line += String.fromCharCode(currentCharCode);
    currentCharCode++;
    if (currentCharCode > 90) {
      currentCharCode = 65;
    }
  }
  console.log(line);
}

// [Learn about String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

// ## Exercise 20
// Print a 3x3 grid where each cell contains the sum of all numbers from 1 to the product of its indices.

// Hint: Use a nested loop to calculate the sum for each cell.

for (let i = 1; i <= 3; i++) {
  let line = ``;
  for (let j = 1; j <= 3; j++) {
    let P = i * j;
    let sum = (P * (P + 1)) / 2 + ` `;
    line += sum.toString();
  }

  console.log(line);
}

// [Learn about nested loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#nested_loops)

// ## Exercise 21
// Print a 4x4 grid of ascending numbers in a spiral pattern.

// Hint: Use a 2D array and fill it in a spiral pattern.

// [Learn about 2D arrays](https://www.freecodecamp.org/news/javascript-2d-arrays/)

// ## Exercise 22
// Print a diamond pattern of asterisks with maximum width 5.

// Hint: Combine an increasing triangle with a decreasing triangle.

for (let i = 0; i < 5; i++) {
  let stars = ``;
  for (let j = 0; j <= i; j++) {
    stars += `* `;
  }
  console.log(stars);
}
for (let i = 5; i >= 1; i--) {
  let stars = ``;
  for (let j = 1; j <= i; j++) {
    stars += `* `;
  }
  console.log(stars);
}

// [Learn about complex patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)

// ## Exercise 23
// Print a 4x4 grid where each cell contains the result of its row index raised to the power of its column index.

// Hint: Use the ** operator for exponentiation.

for (let i = 1; i <= 4; i++) {
  let index = ``;
  for (let j = 1; j <= 4; j++) {
    index += ` ` + j ** i;
  }
  console.log(index);
}

// [Learn about the exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)

// ## Exercise 24
// Print a right-angled triangle of descending numbers with 4 rows, starting from 10.

// Hint: Initialize a counter with 10 and decrement it in each iteration.

for (let i = 10; i > 0; i--) {
  let counter = 0;
  for (let j = 0; j < i; j++) {
    counter += `${i} `;
  }
  console.log(counter);
}

// [Learn about decrementing in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

// ## Exercise 25
// Print a 4x4 grid where each cell contains the result of (row index * 2) + column index.

// Hint: Use arithmetic operations with the loop variables.

// [Learn about arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

// ## Exercise 26
// Print a hollow square of hash symbols (#) with side length 5.

// Hint: Print hash symbols only when it's the first or last row, or the first or last column.

// [Learn about logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

// ## Exercise 27
// Print a 4x4 grid where each cell contains the smaller of: the product of its indices or 5.

// Hint: Use Math.min() to compare the product with 5.

// [Learn about Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

// ## Exercise 28
// Print a right-angled triangle of asterisks with 5 rows, but skip the third row.

// Hint: Use an if statement to skip printing when the row index is 3.

// [Learn about if statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

// ## Exercise 29
// Print a 5x5 grid where cells on the main diagonal (where row index equals column index) contain 1, and all other cells contain 0.

// Hint: Use an if statement to check if row index equals column index.

// [Learn about equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)

// ## Exercise 30
// Print a 4x4 grid where each cell contains the sum of its row index, column index, and the number 1.

// Hint: Add the row index, column index, and 1 for each cell.

// [Learn about arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)
