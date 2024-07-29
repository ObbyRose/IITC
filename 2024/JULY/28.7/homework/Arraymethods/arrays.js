// # JavaScript Array Exercises
// # JavaScript Arrays Practice Exercises

// 1. Create an array of your five favorite foods.
//    Hint: Use square brackets and separate items with commas.

let favFood = ['QusQus', 'Beet kube','Schnitzel','BBQ','Jachnun']
console.log(favFood);

//    [Learn more about creating arrays](https://www.w3schools.com/js/js_arrays.asp)

// 2. Access and print the third item in your favorite foods array.
//    Hint: Remember that array indexing starts at 0.
favFood = ['QusQus', 'Beet kube','Schnitzel','BBQ','Jachnun']
console.log(favFood[2]);

//    [Learn more about accessing array elements](https://www.w3schools.com/js/js_arrays.asp)

// 3. Change the second item in your array to a different food.
//    Hint: Use array indexing to modify an element.

favFood = ['QusQus', 'Beet kube','Schnitzel','BBQ','Jachnun']
console.log(favFood[1]='PB&J');

//    [Learn more about changing array elements](https://www.w3schools.com/js/js_arrays.asp)

// 4. Add a new food to the end of your array using `push()`.
//    Hint: The push() method adds an element to the end of an array.

favFood = ['QusQus', 'Beet kube','Schnitzel','BBQ','Jachnun']
favFood.push('Burger')
console.log(favFood);

//    [Learn more about push()](https://www.w3schools.com/jsref/jsref_push.asp)

// 5. Remove the first food from your array using `shift()`.
//    Hint: The shift() method removes the first element from an array.

favFood = ['QusQus', 'Beet kube','Schnitzel','BBQ','Jachnun']
// favFood.shift(0)
console.log(favFood);

//    [Learn more about shift()](https://www.w3schools.com/jsref/jsref_shift.asp)

// 6. Create a loop that prints all the foods in your array.
//    Hint: Use a for loop and the array's length property.

for(let i=0; i<favFood.length; i++){
   console.log(favFood[i]);
}

//    [Learn more about looping through arrays](https://www.w3schools.com/js/js_array_iteration.asp)

// 7. Find the index of a specific food in your array using `indexOf()`.
//    Hint: indexOf() returns the first index at which a given element can be found.

favFood = ['QusQus', 'Beet kube','Schnitzel','BBQ','Jachnun']
console.log(favFood.indexOf('QusQus'));

//    [Learn more about indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)

// 8. Create an array of numbers and use a loop to calculate their sum.
//    Hint: Initialize a sum variable to 0, then add each array element to it in the loop.

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


//    [Learn more about array iteration](https://www.w3schools.com/js/js_array_iteration.asp)






// 1. Create an array called `fruits` with three favorite fruits.
//    Hint: Use square brackets `[]` to create an array.

let fruits= ['apple','banana','kiwi']
console.log(fruits);

//    [Learn more about arrays](https://www.w3schools.com/js/js_arrays.asp)

// 2. Add a new fruit to the end of the `fruits` array using the `push()` method.
//    Hint: `arrayName.push(newElement)` adds an element to the end.

fruits.push('orange')
console.log(fruits);

//    [Learn more about push()](https://www.w3schools.com/jsref/jsref_push.asp)

// 3. Remove the last fruit from the `fruits` array using the `pop()` method and store it in a variable called `lastFruit`.
//    Hint: `var lastItem = arrayName.pop()` removes and returns the last element.

let lastFruit=fruits.pop('orange')
console.log(fruits);
console.log(lastFruit);

//    [Learn more about pop()](https://www.w3schools.com/jsref/jsref_pop.asp)

// 4. Create an array of numbers from 1 to 5. Then, use `console.log()` to print the third element of this array.
//    Hint: Array indices start at 0, so the third element is at index 2.

let num=[1,2,3,4,5]
console.log(num[2]);

//    [Learn more about accessing array elements](https://www.w3schools.com/js/js_arrays.asp)

// 5. Change the second element of your `fruits` array to "kiwi".
//    Hint: Use array indexing to modify an element: `arrayName[1] = "kiwi"`.

