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

