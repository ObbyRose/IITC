const myPersons = [
    {
      name: `baba`,
      age: 16,
    },
    {
      name: `dada`,
      age: 46,
    },
    {
      name: `mama`,
      age: 45,
    },
  ];
  
  //TODO:
  // 1. declare with `let`olderPerson with the first person
  // 2.ITERATE OVER THE ARRAY
  // 3. in the for loop check if the current person is older than the oldest person if he does reassign olderPerson to the current person
  // return the oldest person
  
  function getOldest(persons) {
    let olderPerson = persons[0];
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].age > olderPerson.age) {
        olderPerson = persons[i];
      }
    }
  
    return olderPerson;
  }
  const myOlderPerson = getOldest(myPersons);
  //console.log(`My Older Person`, myOlderPerson);
  
  const nested = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  //TODO : sum the values of nested numbers array
  // 1. declare with `let` `sum` variable. initialized with 0
  // 2. itirate over the `nestedNumbers` array
  // 3. itirate over the inner array
  // 4. add the current number to sum
  // 5. return sum
  
  function sumNested(nestedNumbers) {
    let sum = 0;
    for (let i = 0; i < nestedNumbers.length; i++) {
      for (let j = 0; j < nestedNumbers[i].length; j++) {
        sum += nestedNumbers[i][j];
      }
    }
    return sum;
  }
  
  const mySum = sumNested(nested);
  console.log(mySum);
//

// nested loops

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

  
  // ARRAY METHODS
  // # 100+ Array Exercises for JavaScript with Hints and W3Schools Links

// ## Basic Syntax and Declaration
// [W3Schools Array Declaration](https://www.w3schools.com/js/js_arrays.asp)

// 1. Declare an empty array called `fruits`.

let fruits=[]
console.log(fruits);

//    Hint: Use square brackets `[]` to create an empty array.

// 2. Create an array `numbers` with the values 1, 2, 3, 4, and 5.
let numbers=[1,2,3,4,5]
console.log(numbers);

//    Hint: Separate values with commas inside square brackets.

// 3. Initialize an array `colors` with three string values: "red", "green", "blue".

let colors=['red','green','blue']
console.log(colors);

//    Hint: Use quotes for string values in the array.

// 4. Create an array `mixed` with different data types: a number, a string, and a boolean.

let mixed=['Java',6,false]
console.log(mixed);

//    Hint: JavaScript arrays can hold multiple data types.

// 5. Declare an array `seasons` with the four seasons as string values.

let seasons=['Fall','Winter','Spring','Summer']

//    Hint: Think about the names of the four seasons.

// ## Array Length
// [W3Schools Array Length](https://www.w3schools.com/js/js_array_length.asp)

// 6. Write a statement to print the length of the `numbers` array.

lengthNum=numbers.length
console.log(lengthNum);

//    Hint: Use the `length` property of the array.

// 7. Create an array `emptyCheck` and write an if statement to check if it's empty.

let emptyCheck=[]
if(emptyCheck.length===0) console.log("the array is empty");
else console.log("the array is not empty");

//    Hint: An empty array has a length of 0.

// 8. Initialize an array `dynamic` with 5 elements and print its length.

let dynamic=['mind','will',9,8,true]
console.log(dynamic.length);

//    Hint: The length will be equal to the number of elements.

// 9. Add an element to `dynamic` and print the new length.

dynamic.push('element')
console.log(dynamic.length);
console.log(dynamic);
//    Hint: Adding an element increases the length by 1.

// 10. Remove an element from `dynamic` and print the updated length.
//     Hint: Removing an element decreases the length by 1.

dynamic.pop()
console.log(dynamic.length);
console.log(dynamic);

// ## Accessing Elements
// [W3Schools Accessing Array Elements](https://www.w3schools.com/js/js_array_access.asp)

// 11. Print the first element of the `colors` array.
console.log(colors[0]);

//     Hint: Array indices start at 0.

// 12. Access and display the last element of the `seasons` array.

console.log(seasons.length-1)

//     Hint: Use `array.length - 1` to get the last index.

// 13. Print the middle element of the `numbers` array.
//     Hint: Calculate the middle index using `Math.floor()`.

console.log(Math.floor(numbers.length/2));

// 14. Try to access an index that doesn't exist in `fruits` and print the result.
//     Hint: Accessing a non-existent index returns `undefined`.

console.log(fruits[8]);


// 15. Use a template literal to print "The second color is [second color]" using the `colors` array.
//     Hint: Use `${}` in template literals to embed expressions.