fruits[1]='kiwi'
console.log(fruits);

//    [Learn more about changing array elements](https://www.w3schools.com/js/js_arrays.asp)

// 6. Create an empty array called `colors`. Then add "red", "green", and "blue" to it using the `push()` method.
//    Hint: You can chain multiple `push()` calls or use one with multiple arguments.

let colors=[]
colors.push('red','green','blue')
console.log(colors);

//    [Learn more about push()](https://www.w3schools.com/jsref/jsref_push.asp)

// 7. Remove the first element from your `colors` array using the `shift()` method.
//    Hint: `arrayName.shift()` removes the first element and returns it.

colors.shift(0)
console.log(colors);

//    [Learn more about shift()](https://www.w3schools.com/jsref/jsref_shift.asp)

// 8. Add "yellow" to the beginning of your `colors` array using the `unshift()` method.
//    Hint: `arrayName.unshift(newElement)` adds an element to the beginning.

colors.unshift('yellow')
console.log(colors);

//    [Learn more about unshift()](https://www.w3schools.com/jsref/jsref_unshift.asp)

// 9. Create an array of numbers and use a `for` loop to calculate the sum of all numbers in the array.
//    Hint: Initialize a sum variable to 0, then add each array element to it in the loop.

let numbers2 = [1, 2, 3, 4, 5];
let sum2 = 0;

for (let i = 0; i < numbers2.length; i++) {
    sum2 += numbers2[i];
}
console.log(sum2);

//    [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// 10. Use the `indexOf()` method to find the position of "green" in your `colors` array.
//     Hint: `arrayName.indexOf(element)` returns the index of the first occurrence of the element.

console.log(colors.indexOf('green'))

//     [Learn more about indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp)

// 11. Create an array of five random numbers. Then use a `for` loop to find and console.log the largest number in the array.
//     Hint: Initialize a variable with the first element, then compare it with other elements in the loop.

let randomNum = [5,8,45,8,6]
for (let i = 0; i<randomNum.length; i++){
    let firstElement=randomNum[0]
    if(firstElement>randomNum[1]&&randomNum[2]&&randomNum[3]&&randomNum[4])
      console.log(firstElement, " is the biggest number");
   else if (randomNum[1]>randomNum[2]&&randomNum[3]&&randomNum[4]) 
      console.log(randomNum[1], 'is the biggest number');
   else if (randomNum[2]>randomNum[3]&&randomNum[4])
      console.log(randomNum[2], " is the biggest number");
   else if (randomNum[3]>randomNum[4])
      console.log(randomNum[3], " is the biggest number");
   else console.log(randomNum[4], " is the biggest number");
}

//     [Learn more about Math.random()](https://www.w3schools.com/js/js_random.asp)

// 12. Use the `slice()` method to create a new array containing the second and third elements of your `fruits` array.
//     Hint: `arrayName.slice(startIndex, endIndex)` extracts a portion of an array.

console.log(fruits.slice(1,2));

//     [Learn more about slice()](https://www.w3schools.com/jsref/jsref_slice_array.asp)

// 13. Create an array of numbers. Use the `filter()` method to create a new array containing only the even numbers.
//     Hint: The callback function for `filter()` should return `true` for even numbers.

let filterNum=[2,5,9,10]
let evenNum= filterNum.filter (function (number){
   return number % 2===0;
})
console.log(evenNum);


//  Lea   [rn more about filter()](https://www.w3schools.com/jsref/jsref_filter.asp)

// 14. Use the `join()` method to convert your `colors` array into a string where colors are separated by commas.
//     Hint: `arrayName.join(separator)` joins all elements into a string.

let colorStr = colors.join(',')
console.log(colorStr);

//     [Learn more about join()](https://www.w3schools.com/jsref/jsref_join.asp)

// 15. Create two arrays of numbers. Use the `concat()` method to combine them into a single array.
//     Hint: `array1.concat(array2)` combines two arrays.

let array1=[5,6,7]
let array2=[8,9,15]
let newArray= array2.concat(array1)
console.log(newArray);

//     [Learn more about concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)

