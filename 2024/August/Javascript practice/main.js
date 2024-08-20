`use strict`;

// Easy to Medium

// 1. Sum of Array
const numbers1 = [1, 2, 3, 4, 5];

// TODO: Write a function to sum all numbers in an array

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
// console.log(sumArray(numbers1));

// 2. Reverse String
const string1 = "hello";
// TODO: Write a function to reverse a string
function reverseString(str) {
  let newStr = ``;
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]; // or newString = newString + str[i];
  }
  return newStr;
}
// console.log(reverseString(string1));

// 3. Check Palindrome
const string2 = "racecar";
// TODO: Write a function to check if a string is a palindrome
function isPalindrome(str) {
  str.toLowerCase().split(``).reverse().join(``);
  return str === str.split(``).reverse().join(``);
}
// console.log(isPalindrome(string2));

// 4. Remove Duplicates
const numbers2 = [1, 2, 2, 3, 4, 4, 5];
// TODO: Write a function to remove duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// console.log(removeDuplicates(numbers2));

// 5. Find Maximum
const numbers3 = [2, 10, 5, 8, 1, 7, 4, 3, 9, 67, 3, 8, 2, 10, 5, 6, 1, 4, 9];
// TODO: Write a function to find the maximum number in an array
function findMax(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.max(arr[i]) > maxNum) maxNum = Math.max(arr[i]);
  }
  return maxNum;
}
// console.log(findMax(numbers3));

// 6. Average Age
const people = [
  { name: "Tom", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Jim", age: 35 },
];
// TODO: Write a function to calculate the average age of people
function averageAge(people) {
  let sumAges = 0;
  let avgAge;
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    sumAges += people[i].age;
  }
  avgAge = sumAges / people.length;
  return avgAge;
}
// console.log(averageAge(people));

// 7. Filter by Category
const items = [
  { name: "Tablet", category: "electronics" },
  { name: "Shoes", category: "clothing" },
  { name: "Camera", category: "electronics" },
];
// TODO: Write a function to filter items by category
function filterByCategory(items, category) {
  let filtering;
  for (let i = 0; i < items.length; i++) {
    filtering = items.filter((items) => items.category === category);
  }
  return filtering;
}
// console.log(filterByCategory(items, "electronics"));

// 8. Count Vowels
const string3 = "josephino";
// TODO: Write a function to count the number of vowels in a string
function countVowels(str) {
  let letter = ``;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    letter.toLowerCase();
    if (
      letter === `a` ||
      letter === "e" ||
      letter === `i` ||
      letter === "o" ||
      letter === "u"
    )
      count++;
  }
  return count;
}
// console.log(countVowels(string3));

// 9. Merge Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// TODO: Write a function to merge two arrays
function mergeArrays(arr1, arr2) {
  let NewArr = arr1.concat(arr2);
  return NewArr;
}
// console.log(mergeArrays(array1, array2));

// 10. Product of Array
const numbers4 = [1, 2, 3, 4, 5];
// TODO: Write a function to find the product of all numbers in an array
function productArray(numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
}
// console.log(productArray(numbers4));

// Medium

// 11. Find Longest Word
const string4 = "The quick brown fox jumps over the lazy dog";
// TODO: Write a function to find the longest word in a string
function longestWord(str) {
  let max = -1;
  let maxIndex = -1;
  const arr = str.split(` `);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      maxIndex = i;
    }
  }
  return arr[maxIndex];
}
console.log(longestWord(string4));

// 12. Count Words
const string5 = "The quick brown fox jumps over the lazy dog";
// TODO: Write a function to count the number of words in a string
function countWords(str) {
  // your code here
}
// countWords(string5)

// 13. Sort Array
const numbers5 = [5, 3, 8, 1, 2];
// TODO: Write a function to sort an array of numbers in ascending order
function sortArray(arr) {
  // your code here
}
// sortArray(numbers5)

// 14. Flatten Array
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// TODO: Write a function to flatten a nested array
function flattenArray(arr) {
  // your code here
}

// 15. Capitalize Words
const string6 = "the quick brown fox";
// TODO: Write a function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
  // your code here
}

// 16. Find Common Elements
const array3 = [1, 2, 3, 4, 5];
const array4 = [4, 5, 6, 7, 8];
// TODO: Write a function to find common elements in two arrays
function findCommonElements(arr1, arr2) {
  // your code here
}

// 17. Sum of Even Numbers
const numbers6 = [1, 2, 3, 4, 5, 6];
// TODO: Write a function to find the sum of even numbers in an array
function sumEvenNumbers(arr) {
  // your code here
}

// 18. Count Occurrences
const numbers7 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// TODO: Write a function to count the occurrences of each element in an array
function countOccurrences(arr) {
  // your code here
}

// 19. Remove Vowels
const string7 = "hello world";
// TODO: Write a function to remove vowels from a string
function removeVowels(str) {
  // your code here
}

// 20. Group by Property
const vehicles = [
  { model: "Sedan", type: "car" },
  { model: "Roadster", type: "motorcycle" },
  { model: "SUV", type: "car" },
];
// TODO: Write a function to group vehicles by type
function groupByProperty(vehicles, property) {
  // your code here
}

// Hard

// 21. Deep Clone Object
const object1 = { a: 1, b: { c: 2 } };
// TODO: Write a function to deep clone an object
function deepClone(obj) {
  // your code here
}

// 22. Fibonacci Sequence
const n1 = 10;
// TODO: Write a function to generate the Fibonacci sequence up to n elements
function fibonacci(n) {
  // your code here
}

// 23. Find Missing Number
const numbers8 = [1, 2, 4, 5];
// TODO: Write a function to find the missing number in an array of 1 to n
function findMissingNumber(arr, n) {
  // your code here
}

// 24. Binary Search
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
// TODO: Write a function to perform binary search on a sorted array
function binarySearch(arr, target) {
  // your code here
}

// 25. Matrix Transpose
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// TODO: Write a function to transpose a matrix
function transposeMatrix(matrix) {
  // your code here
}

// 26. Validate Brackets
const string8 = "{[()]}";
// TODO: Write a function to validate if the brackets in a string are balanced
function validateBrackets(str) {
  // your code here
}

// 27. Longest Increasing Subsequence
const numbers9 = [10, 9, 2, 5, 3, 7, 101, 18];
// TODO: Write a function to find the longest increasing subsequence in an array
function longestIncreasingSubsequence(arr) {
  // your code here
}

// 28. Permutations
const string9 = "abc";
// TODO: Write a function to generate all permutations of a string
function permutations(str) {
  // your code here
}

// 29. Knapsack Problem
const knapsackItems = [
  { weight: 2, value: 3 },
  { weight: 3, value: 4 },
  { weight: 4, value: 5 },
];
const capacity = 5;
// TODO: Write a function to solve the knapsack problem for given items and capacity
function knapsack(items, capacity) {
  // your code here
}

// 30. LRU Cache
// TODO: Write a class to implement an LRU (Least Recently Used) cache
class LRUCache {
  constructor(capacity) {
    // your code here
  }

  // Add methods to get and put values in the cache
}
