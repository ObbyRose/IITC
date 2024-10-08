// # JavaScript Data Types Quiz

// ## Introduction
// Before starting the quiz, watch this video for an overview of JavaScript data types:
// [JavaScript Data Types](https://www.youtube.com/watch?v=UmSpfdxu3ro)

// ## Questions

// 1. What is the data type of x = 5?
//    Hint: Think about the basic numeric type in JavaScript.
//
// A: the data type would be number (or value)
//
//    [W3Schools: JavaScript Numbers](https://www.w3schools.com/js/js_numbers.asp)

// 2. How do you declare a string variable in JavaScript?
//    Hint: Consider the different ways to enclose text in JavaScript.

// let text = "John Doe";

//    [W3Schools: JavaScript Strings](https://www.w3schools.com/js/js_strings.asp)

// 3. What's the difference between null and undefined?
//    Hint: One is explicitly set, the other is a default state.

// A: One is explicitly set, the other is a default state.

//    [W3Schools: JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)

// 4. How can you check the type of a variable in JavaScript?
//    Hint: There's an operator specifically for this purpose.

// typeof ("John"+"Doe") // Returns string
// typeof 3.14           // Returns number

//    [W3Schools: JavaScript typeof](https://www.w3schools.com/js/js_typeof.asp)

// 5. What's the data type of the result of 5 / 2?
//    Hint: Consider how JavaScript handles division results.

// typeof 5/2 // returns a number

//    [W3Schools: JavaScript Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)

// 6. What's the data type of true?
//    Hint: This is one of the two possible values for this type.

// the data type is boolean which will only be true of false

//    [W3Schools: JavaScript Booleans](https://www.w3schools.com/js/js_booleans.asp)

// 7. How do you declare an object in JavaScript?
//    Hint: Think about curly braces and key-value pairs.

// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car);

//    [W3Schools: JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

// 8. What's the data type of NaN?
//    Hint: Despite its name, it's considered a specific type.

// A:stands for "Not-a-Number". It is a special value of the number data type


//    [W3Schools: JavaScript NaN](https://www.w3schools.com/jsref/jsref_isnan.asp)

// 9. What's the difference between == and ===?
//    Hint: One checks value, the other checks value and type.

// A:One checks value, the other checks THE absolute value and type. 

//    [W3Schools: JavaScript Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp)

// 10. How do you convert a string to a number?
//     Hint: There are multiple methods, including a global function.

//   Number("99 88")

//     [W3Schools: JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)

// 11. What's the data type of the result of "5" + 3?
//     Hint: Consider how JavaScript handles string concatenation.

// the data type would be string+number since it JS doesn't see it as a mathematical addition 

//     [W3Schools: JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)

// 12. How can you check if a variable is of a specific type?
//     Hint: You can use a combination of typeof and comparison.

// typeof (10) // data type of number

//     [W3Schools: JavaScript typeof](https://www.w3schools.com/js/js_typeof.asp)

// 13. How do you create a multi-line string in JavaScript?
//     Hint: There's a specific type of quotation mark that allows this easily.

// let car {type:`Jaguar`, model:`F-Type`, color:`MidnightBlue`}
// console.log(car)

//     [W3Schools: JavaScript Template Literals](https://www.w3schools.com/js/js_string_templates.asp)

// 14. What's the difference between single quotes, double quotes, and backticks for strings?
//     Hint: Two are essentially the same, but one offers additional features.

// Two are essentially the same, but `` offers additional features.

//     [W3Schools: JavaScript Strings](https://www.w3schools.com/js/js_strings.asp)

// 15. How do you convert a number to a string?
//     Hint: There's a method that all numbers have for this purpose.

//     toString(5) // returns "5"

//     [W3Schools: JavaScript Number Methods](https://www.w3schools.com/js/js_number_methods.asp)

// 16. What's the result of typeof null?
//     Hint: This is a longstanding quirk in JavaScript.

//In JavaScript, null is a primitive value. However, typeof returns "object". This is a well-known bug in JavaScript and has historical reasons.

//     [W3Schools: JavaScript typeof](https://www.w3schools.com/js/js_typeof.asp)

// 17. How do you declare a constant variable in JavaScript?
//     Hint: There's a specific keyword introduced in ES6 for this.
// 

// const thisIsHow="this is how"

//     [W3Schools: JavaScript let and const](https://www.w3schools.com/js/js_let.asp)

// 18. What happens when you add a string and a number? How can you handle this?
//     Hint: JavaScript has implicit type conversion rules.

// When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

//     [W3Schools: JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)

// 19. What's the data type of the result of 3 > 2?
//     Hint: Comparison operations return a specific type.

// the data type that would return is boolean since that way which check it is by true or false

//     [W3Schools: JavaScript Comparisons](https://www.w3schools.com/js/js_comparisons.asp)

// 20. How do you escape special characters in a string?
//     Hint: There's a specific character used for escaping in many programming languages.

// You can use it by using \ or ``

//     [W3Schools: JavaScript Strings](https://www.w3schools.com/js/js_strings.asp)

// 21. What's the difference between var, let, and const?
//     Hint: These have different scoping rules and reassignment capabilities.

// These have different scoping rules and reassignment capabilities. 
// var is simply replaced by let which defines a variable or a value that can be changed unlike const which cannot be changed

//     [W3Schools: JavaScript let and const](https://www.w3schools.com/js/js_let.asp)

// 22. How do you check if a variable is undefined?
//     Hint: You can use either the typeof operator or a direct comparison.
//       let x;
//       if (x === undefined) {
//       text = "x is undefined";
//        } else {
//          text = "x is defined";
//       }
//       console.log(x)

//     [W3Schools: JavaScript undefined](https://www.w3schools.com/jsref/jsref_undefined.asp)

// 23. What's the result of 10 + "5"?
//     Hint: Consider how JavaScript handles operations between different types.
// // 
// let a=10+"5"
// console.log(a); // it will print 105 as a string

//     [W3Schools: JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)

// 24. How do you create a boolean variable?
//     Hint: You can either use the literal values or expressions that evaluate to true or false.

// A: You can either use the literal values or expressions that evaluate to true or false.

//     [W3Schools: JavaScript Booleans](https://www.w3schools.com/js/js_booleans.asp)

// 25. What's the difference between primitive data types and objects in JavaScript?
//     Hint: Consider how these types are stored and passed in JavaScript.

// Storage:

// Primitive types are stored directly in memory locations known as the stack.
// Objects are stored as references in memory, with the actual object data stored on the heap.
// Immutability:

// Primitives are immutable; their values cannot be changed once created.
// Objects are mutable; their properties can be modified after creation.
// Passing Behavior:

// Primitives are passed by value.
// Objects are passed by reference.

//     [W3Schools: JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)
