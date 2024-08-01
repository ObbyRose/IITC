// # 30 Basic 'for' Loop Exercises in JavaScript

// ## Basic Counting Exercises

// 1. Write a for loop that counts from 1 to 5 and prints each number.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. Create a for loop that counts from 0 to 9 and prints each number.
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// 3. Write a for loop that counts from 10 to 1 (backwards) and prints each number.
for (let i = 10; i >= 1; i--) console.log(i);

// 4. Create a for loop that counts from 1 to 10, but only prints even numbers.

for (let i = 1; i <= 10; i++) if (i % 2 === 0) console.log(i);

// 5. Write a for loop that counts from 1 to 10, but only prints odd numbers.
for (let i = 1; i <= 10; i++) if (i % 2 !== 0) console.log(i);

// ## Counting with Different Increments

// 6. Create a for loop that counts from 0 to 15 by 3s (0, 3, 6, 9, 12, 15).

for (let i = 0; i <= 15; i++) if (i % 3 === 0) console.log(i);

// 7. Write a for loop that counts from 1 to 20 by 2s (1, 3, 5, ..., 19).
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) console.log(i);
}

// 8. Create a for loop that counts from 2 to 20 by 2s (2, 4, 6, ..., 20).
//    ```javascript
//    // Your code here
//    ```
for (let i = 2; i <= 20; i++) if (i % 2 === 0) console.log(i);

// 9. Write a for loop that counts from 10 to 0 by 2s (10, 8, 6, ..., 0).
for (let i = 10; i >= 0; i--) if (i % 2 === 0) console.log(i);

// 10. Create a for loop that counts from 5 to 25 by 5s (5, 10, 15, 20, 25).
for (let i = 5; i <= 25; i++) if (i % 5 === 0) console.log(i);

// ## Printing Patterns

// 11. Write a for loop that prints "*" five times on the same line.
let stars = "";
for (let i = 1; i <= 5; i++) stars += "*";
console.log(stars);

// 12. Create a for loop that prints "Hello" three times, each on a new line.

for (let i = 0; i < 3; i++) console.log(`Hello`);

// 13. Write a for loop that prints numbers from 1 to 3, each followed by "!".

for (let i = 1; i <= 3; i++) console.log(i + "!");

// 14. Create a for loop that prints "A" to "E" (one letter per iteration).
let letters = [`A`, `B`, `C`, `D`, `E`];
for (i = 0; i <= 4; i++) console.log(letters[i]);

// 15. Write a for loop that prints "2" four times, separated by spaces.

for (i = 0; i < 4; i++) console.log(`2` + ` `);

// ## Working with Arrays

// 16. Given the array `[1, 2, 3, 4, 5]`, write a for loop to print each element.
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 17. Given the array `['a', 'b', 'c', 'd']`, use a for loop to print each element.
//     ```javascript
//     let arr = ['a', 'b', 'c', 'd'];
let arr = ["a", "b", "c", "d"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 18. Write a for loop to print each element of `[10, 20, 30, 40, 50]` backwards.
//     ```javascript
//     let arr = [10, 20, 30, 40, 50];
//     // Your code here
let arr2 = [10, 20, 30, 40, 50];
for (let i = arr2.length - 1; i >= 0; i--) {
  console.log(arr2[i]);
}

// 19. Use a for loop to print every second element of `[1, 2, 3, 4, 5, 6]`.
//     ```javascript
//     let arr = [1, 2, 3, 4, 5, 6];
//     // Your code here
//     ```

let arr3 = [1, 2, 3, 4, 5, 6];
for (let i = 1; i <= arr3.length; i += 2) console.log(arr3[i]);

// 20. Given `['red', 'green', 'blue']`, use a for loop to print "Color: [color]" for each.
//     ```javascript
//     let colors = ['red', 'green', 'blue'];
//     // Your code here
//     ```
let colors = ["red", "green", "blue"];
for (i = 0; i < colors.length; i++) console.log(colors[i]);

// ## Simple Calculations in Loops

// 21. Write a for loop to calculate the sum of numbers from 1 to 5.
//     ```javascript
//     let sum = 0;
//     // Your code here
//     ```

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

// 22. Create a for loop to calculate the product of numbers from 1 to 5.
//     ```javascript
//     let product = 1;
//     // Your code here
//     ```
let product = 1;
for (let i = 0; i < 5; i++) console.log((product += i));

// 23. Use a for loop to count how many even numbers are in `[1, 2, 3, 4, 5, 6, 7, 8]`.
//     ```javascript
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//     let count = 0;

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
let count = 0;
for (let i = 0; i < arr4.length; i++) if (arr4[i] % 2 === 0) count++;
console.log(count);

// 24. Write a for loop to find the largest number in `[10, 5, 8, 12, 3]`.
//     ```javascript
//     let arr = [10, 5, 8, 12, 3];
//     let largest = arr[0];
//     // Your code here
//     ```

let arr5 = [10, 5, 8, 12, 3];
let largest = arr5[0];
for (let i = 0; i < arr5.length; i++) {
  if (largest < arr5[i]) largest = arr5[i];
}
console.log(`The largest number in the array is ${largest}`);

// 25. Use a for loop to calculate the sum of even numbers from 1 to 10.
//     ```javascript
//     let sum = 0;
//     // Your code here
//     ```

let sum1 = 0;
for (i = 1; i < 10; i++) if (i % 2 == 0) sum += i;
console.log(sum);

// ## Nested Loops

// 26. Write nested for loops to create this pattern:
//     ```
//     *
//     **
//     ***
//     ```
//     ```javascript
//     // Your code here
//     ```

let star = ``;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 1; j++) {
    star += `*`;
  }
  console.log(star);
}

// 27. Create nested for loops to print a 3x3 grid of asterisks.
//     ```javascript
//     // Your code here
//     ```

for (let i = 0; i < 3; i++) {
  let line = ``;
  for (let j = 0; j < 3; j++) {
    line += "* ";
  }
  console.log(line);
}

// 28. Use nested for loops to create this number pattern:
//     ```
//     1
//     12
//     123
//     ```
//     ```javascript
//     // Your code here
//     ```
for (let i = 1; i <= 3; i++) {
  let line = ``;
  for (let j = 1; j <= i; j++) {
    line += j;
  }
  console.log(line);
}

// 29. Write nested for loops to create a 4x4 multiplication table.
//     ```javascript
//     // Your code here
//     ```
function makeMultiTable() {
  for (let i = 1; i <= 4; i++) {
    let row = ``;
    for (let j = 1; j <= 4; j++) {
      row += j * i + " ";
    }
    console.log(row);
  }
}
makeMultiTable();

// 30. Create nested for loops to print this pattern:
//     ```
//     1
//     22
//     333
//     ```
//     ```javascript
//     // Your code here
//     ```

for (let i = 1; i <= 3; i++) {
  let line = ``;

  for (let j = 1; j <= i; j++) {
    line += i;
  }
  console.log(line);
}

// These exercises focus on reinforcing the basic syntax and usage of 'for' loops in JavaScript. They start with simple counting exercises and gradually introduce more concepts like working with arrays, performing calculations, and using nested loops. Remember to encourage students to experiment with the loop parameters (start, condition, increment) to deepen their understanding.