console.log(`the second color is ${colors[1]}`);

// ## Modifying Elements
// [W3Schools Changing Array Elements](https://www.w3schools.com/js/js_array_methods.asp)

// 16. Change the first element of `fruits` to "apple".
//     Hint: Assign a new value using the index.

fruits=['banana','cactus','dragonFruit']
fruits[0]=`apple`
console.log(fruits);

// 17. Update the last element of `numbers` to be 10.
//     Hint: Use `array.length - 1` to get the last index.

lastIndex=numbers.length-1
numbers.splice(lastIndex, lastIndex ,10)
console.log(numbers);

// 18. Double the value of the third element in the `numbers` array.
//     Hint: Multiply the current value by 2.

console.log( numbers[2]*2 );

// 19. Change all elements in `colors` to uppercase.
for (let i = 0; i < colors.length; i++) {
    colors[i] = colors[i].toUpperCase();
}
console.log(colors);

// 20. Swap the first and last elements of the `seasons` array.

lastIndex=seasons.length-1
let temp=seasons[0]

seasons[0] = seasons[lastIndex];
seasons[lastIndex] = temp;

console.log(seasons);

//     Hint: Use a temporary variable to hold one value during the swap.



// ## Array Methods: push() and pop()
// [W3Schools Array push()](https://www.w3schools.com/jsref/jsref_push.asp)
// [W3Schools Array pop()](https://www.w3schools.com/jsref/jsref_pop.asp)

// 21. Add "orange" to the end of the `fruits` array using `push()`.
//     Hint: `push()` adds elements to the end of an array.

fruits.push('orange')
console.log(fruits);

// 22. Remove the last element from `numbers` using `pop()` and print the removed element.
//     Hint: `pop()` removes and returns the last element.

numbers.pop()
console.log(numbers);

// 23. Add three colors to `colors` in a single line using `push()`.
//     Hint: `push()` can accept multiple arguments.

colors.push(`Navy Blue`, `Pink`,`Brown`)
console.log(colors);

// 24. Create a loop that `push()`es numbers 1 to 5 into an empty array.
//     Hint: Use a for loop with `push()` inside.

let emptyArray=[]
for (i=1; i<=5; i++){
    emptyArray.push(i)
}
console.log(emptyArray);

// 25. Use `pop()` in a loop to empty an array and print each removed element.
//     Hint: Continue the loop while the array's length is greater than 0.
while (emptyArray.length>0) {
    emptyArray.pop()
    console.log(emptyArray);
}
// ## Array Methods: unshift() and shift()
// [W3Schools Array unshift()](https://www.w3schools.com/jsref/jsref_unshift.asp)
// [W3Schools Array shift()](https://www.w3schools.com/jsref/jsref_shift.asp)

// 26. Add "mango" to the beginning of `fruits` using `unshift()`.
//     Hint: `unshift()` adds elements to the beginning of an array.

fruits.unshift('mango')
console.log(fruits);

// 27. Remove the first element from `numbers` using `shift()` and print the removed element.
//     Hint: `shift()` removes and returns the first element.

let removed=numbers.shift()
console.log(removed);

// 28. Add three numbers to the beginning of `numbers` in a single line using `unshift()`.
//     Hint: Like `push()`, `unshift()` can accept multiple arguments.

numbers.unshift(12,13,14)
console.log(numbers);

// 29. Create a loop that `unshift()`s numbers 5 to 1 into an empty array.
//     Hint: Use a for loop that counts backwards.
let unNum=[5,4,3,2,1]
for (i=5; i>=0; i--){
console.log(unNum.shift(i));
}

// 30. Use `shift()` in a loop to empty an array and print each removed element.
//     Hint: Similar to the `pop()` loop, but use `shift()` instead.
emptyArray=[5,4,3,8]
while (emptyArray.length>0) {
   let removedElement = emptyArray.shift()
    console.log(removedElement);
}

// ## Array Methods: indexOf() and lastIndexOf()
// [W3Schools Array indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)
// [W3Schools Array lastIndexOf()](https://www.w3schools.com/jsref/jsref_lastindexof_array.asp)

// 31. Find the index of "green" in the `colors` array.
//     Hint: `indexOf()` returns the first occurrence of an element.

console.log(colors.indexOf('GREEN'));


// 32. Check if "winter" exists in `seasons` using `indexOf()`.
//     Hint: `indexOf()` returns -1 if the element is not found.

