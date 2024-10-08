// <!-- # JavaScript Variable Declaration Exercises

// ## Introduction
// Before starting the exercises, you might want to review the basics of JavaScript variables:
// [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)

// ## Exercises

// 1. Declare a variable named firstName and assign it your first name as a string.
//    Hint: Use the `let` keyword for variable declaration.

let firstName="Tal"
console.log(firstName)

//    [Learn more about variables](https://www.w3schools.com/js/js_variables.asp)

// 2. Create a variable age as a number and set it to your current age.
//    Hint: Numbers don't need quotes in JavaScript.

let age = 22
console.log(age)

//    [Learn more about numbers](https://www.w3schools.com/js/js_numbers.asp)

// 3. Declare a variable isRaining as a boolean and set it to false.
//    Hint: Boolean values in JavaScript are `true` or `false` (without quotes).

let isRaining=false
console.log(isRaining)

//    [Learn more about booleans](https://www.w3schools.com/js/js_booleans.asp)

// 4. Declare a **constant** variable PI as a number and assign it the value 3.14159.
//    Hint: Use the `const` keyword for constants.

const PI =3.14159
console.log (PI)

//    [Learn more about const](https://www.w3schools.com/js/js_const.asp)

// 5. Declare a variable isStudent as a boolean and set it to true.
//    Hint: Boolean values in JavaScript are `true` or `false`.

let isStudent=true
console.log(isStudent)

//    [Learn more about booleans](https://www.w3schools.com/js/js_booleans.asp)

// 6. Create a variable named favoriteColor as a string without assigning it a value.
//    Hint: You can declare a variable without initializing it.

let favoriteColor = ""
console.log(favoriteColor)

//    [Learn more about variable declaration](https://www.w3schools.com/js/js_variables.asp)

// 7. Declare a variable temperature as a number and assign it the value 72.5.
//    Hint: JavaScript doesn't distinguish between integers and floats.

let temperature=72.5
console.log(temperature)

//    [Learn more about numbers](https://www.w3schools.com/js/js_numbers.asp)

// 8. Create a **constant** variable DAYS_IN_WEEK as a number and set it to 7.
//    Hint: Use uppercase for constant names as a convention.

const DAYS_IN_WEEK = 7
console.log(DAYS_IN_WEEK)

//    [Learn more about const](https://www.w3schools.com/js/js_const.asp)

// 9. Declare a variable username as a string and assign it the value "coder123".
//    Hint: Strings can be enclosed in single or double quotes.

const username = `coder123`
console.log(username)

//    [Learn more about strings](https://www.w3schools.com/js/js_strings.asp)

// 10. Create a variable score as a number and set it to 0.
//     Hint: Initialize variables with a starting value when appropriate.

let score = 0
console.log(score)

//     [Learn more about variable initialization](https://www.w3schools.com/js/js_variables.asp)

// 11. Declare a variable isLoggedIn as a boolean and assign it the value false.
//     Hint: Boolean values don't need quotes.

let isLoggedIn=false
console.log(isLoggedIn)

//     [Learn more about booleans](https://www.w3schools.com/js/js_booleans.asp)

// 12. Create a **constant** variable COMPANY_NAME as a string and set it to "Tech Solutions Inc.".
//     Hint: Constants can also be strings.

const COMPANY_NAME= "Tech Solutions Inc." 
console.log(COMPANY_NAME);

//     [Learn more about const](https://www.w3schools.com/js/js_const.asp)

// 13. Declare a variable currentYear as a number and assign it the current year.
//     Hint: You can use the `Date` object to get the current year.

   let currentYear=Date()
   console.log(currentYear);

//     [Learn more about Date object](https://www.w3schools.com/js/js_dates.asp)

// 14. Create a variable price as a number (float) and set it to 19.99.
//     Hint: JavaScript automatically handles decimal numbers.

let price = 19.99
console.log(price);

//     [Learn more about numbers](https://www.w3schools.com/js/js_numbers.asp)

// 15. Declare a variable quantity as a number and assign it the value 100.
//     Hint: Whole numbers are also of type "number" in JavaScript.

 let quantity = Number(100)
console.log(quantity);

// //     [Learn more about numbers](https://www.w3schools.com/js/js_numbers.asp)

// // 16. Declare a variable counter as a number and set it to 0. Then **increment** it by 1.
// //     Hint: You can use the increment operator (++) or addition assignment (+=).

let counter = 0
counter++;
console.log(counter);

// //     [Learn more about operators](https://www.w3schools.com/js/js_operators.asp)

// 17. Create a variable message as a string and set it to "Hello". Then **reassign** it to "Hello, World!".
//     Hint: Variables declared with `let` can be reassigned.
//     [Learn more about let](https://www.w3schools.com/js/js_let.asp)

let string1=`Hello`
let string2=string1
string2=`Hello World`
console.log(string2)

// 18. Declare a variable using `let` named myVariable and assign it the value 42. Then, on the next line, reassign it to "forty-two".
//     Hint: JavaScript allows you to reassign variables to different types.

let myVariable=42
myVariable= `forty-two`
console.log(myVariable);

//     [Learn more about let](https://www.w3schools.com/js/js_let.asp)

// 19. Create a variable totalCost as a number and set it to 50. Then **add** 10 to its current value.
//     Hint: You can use the addition assignment operator (+=).

let totalCost = 50
totalCost +=10
console.log(totalCost);

//     [Learn more about assignment operators](https://www.w3schools.com/js/js_assignment.asp)

// 20. Declare a variable username and assign it the value "user1". Then reassign it to "admin".
//     Hint: Variables can be reassigned to different values of the same type.

let userName= `user1`
userName=`admin`
console.log(userName);

//     [Learn more about variable reassignment](https://www.w3schools.com/js/js_variables.asp)

// 21. Create a variable temperature and set it to 20. Then multiply its value by 1.8 and add 32 to convert from Celsius to Fahrenheit.
//     Hint: You can perform multiple operations in one statement.

let temperAture = 20*1.8+32
console.log(temperAture);

//     [Learn more about arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)

// 22. Declare a variable fruits as an array and set it to ["apple", "banana"]. Then add "orange" to the array.
//     Hint: You can use the push() method to add elements to an array.

let fruits = ["apple", "banana"]
fruits.push("orange")
console.log(fruits);
//     [Learn more about arrays](https://www.w3schools.com/js/js_arrays.asp)

// 23. Create a variable person as an object with properties name and age. Then add a new property city.
//     Hint: You can add new properties to objects after creation.

let person= {name:`Johnny`,age:32}
person.city = `Tel Aviv`
console.log(person);

//     [Learn more about objects](https://www.w3schools.com/js/js_objects.asp)

// 24. Declare a variable count and set it to 5. Then decrement it by 1.
//     Hint: You can use the decrement operator (--) or subtraction assignment (-=).

let count=5
count--;
console.log(count);

//     [Learn more about operators](https://www.w3schools.com/js/js_operators.asp)

// 25. Create a variable greeting and set it to "Good". Then concatenate it with "morning" to form "Good morning".
//     Hint: You can use the + operator to concatenate strings.

let greeting="Good"
greeting=`Good`+` Morning`
console.log(greeting);
//     [Learn more about string methods](https://www.w3schools.com/js/js_string_methods.asp) -->