// 16. Use the `reverse()` method to reverse the order of elements in your `fruits` array.
//     Hint: `arrayName.reverse()` reverses the array in place.

fruits= ['apple','banana','kiwi']
let reverseFruits=fruits.reverse()
console.log(reverseFruits);

//     [Learn more about reverse()](https://www.w3schools.com/jsref/jsref_reverse.asp)

// 17. Create an array of names. Use the `map()` method to create a new array where each name is prefixed with "Hello, ".
//     Hint: The callback function for `map()` should return the modified string.

let names=['John', 'Rich', 'Thompson']
let nameArray=names.map(function(allNames){
return 'Hello '+allNames
})
console.log(nameArray);

//     [Learn more about map()](https://www.w3schools.com/jsref/jsref_map.asp)

// 18. Use the `every()` method to check if all numbers in an array are greater than 0.
//     Hint: The callback function for `every()` should return a boolean.

let greaterNum=[2,5,56,-5]
let areGreater=greaterNum.every(function(areThey){
   return areThey>0
})
console.log(areGreater); // will return false since not ALL of them are greater if I want I could differentiate between them by using a simple if statement

//     [Learn more about every()](https://www.w3schools.com/jsref/jsref_every.asp)

// 19. Create an array of numbers. Use the `find()` method to get the first number greater than 10.
//     Hint: The callback function for `find()` should return `true` for the desired element.

greaterNum;
let greaterThan=greaterNum.find(function(isGreaterThan){
   return isGreaterThan>10;

})
console.log(greaterThan);

//     [Learn more about find()](https://www.w3schools.com/jsref/jsref_find.asp)

// 20. Use the `some()` method to check if your `fruits` array contains the fruit "banana".
//     Hint: The callback function for `some()` should return `true` if the element is "banana".

let check=fruits.some(function(CheckFruits){
   return CheckFruits="banana"

})
console.log(check);

//     [Learn more about some()](https://www.w3schools.com/jsref/jsref_some.asp)

// 21. Create an array of numbers. Use the `reduce()` method to calculate the product of all numbers in the array.
//     Hint: The callback function for `reduce()` should multiply the accumulator by the current value.

let reduceNum=[5,10,15]
let multiplyNum=reduceNum.reduce(function(multiply,mNum){
   return multiply*mNum
})
console.log(multiplyNum);

//     [Learn more about reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp)

// 22. Use a `for` loop to create an array containing the squares of numbers from 1 to 10.
//     Hint: Initialize an empty array and use `push()` inside the loop to add squared values.
let squares=[]
for(i=0; i<=10; i++){
   squares.push(i*i)
}
console.log(squares);

//     [Learn more about for loops](https://www.w3schools.com/js/js_loop_for.asp)

// 23. Create an array of words. Use the `filter()` method to create a new array containing only words with more than 5 letters.
//     Hint: The callback function for `filter()` should check the length of each word.

let letterWords=['change','toupee','fart']
let filteredWords=letterWords.filter(function(filtering){
   return filtering.length>4
})
console.log(filteredWords);

//     [Learn more about filter()](https://www.w3schools.com/jsref/jsref_filter.asp)

// 24. Use the `includes()` method to check if your `colors` array includes the color "purple".
//     Hint: `arrayName.includes(element)` returns `true` if the element is in the array.

let checkPurple=colors.includes('purple')
console.log(checkPurple);

//     [Learn more about includes()](https://www.w3schools.com/jsref/jsref_includes_array.asp)

// 25. Create a 2D array representing a tic-tac-toe board. Fill it with "X", "O", and empty strings. Then, write a function that console.logs the board in a readable format.
//     Hint: Use nested arrays to create a 2D array. Use nested loops to print the board.
let board = [
   ['X', '','X'],
   ['O', '', ''],
   [`O`,`O`,'X']
];
function printBoard(board) {
   for (let row of board) {
       console.log(row.join(' | '));
       console.log('-'.repeat(row.length * 3));
   }
}
printBoard(board)

//     [Learn more about multidimensional arrays](https://www.w3schools.com/js/js_array_methods.asp)

// Remember to test your code and experiment with different inputs!