console.log(seasons.indexOf(`winter`));

// 33. Add "red" to the end of `colors` and find its last occurrence using `lastIndexOf()`.
//     Hint: `lastIndexOf()` searches from the end of the array.
colors.push(`red`)
colors.lastIndexOf(`red`)
console.log(colors.lastIndexOf(`red`));

// 34. Create an array with duplicate values and use `indexOf()` and `lastIndexOf()` to find the first and last occurrences.
//     Hint: Compare the results of both methods.

let duplicate=[4,4,9]
let indexFound=4
let firstIndex = duplicate.indexOf(indexFound)
let lastIndexFound=duplicate.lastIndexOf(indexFound)

console.log(firstIndex, lastIndexFound);


// 35. Use `indexOf()` to check if an array contains a specific value, and print a boolean result.
//     Hint: Compare the result of `indexOf()` to -1.

let arr=[4,8,9,5,2]
let value= 65
let checkIfContainsValue=arr.indexOf(value)
if(checkIfContainsValue===-1) console.log(true); else console.log(false);

// ## Array Methods: includes()
// [W3Schools Array includes()](https://www.w3schools.com/jsref/jsref_includes_array.asp)

// 36. Check if `fruits` includes "apple" and print the result.
//     Hint: `includes()` returns a boolean.

if(fruits.includes(`apple`))
    console.log(true);
else console.log(false);
console.log(fruits);
// 37. Verify if `numbers` includes the number 10.
//     Hint: `includes()` works with any data type.

if (numbers.includes(10))
    console.log(true);
else console.log(false);
console.log(numbers);

// 38. Use `includes()` with a starting index to check for "blue" in the second half of `colors`.
//     Hint: `includes()` accepts an optional second argument for the starting position.

if (colors.includes(`BLUE`, 3))
    console.log(true);
else console.log(false);

// 39. Create a function that returns true if an array includes a specific value, false otherwise.
//     Hint: Use `includes()` inside the function.

function includesNum (iNum){
     if (numbers.includes(iNum))  return true
    else  return false
}
console.log(includesNum(12));

// 40. Use `includes()` in an if statement to print different messages based on whether an element exists.
//     Hint: Use a ternary operator or if-else statement.

let valueToCheck=`banana`
if(fruits.includes(valueToCheck))
    console.log(`the element ${valueToCheck} exist`);
else console.log(`the element ${valueToCheck} does not exist`);

// ## Array Methods: slice()
// [W3Schools Array slice()](https://www.w3schools.com/jsref/jsref_slice_array.asp)

// 41. Extract the first three elements from `numbers` using `slice()`.
//     Hint: `slice()` with one argument extracts from that index to the end.

slicedNum=numbers.slice(0,3)
console.log(slicedNum);

// 42. Get the last two elements from `colors` using `slice()`.
//     Hint: Use negative indices with `slice()`.
console.log( colors);
extractColors=colors.slice(-2)
console.log(extractColors);

// 43. Extract elements from index 1 to 3 (exclusive) from `seasons`.
//     Hint: `slice()` second argument is exclusive.

extractSeason=seasons.slice(1,3)
console.log(extractSeason);

// 44. Use `slice()` to create a copy of an entire array.
//     Hint: `slice()` without arguments copies the whole array.

copiedArr=colors.slice()
console.log(copiedArr);

// 45. Extract elements from the middle of an array using `slice()`.
//     Hint: Calculate start and end indices based on array length.

colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
let middleIndex = Math.floor(colors.length / 2);

let numberOfElements = 3;

let startIndex = middleIndex - Math.floor(numberOfElements / 2);

let middleElements = colors.slice(startIndex, startIndex + numberOfElements);

console.log(middleElements);


// ## Array Methods: splice()
// [W3Schools Array splice()](https://www.w3schools.com/jsref/jsref_splice.asp)

// 46. Remove two elements from the middle of `fruits` using `splice()`.
//     Hint: `splice()` can remove elements from any position.
fruits=['banana','cactus','dragonFruit','orange']
middleIndex=Math.floor(fruits.length/2)
numberOfElements=2

startIndex=middleIndex-Math.floor(numberOfElements/2)

middleElements=fruits.splice(startIndex)

// 47. Replace an element in `numbers` with two new elements using `splice()`.
//     Hint: Use `splice()` with 3 or more arguments to replace elements.

numbers.splice(0,0,41,32)
console.log(numbers);

// 48. Insert three new elements between existing elements in `colors` without removing any.
//     Hint: Set the delete count to 0 when using `splice()` to insert.

