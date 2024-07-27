// # JavaScript Function Exercises

// ## Introduction
// Before starting the exercises, review the basics of JavaScript functions:
// [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)

// ## Basic Function Exercises (1-20)

// 1. Write a function named `greet` that prints "Hello, World!" to the console.
//    Hint: Use `console.log()` inside the function.

function greet(){
return console.log("hello world")}
greet()

//    [Learn more about console.log()](https://www.w3schools.com/jsref/met_console_log.asp)

// 2. Create a function called `square` that takes a number as an argument and returns its square.
//    Hint: Use the multiplication operator (*) to calculate the square.

function square(number){
return console.log(number*number);
}
square(2)

//    [Learn more about return statements](https://www.w3schools.com/js/js_function_return.asp)

// 3. Write a function named `isEven` that takes a number as an argument and returns true if it's even, and false otherwise.
//    Hint: Use the modulus operator (%) to check if a number is even.

function isEven(isEvenNumber){
    if(isEvenNumber%2===0) return console.log(true)
    else return console.log(false);
}
isEven(9)

//    [Learn more about the modulus operator](https://www.w3schools.com/js/js_arithmetic.asp)

// 4. Create a function called `getFullName` that takes two parameters, `firstName` and `lastName`, and returns the full name as a string.
//    Hint: Concatenate the two parameters with a space in between.

function getFullName(firstName, lastName) {
let fullName=`${firstName} ${lastName}`
console.log(fullName);
}
getFullName("Tal", "Maman")

//    [Learn more about string concatenation](https://www.w3schools.com/js/js_operators.asp)

// 5. Write a function named `sumTwo` that takes two numbers as arguments and returns their sum.
//    Hint: Use the addition operator (+) to add the numbers.

function sumTwo(number1, number2){
    let sum=number1+number2
    return console.log(sum);
}
sumTwo(10, 8)

//    [Learn more about arithmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)

// 6. Create a function named `multiply` that takes two numbers as arguments and returns their product.
//    Hint: Use the multiplication operator (*).

function multiply(mNumber1,mNumber2){
    let product=mNumber1*mNumber2
    console.log(product);
}
multiply(2,8)

//    [Learn more about arithmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)

// 7. Write a function called `greetPerson` that takes a name as an argument and returns a greeting string.
//    Hint: Return a string like "Hello, [name]!".

function greetPerson(name){
    return console.log(`Hello, ${name}`);
}
greetPerson("Dobby")

//    [Learn more about string concatenation](https://www.w3schools.com/js/js_operators.asp)

// 8. Create a function named `getAbsoluteValue` that takes a number as an argument and returns its absolute value.
//    Hint: Use an if statement to check if the number is negative.

function getAbsoluteValue(vNumber){
    if (vNumber<0)
        return console.log(-(vNumber))
    else
     return console.log(vNumber) 
}
getAbsoluteValue(-9)

//    [Learn more about if statements](https://www.w3schools.com/js/js_if_else.asp)

// 9. Write a function called `calculateAverage` that takes two numbers as arguments and returns their average.
//    Hint: Add the numbers and divide by 2.

function calculateAverage (cNumber1, cNumber2){
    let average= (cNumber1+cNumber2)/2
    console.log(average);
}
calculateAverage(20,5)

//    [Learn more about arithmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)

// 10. Create a function named `convertToUppercase` that takes a string as an argument and returns the string in uppercase.
//     Hint: Use the `toUpperCase()` method.

function convertToUppercase (string){
    return console.log(string.toUpperCase());
}
convertToUppercase("rachel")

//     [Learn more about string methods](https://www.w3schools.com/js/js_string_methods.asp)

// 11. Write a function called `isPositive` that takes a number as an argument and returns true if it's positive, and false otherwise.
//     Hint: Use a comparison operator (>).

function isPositive(isItPositive){
    if (isItPositive>0) console.log(true);
    else console.log(false);
}
isPositive(8)

//     [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)

// 12. Create a function named `getFirstChar` that takes a string as an argument and returns its first character.
//     Hint: Use square bracket notation with index 0.

function getFirstChar(word){
    console.log(word[0]);
}
getFirstChar("Lazy")

//     [Learn more about string characters](https://www.w3schools.com/js/js_strings.asp)

// 13. Write a function called `areaOfRectangle` that takes width and height as arguments and returns the area of the rectangle.
//     Hint: Multiply width by height.

function areaOfRectangle(width, height){
    let area=width*height
     console.log(area);
}
areaOfRectangle(10, 5)

//     [Learn more about arithmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)

// 14. Create a function named `remainderDivision` that takes two numbers as arguments and returns the remainder when the first is divided by the second.
//     Hint: Use the modulus operator (%).

function remainderDivision(dNumber1,dNumber2){
    let remainder=dNumber1%dNumber2
    console.log(remainder);
}
remainderDivision(9, 2)

//     [Learn more about the modulus operator](https://www.w3schools.com/js/js_arithmetic.asp)

// 15. Write a function called `logType` that takes any value as an argument and logs its type to the console.
//     Hint: Use the `typeof` operator and `console.log()`.

function logType(value){
    console.log(typeof (value))
}
logType(`rat`)

//     [Learn more about typeof](https://www.w3schools.com/js/js_typeof.asp)

// 16. Create a function named `invertBoolean` that takes a boolean value as an argument and returns its opposite.
//     Hint: Use the logical NOT operator (!).

function invertBoolean(boolean){
    return console.log(!boolean);
}
invertBoolean(true)

//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 17. Write a function called `concatenateStrings` that takes two strings as arguments and returns them concatenated.
//     Hint: Use the addition operator (+) to concatenate strings.

function concatenateStrings(string1, string2){
    let concatenate= string1+" "+string2
    console.log(concatenate);
}
concatenateStrings("Leeeeeroy", "Jenkins")

//     [Learn more about string operators](https://www.w3schools.com/js/js_operators.asp)

// 18. Create a function named `findSmaller` that takes two numbers as arguments and returns the smaller one.
//     Hint: Use an if statement to compare the numbers.

function findSmaller(sNumber, sNumber2){
    if (sNumber>sNumber2) return console.log(`${sNumber2} Is a smaller number`);
    else return console.log(`${sNumber} is a smaller number`);
}
findSmaller(5,6)

//     [Learn more about if statements](https://www.w3schools.com/js/js_if_else.asp)

// 19. Write a function called `greetWithDefault` that takes a name as an argument and returns a greeting. If no name is provided, it should use "Guest".
//     Hint: Use a default parameter value.

function greetWithDefault(personName){
if(personName===undefined || personName=== `` || personName==="") return console.log(`Greetings, Guest`);
else return console.log(`Greetings, ${personName}`);
}
greetWithDefault()

//     [Learn more about function parameters](https://www.w3schools.com/js/js_function_parameters.asp)

// 20. Create a function named `isLongString` that takes a string as an argument and returns true if its length is greater than 10, and false otherwise.
//     Hint: Use the `length` property of the string.

function isLongString(longAssWord){
    let length= longAssWord.length
    if(length>10) return console.log(true);
    else return console.log(false);
}
isLongString(`abcdefk`)
//     [Learn more about string properties](https://www.w3schools.com/js/js_string_methods.asp)

// Remember to test your functions with different inputs to ensure they work correctly!
