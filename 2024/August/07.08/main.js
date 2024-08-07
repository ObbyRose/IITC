// 1. Print a Simple Matrix
// Create a 3x3 matrix and print it to the console. The matrix should contain the numbers 1 through 9.
let count = 1;
for (let i = 0; i < 3; i++) {
  let line = ``;
  for (let j = 0; j < 3; j++) {
    line += count + ` `;
    count++;
  }
  // console.log(line);
}

// 2. Sum of a 2x2 Matrix
// Write code to calculate the sum of all values in a 2x2 matrix.

let sum = 0;
count = 0;
for (let i = 0; i < 2; i++) {
  let line = ``;
  for (let j = 0; j < 2; j++) {
    line += count + ` `;
    count++;
  }
  sum += count;
}
// console.log(sum);

// 3. Search for a Value in a Matrix
// Write code to search for a value in a 3x3 matrix and print whether it is found or not.
function findValue(value) {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let found = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === value) return (found = true);
      else "Not Found";
    }
  }
}
// console.log(findValue(5));

// 4. Print a Multiplication Table
// Write code to print the multiplication table for numbers 1 through 3.
for (let i = 1; i <= 3; i++) {
  let multi = `multi of ${i}: `;
  for (let j = 1; j <= 3; j++) {
    multi += i * j + ` `;
  }
  //   console.log(multi);
}
// 5. Count Occurrences in an Array of Objects
// You have an array of objects, each with a value property. Write code to count how many times each value appears in the array.
let objects = [
  { value: "a" },
  { value: "b" },
  { value: "a" },
  { value: "c" },
  { value: "b" },
];
count = {};
for (let i = 0; i < objects.length; i++) {
  let value = objects[i].value;
  if (count[value]) count[value]++;
  else count[value] = 1;
}
// console.log(count);

// 6. Merge Two Arrays into an Array of Objects
// You have two arrays, one of names and one of ages. Write code to merge them into an array of objects, where each object contains a name and an age.
let names = [`David`, `Richard`, `Baba`];
let ages = [12, 18, 16];
let people = [];

for (let i = 0; i < names.length; i++) {
  people.push({ name: names[i], age: ages[i] });
}
// console.log(people);

// 7. Create a Sequential Matrix
// Write code to create a matrix with specified height and width, where each value is the sum of its row and column indices.
function sumOfSequentialMatrix(row, col) {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    let rows = [];
    for (let j = 0; j < col; j++) {
      rows.push(i + j);
    }
    matrix.push(rows);
  }
  return matrix;
}
// console.log(sumOfSequentialMatrix(4,4));

// 8. Print a Star Pattern
// Write code to print a star pattern in the shape of a right-angled triangle.

for (let i = 0; i < 5; i++) {
  let stars = `*`;
  for (let j = 0; j < i; j++) {
    stars += ` *`;
  }

  console.log(stars);
}

// 9. Sum of Values in a Matrix Function
// Write a function that takes a matrix of numbers and returns the sum of its values.

function sumOfMatrix(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      sum += values[i][j];
    }
  }
  return sum;
}
console.log(
  sumOfMatrix([
    [2, 2, 6],
    [5, 8, 6],
    [4, 8, 9],
  ])
);

// 10. Print Object Properties from an Array
// You have an array of objects, each with name and age properties. Write code to print the name and age of each object.

const persons = [
  { name: "Richard", age: 15 },
  { name: `David`, age: 18 },
  { name: `Baba`, age: 21 },
];
function printNameAge(array) {
  for (let i = 0; i < persons.length; i++) {
    let person = array[i];
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }
}
printNameAge(persons);

// 11. Print a Number Pattern
// Write code to print a pattern of numbers in a matrix form, where each value is the product of its row and column indices.

function printMatrixProduct(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < cols; j++) {
      let value = i * j;
      row += value + " ";
    }
    console.log(row.trim());
  }
}

printMatrixProduct(4, 5);

// 12. Print a Matrix with Random Values
// Write code to create a 3x3 matrix filled with random numbers between 1 and 10, and then print the matrix.

function createRandomMatrix(rows, cols, min, max) {
  let matrix = [];

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let value = Math.floor(Math.random() * (max - min + 1)) + min;
      row.push(value);
    }
    matrix.push(row);
  }

  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
}

let matrix = createRandomMatrix(3, 3, 1, 10);

printMatrix(matrix);