colors.splice(1,0, 'magenta','cyan','cherry red')
console.log(colors);

// 49. Remove the first element and add two new elements at the beginning using a single `splice()` call.
//     Hint: `splice()` can remove and add elements simultaneously.

colors.splice(0,1,`black`,`white`)
console.log(colors);

// 50. Use `splice()` to empty an array by removing all elements.
//     Hint: Remove elements from index 0 to the array's length.

colors.splice(0,colors.length)
console.log(colors);

// ## Array Methods: concat()
// [W3Schools Array concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)
// 51. Concatenate `fruits` and `colors` into a new array.
//     Hint: `concat()` returns a new array without modifying the original arrays.

colors=[`red`,'green',`blue`]
fruits=[`apple`,`banana`,`kiwi`]

newArr=colors.concat(fruits)
console.log(newArr);

// 52. Join three different arrays using `concat()`.
//     Hint: Chain multiple `concat()` calls or pass multiple arguments.

newArr=colors.concat(fruits, seasons)
console.log(newArr);

// 53. Use `concat()` to add new elements to the end of an array without modifying the original.
//     Hint: `concat()` can take both arrays and individual elements as arguments.

newArr.concat(`tree`)
console.log(newArr);

// 54. Combine an array with itself to create a doubled array.
//     Hint: Use an array as an argument to `concat()`.

doubleArray= fruits.concat(fruits)
console.log(doubleArray);

// 55. Concatenate an array with multiple individual elements.
//     Hint: Pass individual elements as separate arguments to `concat()`.
fruits=['banana',`apple`,`kiwi`]
let element1=`fig`
let element2=`jackfruit`
let multipleArr=fruits.concat(element1,element2)
console.log(multipleArr);

// ## Array Methods: join()
// [W3Schools Array join()](https://www.w3schools.com/jsref/jsref_join.asp)

// 56. Convert `fruits` into a comma-separated string using `join()`.
//     Hint: Default separator for `join()` is a comma.

let comma=fruits.join(`,`)
console.log(comma);
// 57. Join elements of `numbers` with a dash between them.
//     Hint: Pass the desired separator as an argument to `join()`.

let dash=numbers.join(`-`)
console.log(dash);

// 58. Create a function that takes an array and a separator, then returns the joined string.
//     Hint: Use the separator parameter in the `join()` method. // ????

// 59. Join array elements with an empty string to create a single word.
//     Hint: Pass an empty string as the separator.

let joinArr =[`I`,`wish`,`you`]
let separator = ``
let word=joinArr.join(separator)
console.log(word);

// 60. Use `join()` and `split()` to reverse the order of words in a sentence.
//     Hint: Split the sentence into words, reverse the array, then join.

// let reverseArray= [`1`,`2`,`3`,`4`,`5`]
// let reverse= reverseArray.split()
// let final= reverse.join(`*`)
// console.log(reverse);
//??????? without using .reverse() this is very complicated

// ## Array Methods: reverse()
// [W3Schools Array reverse()](https://www.w3schools.com/jsref/jsref_reverse.asp)

// 61. Reverse the order of elements in `seasons`.
//     Hint: `reverse()` modifies the original array.

seasons.reverse()
console.log(seasons);

// 62. Create a function to check if a word is a palindrome using `split()`, `reverse()`, and `join()`.
//     Hint: Compare the original word with its reversed version.

function isPalindrome(word) {
    const normalizedWord = word.toLowerCase();
    const reversedWord = normalizedWord.split('').reverse().join('');
    return normalizedWord === reversedWord;
}
console.log(isPalindrome(`racecar`));


// 63. Reverse `numbers` and then map each element to its square.
//     Hint: Chain `reverse()` and `map()` methods.
numbers=[5,8,7,6,8]
const squaredReversedNumbers = numbers.reverse().map(function(num) {
    return num * num;
});
console.log(squaredReversedNumbers);

// 64. Use `reverse()` to reverse the order of characters in a string (Hint: use `split()` first).
//     Hint: Convert the string to an array, reverse it, then join back to a string.

const str = 'hello';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

// 65. Implement a function that reverses an array without using the `reverse()` method.
//     Hint: Use a loop to swap elements from the start and end of the array.

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    
    return arr;
}
numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers)
console.log(reversedNumbers);

// ## Array Methods: sort()
// [W3Schools Array sort()](https://www.w3schools.com/jsref/jsref_sort.asp)

