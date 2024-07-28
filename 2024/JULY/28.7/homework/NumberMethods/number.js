// # JavaScript Number Methods Exercises

// 1. Use `toFixed()` to format the number 3.14159 to 2 decimal places.
//    Hint: `number.toFixed(2)` will round to 2 decimal places.
let number=Math.PI
console.log(number.toFixed(2));

//    [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

// 2. Convert the number 42 to a string using `toString()`.
//    Hint: `number.toString()` converts a number to a string.

let num=42
console.log(num.toString());

//    [Learn more about toString()](https://www.w3schools.com/jsref/jsref_tostring_number.asp)

// 3. Use `toPrecision()` to format the number 123.456789 to 5 significant digits.
//    Hint: `number.toPrecision(5)` will format to 5 significant digits.

let fNum=123.456789
console.log(fNum.toPrecision(5));

//    [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)

// 4. Parse the string "10" into an integer using `parseInt()`.
//    Hint: `parseInt(string)` converts a string to an integer.

console.log(parseInt(`10`));

//    [Learn more about parseInt()](https://www.w3schools.com/jsref/jsref_parseint.asp)

// 5. Parse the string "3.14" into a float using `parseFloat()`.
//    Hint: `parseFloat(string)` converts a string to a floating-point number.

console.log(parseFloat(`3.14`));

//    [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)

// 6. Check if the value "Hello" is NaN using `isNaN()`.
//    Hint: `isNaN(value)` returns true if the value is Not-a-Number.

console.log(isNaN(`Hello`));

//    [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)

// 7. Determine if 100 is a finite number using `isFinite()`.
//    Hint: `isFinite(value)` returns true if the value is a finite number.

console.log(isFinite(100));

//    [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)

// 8. Convert the number 255 to a hexadecimal string using `toString()`.
//    Hint: `number.toString(16)` converts to hexadecimal.

let hNum=255
console.log(hNum.toString(16));

//    [Learn more about toString() with radix](https://www.w3schools.com/jsref/jsref_tostring_number.asp)

// 9. Use `toFixed()` to format the number 0.000001 to 7 decimal places.
//    Hint: `number.toFixed(7)` will show 7 decimal places.

let forNum=0.000001
console.log(forNum.toFixed(7));

//    [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

// 10. Convert the binary string "1010" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 2)` parses a binary string.

let string =`1010`
console.log(parseInt(string, 2));

//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)

// 11. Use `toPrecision()` to format the number 0.000123456 to 3 significant digits.
//     Hint: `number.toPrecision(3)` will format to 3 significant digits.

let pNum=0.000123456
console.log(pNum.toPrecision(3));

//     [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)

// 12. Check if the result of 0/0 is NaN using `isNaN()`.
//     Hint: Division by zero may result in NaN.

console.log(isNaN(0/0));

//     [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)

// 13. Convert the number 1000000 to exponential notation with 2 decimal places using `toExponential()`.
//     Hint: `number.toExponential(2)` formats to exponential notation.

let eNum=1000000
console.log(eNum.toExponential(2));

//     [Learn more about toExponential()](https://www.w3schools.com/jsref/jsref_toexponential.asp)

// 14. Parse the string "3.14some" into a float using `parseFloat()`.
//     Hint: `parseFloat()` parses until it encounters a non-numeric character.

let piStr=`3.14some`
console.log(parseFloat(piStr));

//     [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)

// 15. Use `toString()` to convert the number 16 to its binary representation.
//     Hint: `number.toString(2)` converts to binary.

let bNum=16
console.log(bNum.toString(2));

//     [Learn more about toString() with radix](https://www.w3schools.com/jsref/jsref_tostring_number.asp)

// 16. Check if Infinity is a finite number using `isFinite()`.
//     Hint: Infinity is not considered a finite number.

console.log(isFinite(Infinity));

//     [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)

// 17. Use `toFixed()` to format the number 1.23e-5 to 8 decimal places.
//     Hint: `toFixed()` works with very small numbers too.

let dNum=1.23e-5
console.log(dNum.toFixed(8));

//     [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

// 18. Convert the octal string "777" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 8)` parses an octal string.

let oStr=`777`
console.log(parseInt(oStr, 8));

//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)

// 19. Use `toPrecision()` to format the number 123456.789 to 4 significant digits.
//     Hint: This will result in exponential notation.

let preNum=123456.789
console.log(pNum.toPrecision(4));

//     [Learn more about toPrecision()](https://www.w3schools.com/jsref/jsref_toprecision.asp)

// 20. Check if the string "NaN" is NaN using `isNaN()`.
//     Hint: The string "NaN" is not the same as the value NaN.

let nanStr=`NaN`
console.log(isNaN(nanStr));

//     [Learn more about isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp)

// 21. Convert the number -10 to a string using `toString()`.
//     Hint: `toString()` works with negative numbers too.

let mNum=-10
console.log(mNum.toString());

//     [Learn more about toString()](https://www.w3schools.com/jsref/jsref_tostring_number.asp)

// 22. Use `parseFloat()` to parse the string "1.2e-3" into a number.
//     Hint: `parseFloat()` can handle scientific notation.

let pStr=`1.2e-3`
console.log(parseFloat(pStr));

//     [Learn more about parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)

// 23. Format the number 1234.5678 to 2 decimal places using `toFixed()`.
//     Hint: This will round the number.

let oNum= 1234.5678
console.log(oNum.toFixed(2));

//     [Learn more about toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

// 24. Use `isFinite()` to check if the result of 1/0 is finite.
//     Hint: Division by zero results in Infinity.

console.log(isFinite(1/0));

//     [Learn more about isFinite()](https://www.w3schools.com/jsref/jsref_isfinite.asp)

// 25. Convert the hexadecimal string "FF" to a decimal number using `parseInt()`.
//     Hint: `parseInt(string, 16)` parses a hexadecimal string.

let hexStr=`FF`
console.log(parseInt(hexStr,16));

//     [Learn more about parseInt() with radix](https://www.w3schools.com/jsref/jsref_parseint.asp)

// Remember to test your solutions and experiment with different inputs!

