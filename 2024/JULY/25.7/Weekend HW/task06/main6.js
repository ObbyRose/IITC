// <!-- # JavaScript Logical Operators Quiz

// ## Introduction
// Before starting the quiz, watch this video for an overview of JavaScript logical operators:
// [JavaScript Logical Operators](https://www.youtube.com/watch?v=ovWYhDVQiR8)

// ## Questions

// 1. What are the three main logical operators in JavaScript?
//    Hint: Think about AND, OR, and NOT.

// A: The logical operators are || ! and &&

//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 2. What does the AND (&&) operator do?
//    Hint: It returns true only if both operands are true.

// A: It returns true only if both operands are true.

//    [Learn more about AND operator](https://www.w3schools.com/js/js_comparisons.asp)

// 3. What is the result of true && true?
//    Hint: AND requires both operands to be true.
//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 4. What is the result of true && false?
//    Hint: AND requires both operands to be true.
//
// an error would occur since a statement cannot be both true and false at the same time
//
//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 5. What does the OR (||) operator do?
//    Hint: It returns true if at least one operand is true.

// It returns true if at least one operand is true.

//    [Learn more about OR operator](https://www.w3schools.com/js/js_comparisons.asp)

// 6. What is the result of false || true?
//    Hint: OR requires only one operand to be true.

// A: One of the statements will occur either will be summed as true or false 

//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 7. What is the result of false || false?
//    Hint: OR requires at least one operand to be true.

// A: both operands are false, and since neither operand is true, the result is false.

//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 8. What does the NOT (!) operator do?
//    Hint: It inverts the boolean value of its operand.

// A: It inverts the boolean value of its operand.

//    [Learn more about NOT operator](https://www.w3schools.com/js/js_comparisons.asp)

// 9. What is the result of !true?
//    Hint: NOT inverts the boolean value.

// A: The ! operator represents logical NOT. It inverts the boolean value of its operand.
//For !true, since the operand is true, the NOT operator inverts it to false

//    [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 10. What is the result of !false?

//The ! operator represents logical NOT. It inverts the boolean value of its operand.
//For !false, since the operand is false, the NOT operator inverts it to true


//     Hint: NOT inverts the boolean value.
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 11. What is the result of true && true && false?
//     Hint: AND requires all operands to be true.

// A:The `&&` operator represents the logical AND operation. It evaluates to `true` only if all of its operands are `true`. If any operand is `false`, the result is `false`.

// For `true && true && false`:
// - The first `true` and the second `true` are both `true`.
// - But the third operand is `false`.
// Since one of the operands is `false`, the result of the entire expression `true && true && false` is `false`.

//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 12. What is the result of false || false || true?
//     Hint: OR requires at least one operand to be true.

// The `||` operator represents the logical OR operation. It evaluates to `true` if at least one of its operands is `true`. If all operands are `false`, then the result is `false`.
// For the expression `false || false || true`:
// - The first `false` and the second `false` are both `false`.
// - The third operand is `true`.
// Since at least one operand (`true`) is `true`, the result of the expression is `true`.

//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 13. What is the order of precedence for logical operators?
//     Hint: NOT has the highest precedence, followed by AND, then OR.

// a: NOT has the highest precedence, followed by AND, then OR.

//     [Learn more about operator precedence](https://www.w3schools.com/js/js_precedence.asp)

// 14. What is short-circuit evaluation in logical operations?
//     Hint: It's when the second operand is not evaluated if the first operand is sufficient to determine the result.

// A: It's when the second operand is not evaluated if the first operand is sufficient to determine the result.

//     [Learn more about short-circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)

// 15. In the expression a && b, when is b not evaluated?
//     Hint: Think about when the result can be determined by a alone.

// If a is false, then b is not evaluated.
// If a is true, then b is evaluated, and the result depends on the value of b.

//     [Learn more about AND operator](https://www.w3schools.com/js/js_comparisons.asp)

// 16. In the expression a || b, when is b not evaluated?
//     Hint: Think about when the result can be determined by a alone.

// If a is true, then b is not evaluated.
// If a is false, then b is evaluated, and the result depends on the value of b.

//     [Learn more about OR operator](https://www.w3schools.com/js/js_comparisons.asp)

// 17. What is the result of 5 > 3 && 2 < 4?
//     Hint: Evaluate each comparison first, then apply the AND operator.
let a = 5;
let b = 3;
let c = 2;
let d = 4;

if (a > b && c < d) {
    console.log('Both conditions are true: a > b and c < d');
} else {
    console.log('At least one condition is false');
}

// the answer would be that both conditions are true

//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 18. What is the result of 5 > 7 || 3 < 2?
//     Hint: Evaluate each comparison first, then apply the OR operator.
let num1 = 5;
let num2 = 7;
let num3 = 3;
let num4 = 2;
let result = (num1 > num2 || num3 < num4);
console.log('Result of (num1 > num2 || num3 < num4):', result);
// the result comes out as false

//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 19. What is the result of !(5 > 3)?
//     Hint: Evaluate the comparison first, then apply the NOT operator.

let comparison = 5 > 3;

let result1 = !comparison;

console.log('Result of !(5 > 3):', result1); // the result would be false


//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 20. How can you use parentheses to change the order of evaluation in logical expressions?
//     Hint: Expressions within parentheses are evaluated first.

// A: Expressions in parentheses are computed before the rest of the expression
//Function are executed before the result is used in the rest of the expression

//     [Learn more about operator precedence](https://www.w3schools.com/js/js_precedence.asp)

// Remember to test your knowledge by trying these operations in a JavaScript console! -->