// 66. Sort the `fruits` array in alphabetical order.
//     Hint: Default `sort()` works alphabetically for strings.

fruits.sort()
console.log(fruits);

// 67. Sort `numbers` in ascending order.
//     Hint: Use a compare function for numerical sort.

numbers.sort(function(a, b){
    return a-b;
})
console.log(numbers);


// 68. Sort `numbers` in descending order.
//     Hint: Modify the compare function to sort in reverse order.
numbers=[12,14,5,13,18]
numbers.sort(function(a, b){
    return a-b
})
numbers.reverse()
console.log(numbers);

// 69. Create an array of words and sort them by length.
//     Hint: Use a compare function that compares string lengths.

let aWords=[`dog`,`horse`,`fish`]
aWords.sort(function(word1,word2){
    return word1.length-word2.length
})
console.log(aWords);
// 70. Implement a custom sort to order an array of numbers based on their remainder when divided by 3.
//     Hint: Use the modulo operator (%) in the compare function.
numbers = [10, 15, 23, 8, 12, 5];

numbers.sort(function(a, b) {
    const remainderA = a % 3;
    const remainderB = b % 3;
    return remainderA - remainderB;
});

console.log(numbers);


//------------------------------------------------------------------------------------------
// ## Array Iteration: forEach() // skip it
// [W3Schools Array forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp)

// 71. Use `forEach()` to print each element in `colors`.
//     Hint: The callback function in `forEach()` receives each element as an argument.

// 72. Double each number in `numbers` using `forEach()`.
//     Hint: Modify the original array within the `forEach()` callback.

// 73. Use `forEach()` to create an HTML list from an array of strings.
//     Hint: Concatenate HTML tags within the `forEach()` callback.

// 74. Implement a simple search function using `forEach()`.
//     Hint: Use a condition inside the `forEach()` callback to find matching elements.

// 75. Use `forEach()` to count how many elements in an array meet a certain condition.
//     Hint: Increment a counter variable in the `forEach()` callback when the condition is met.
//------------------------------------------------------------------------------------------
// ## Array Iteration: map() // Fitousi said to skip
// [W3Schools Array map()](https://www.w3schools.com/jsref/jsref_map.asp)

// 76. Use `map()` to create a new array with the lengths of each string in `fruits`.
//     Hint: Return the length of each string in the `map()` callback.

// 77. Square all numbers in `numbers` using `map()`.
//     Hint: Return the square of each number in the `map()` callback.

// 78. Create a new array where each element is a boolean indicating if the original element is even.
//     Hint: Use the modulo operator (%) to check for even numbers.

// 79. Use `map()` to format an array of names into a new array of greetings.
//     Hint: Return a greeting string that includes the name in the `map()` callback.

// 80. Implement a function that uses `map()` to convert an array of Celsius temperatures to Fahrenheit.
//     Hint: Use the formula (C * 9/5) + 32 in the `map()` callback.
//------------------------------------------------------------------------------------------

// ## Array Iteration: filter() 
// [W3Schools Array filter()](https://www.w3schools.com/jsref/jsref_filter.asp)

// 81. Use `filter()` to create a new array with only the even numbers from `numbers`.
//     Hint: Use the modulo operator (%) to check for even numbers in the `filter()` callback.

numbers=[1,5,8,9,12]
let evenNumber=numbers.filter(function(isEven){
    return isEven%2===0
})
console.log(evenNumber);

// 82. Filter `fruits` to only include fruits with more than 5 characters.
//     Hint: Check the length of each string in the `filter()` callback.

let longFruits=fruits.filter(function(fruit){
  return fruit.length>5
})
console.log(longFruits);

// 83. Create a function that filters an array to only include unique values.
//     Hint: Use `indexOf()` in the `filter()` callback to check for duplicates.

numbers=[1,1,2,3,4,5]
let uniqueArr=numbers.filter(function(unique){
    return numbers.indexOf(unique)===unique
})
console.log(uniqueArr);

// 84. Use `filter()` to remove all falsy values from an array.
//     Hint: The callback can simply return the element itself, as falsy values will be filtered out.

const array = [0, 1, false, 2, '', 3, null, undefined, 4, NaN, 5];
const truthyValues = array.filter(function(value) {
    return value; 
});
console.log(truthyValues);

// 85. Implement a search function using `filter()` that returns all elements containing a specific substring.
//     Hint: Use the `includes()` method on each element in the `filter()` callback.
const words = ['apple', 'banana', 'cherry', 'date', 'grape'];
const searchTerm = 'an';
const result = searchArray(words, searchTerm);

function searchArray(arr, substring) {
    return arr.filter(function(element) {
        return element.includes(substring);
    });
}
console.log(result); 


//------------------------------------------------------------------------------------------
// ## Array Iteration: find() and findIndex()
// [W3Schools Array find()](https://www.w3schools.com/jsref/jsref_find.asp)
// [W3Schools Array findIndex()](https://www.w3schools.com/jsref/jsref_findindex.asp)


// 86. Use `find()` to get the first element in `numbers` that's greater than 3.
//     Hint: Return true in the callback when the condition is met.
console.log(numbers);

const dNum=numbers.find(function(firstNum){
    return firstNum>3
})
console.log(dNum);

// 87. Find the index of the first color in `colors` that starts with the letter 'b'.
//     Hint: Use `startsWith()` method in the `findIndex()` callback.

colors=['red',`green`,`blue`,`beige`]
let index=colors.findIndex(function(color){
 return color.startsWith(`b`)
})
console.log(index);

// 88. Implement a function that finds the first prime number in an array.
//     Hint: Create a helper function to check if a number is prime, then use it in the `find()` callback.

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
let prime = numbers.find(function(num) {
    return isPrime(num);
});
console.log(prime);

// 89. Use `findIndex()` to locate the position of a specific season in `seasons`.
//     Hint: Compare each element to the target season in the `findIndex()` callback.
seasons = ['spring', 'summer', 'fall', 'winter'];
const targetSeason = 'fall';
index = seasons.findIndex(function(season) {
    return season === targetSeason;
});
console.log(index); 


// 90. Create a function that uses `find()` to get the first element that satisfies a custom condition.
//     Hint: Pass the custom condition as a callback function to `find()`.

function findFirstElement(arr, condition) {
    return arr.find(condition);
}
numbers = [1, 4, 6, 8, 10];
const firstGreaterThanFive = findFirstElement(numbers, function(num) {
    return num > 5;
});
console.log(firstGreaterThanFive);


// ## Array Iteration: some() and every()
// [W3Schools Array some()](https://www.w3schools.com/jsref/jsref_some.asp)
// [W3Schools Array every()](https://www.w3schools.com/jsref/jsref_every.asp)

// 91. Check if `numbers` contains any even numbers using `some()`.
//     Hint: Use the modulo operator (%) to check for even numbers in the callback.
numbers = [1, 3, 5, 7, 10];
const hasEvenNumber = numbers.some(function(num) {
    return num % 2 === 0;
});

console.log(hasEvenNumber);


// 92. Verify if all elements in `fruits` have more than 3 characters using `every()`.
//     Hint: Check the length of each string in the `every()` callback.

fruits = ['apple', 'banana', 'kiwi', 'mango'];
const allHaveMoreThanThreeCharacters = fruits.every(function(fruit) {
    return fruit.length > 3;
});
console.log(allHaveMoreThanThreeCharacters);


// 93. Use `some()` to check if an array contains any negative numbers.
//     Hint: Compare each number to zero in the `some()` callback.

numbers = [1, -3, 5, 7, 10];
const hasNegativeNumber = numbers.some(function(num) {
    return num < 0;
});
console.log(hasNegativeNumber);


// 94. Implement a function using `every()` to check if all elements in an array are unique.
//     Hint: Use `indexOf()` and the current index in the `every()` callback to check for duplicates.

function areAllElementsUnique(arr) {
    return arr.every(function(element, index) {
        return arr.indexOf(element) === index;
    });
}
fruits = ['apple', 'banana', 'cherry', 'date'];
const allUnique = areAllElementsUnique(fruits);

console.log(allUnique); 

// 95. Use `some()` and `every()` together to check various conditions on an array.
//     Hint: Combine `some()` and `every()` checks using logical operators.

numbers = [2, 4, 6, 8, 11];
const hasNumberGreaterThanTen = numbers.some(function(num) { return num > 10; });
const allAreEven = numbers.every(function(num) { return num % 2 === 0; });
result1 = hasNumberGreaterThanTen && allAreEven;
console.log(result1);


//------------------------------------------------------------------------------------------
// ## Array Iteration: reduce() SKIP IT
// [W3Schools Array reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp)

// 96. Sum all numbers in `numbers` using `reduce()`.
//     Hint: The accumulator in `reduce()` should be updated with each element.

// 97. Find the longest word in `fruits` using `reduce()`.
//     Hint: Compare the length of the current element with the accumulator in each iteration.

// 98. Use `reduce()` to count the occurrences of each element in an array.
//     Hint: Use an object as the accumulator to store counts.

// 99. Implement a `flatten()` function for nested arrays using `reduce()`.
//     Hint: Use `concat()` within the `reduce()` callback to merge nested arrays.

// 100. Use `reduce()` to group an array of objects by a specific property.
//      Hint: The accumulator should be an object with keys based on the grouping property.
//------------------------------------------------------------------------------------------

// ## Advanced Exercises

// 101. Implement a function that removes duplicate elements from an array without using Set.
//      Hint: Use `reduce()` or `filter()` with `indexOf()`.

// 102. Create a function that rotates an array by a given number of positions.
//      Hint: Use `slice()` and spread operator to rearrange elements.

// 103. Implement a simple version of `map()` using `reduce()`.
//      Hint: Build a new array within the `reduce()` callback.

// 104. Write a function that finds the intersection of two arrays.
//      Hint: Use `filter()` and `includes()` methods.

// 105. Create a function that generates an array of specified length containing random numbers.
//      Hint: Use a loop or `Array.from()` with a mapping function.

/// Math Methods

// # JavaScript Math Methods Exercises

// 1. Use `Math.round()` to round 4.7 to the nearest integer.
//    Hint: `Math.round()` rounds to the nearest whole number.

console.log (Math.round(4.7))

//    [Learn more about Math.round()](https://www.w3schools.com/jsref/jsref_round.asp)

// 2. Calculate the square root of 16 using `Math.sqrt()`.
//    Hint: `Math.sqrt(x)` returns the square root of x.

console.log(Math.sqrt(16));

//    [Learn more about Math.sqrt()](https://www.w3schools.com/jsref/jsref_sqrt.asp)

// 3. Use `Math.pow()` to calculate 2 to the power of 3.
//    Hint: `Math.pow(base, exponent)` returns base raised to exponent.

console.log(Math.pow(2, 3));

//    [Learn more about Math.pow()](https://www.w3schools.com/jsref/jsref_pow.asp)

// 4. Find the absolute value of -5 using `Math.abs()`.
//    Hint: `Math.abs(x)` returns the absolute value of x.

console.log(Math.abs(-5));

//    [Learn more about Math.abs()](https://www.w3schools.com/jsref/jsref_abs.asp)

// 5. Use `Math.floor()` to round 4.9 down to the nearest integer.
//    Hint: `Math.floor()` always rounds down.

console.log(Math.floor(4.9));

//    [Learn more about Math.floor()](https://www.w3schools.com/jsref/jsref_floor.asp)

// 6. Use `Math.ceil()` to round 4.1 up to the nearest integer.
//    Hint: `Math.ceil()` always rounds up.

console.log(Math.ceil(4.1));

//    [Learn more about Math.ceil()](https://www.w3schools.com/jsref/jsref_ceil.asp)

// 7. Generate a random number between 0 and 1 using `Math.random()`.
//    Hint: `Math.random()` returns a number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random(0, 1));

//    [Learn more about Math.random()](https://www.w3schools.com/jsref/jsref_random.asp)

// 8. Find the maximum of 5, 10, and 15 using `Math.max()`.
//    Hint: `Math.max()` can take multiple arguments.

console.log(Math.max(5, 10, 15));

//    [Learn more about Math.max()](https://www.w3schools.com/jsref/jsref_max.asp)

// 9. Find the minimum of 5, 10, and 15 using `Math.min()`.
//    Hint: `Math.min()` can take multiple arguments.

console.log(Math.min(5, 10, 15));

//    [Learn more about Math.min()](https://www.w3schools.com/jsref/jsref_min.asp)

// 10. Calculate the sine of 90 degrees using `Math.sin()`.
//     Hint: `Math.sin()` works with radians, so convert degrees to radians first.

let radians=90*Math.PI/180
console.log(Math.sin(radians));

//     [Learn more about Math.sin()](https://www.w3schools.com/jsref/jsref_sin.asp)

// 11. Use `Math.cos()` to calculate the cosine of 0 degrees.
//     Hint: Remember to convert degrees to radians.

let radian=0*Math.PI/180
console.log(Math.cos(radian));

//     [Learn more about Math.cos()](https://www.w3schools.com/jsref/jsref_cos.asp)

// 12. Calculate the tangent of 45 degrees using `Math.tan()`.
//     Hint: Convert 45 degrees to radians before using `Math.tan()`.

let radian1=45*Math.PI/180
console.log(Math.tan(radian1));

//     [Learn more about Math.tan()](https://www.w3schools.com/jsref/jsref_tan.asp)

// 13. Use `Math.log()` to calculate the natural logarithm of 2.
//     Hint: `Math.log(x)` returns the natural logarithm of x.

console.log(Math.log(2));

//     [Learn more about Math.log()](https://www.w3schools.com/jsref/jsref_log.asp)

// 14. Calculate e raised to the power of 2 using `Math.exp()`.
//     Hint: `Math.exp(x)` returns e^x.

console.log(Math.exp(2));

//     [Learn more about Math.exp()](https://www.w3schools.com/jsref/jsref_exp.asp)

// 15. Use `Math.trunc()` to remove the decimal part of 3.7.
//     Hint: `Math.trunc()` removes any fractional digits.

console.log(Math.trunc(3.7));

//     [Learn more about Math.trunc()](https://www.w3schools.com/jsref/jsref_trunc.asp)

// 16. Generate a random integer between 1 and 10 (inclusive) using `Math.random()` and `Math.floor()`.
//     Hint: Multiply `Math.random()` by 10, add 1, and use `Math.floor()`.

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1)) +min;
}
console.log(getRandomInt(1, 10));

//     [Learn more about Math.random()](https://www.w3schools.com/jsref/jsref_random.asp)

// 17. Calculate the arcsine of 0.5 using `Math.asin()`.
//     Hint: `Math.asin()` returns the result in radians.

console.log(Math.asin(0.5));

//     [Learn more about Math.asin()](https://www.w3schools.com/jsref/jsref_asin.asp)

// 18. Use `Math.hypot()` to calculate the hypotenuse of a right triangle with sides of length 3 and 4.
//     Hint: `Math.hypot(a, b)` returns sqrt(a^2 + b^2).

console.log(Math.hypot(3, 4));

//     [Learn more about Math.hypot()](https://www.w3schools.com/jsref/jsref_hypot.asp)

// 19. Calculate 5 factorial using a combination of `Math.pow()` and `Math.exp()`.
//     Hint: Use the approximation n! ≈ sqrt(2πn) * (n/e)^n.

// Values
let n = 5;
let e = Math.exp(1);
let pi = Math.PI;
let gammaApprox = Math.sqrt(2 * pi * n) * Math.pow(n / e, n);
console.log(gammaApprox);


//     [Learn more about Math functions](https://www.w3schools.com/js/js_math.asp)

// 20. Use `Math.sign()` to determine the sign of -15.
//     Hint: `Math.sign()` returns -1, 0, or 1 based on the sign of the number.

console.log(Math.sign(-15));

//     [Learn more about Math.sign()](https://www.w3schools.com/jsref/jsref_sign.asp)

// 21. Calculate the cube root of 27 using `Math.pow()`.
//     Hint: The cube root of x is the same as x^(1/3).

let number=27
console.log(Math.pow(number,1/3));

//     [Learn more about Math.pow()](https://www.w3schools.com/jsref/jsref_pow.asp)

// 22. Use `Math.log10()` to calculate the base-10 logarithm of 100.
//     Hint: `Math.log10(x)` returns the base-10 logarithm of x.

console.log(Math.log10(100));

//     [Learn more about Math.log10()](https://www.w3schools.com/jsref/jsref_log10.asp)

// 23. Calculate the area of a circle with radius 5 using `Math.PI`.
//     Hint: The area of a circle is πr^2.

let area=Math.PI*5^2
console.log(area);

//     [Learn more about Math.PI](https://www.w3schools.com/jsref/jsref_pi.asp)

// 24. Use `Math.atan2()` to calculate the angle (in radians) from the x-axis to the point (1, 1).
//     Hint: `Math.atan2(y, x)` returns the angle in radians.

console.log(Math.atan2(1, 1));

//     [Learn more about Math.atan2()](https://www.w3schools.com/jsref/jsref_atan2.asp)

// 25. Round 4.5 to the nearest integer using `Math.round()`. Then do the same for 5.5. Observe the rounding behavior.
//     Hint: `Math.round()` rounds to the nearest integer, with .5 rounding up.

console.log(Math.round(4.5));
console.log(Math.round(5.5));

//     [Learn more about Math.round()](https://www.w3schools.com/jsref/jsref_round.asp)

// Remember to test your solutions and experiment with different inputs!



