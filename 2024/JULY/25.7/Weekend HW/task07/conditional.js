// <!-- # JavaScript Conditional Statements Exercises

// ## Introduction
// Before starting the exercises, you might want to review the basics of JavaScript conditional statements:
// [JavaScript Conditional Statements](https://www.w3schools.com/js/js_if_else.asp)

// ## Easy Exercises (1-20)

// 1. Write an if statement that checks if a variable `age` is greater than or equal to 18. If true, set a variable `canVote` to true.
//    Hint: Use the greater than or equal to operator (>=).

let age=10
let canVote
if(age>=18) {
canVote=true
 console.log(canVote)}
 else canVote=false
console.log(canVote);

//    [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)

// 2. Create an if-else statement that checks if a variable `temperature` is less than 0. If true, set a variable `weather` to "freezing". Otherwise, set it to "not freezing".
//    Hint: Use the less than operator (<).

let temperature= 6
if (temperature<0){
    let weather = "freezing"
    console.log(weather);}
    else{
     weather="not freezing"
     console.log(weather);
    }

//    [Learn more about if-else statements](https://www.w3schools.com/js/js_if_else.asp)

// 3. Write an if-else statement that checks if a variable `score` is greater than or equal to 60. If true, set a variable `result` to "pass". Otherwise, set it to "fail".
//    Hint: Use the greater than or equal to operator (>=).

let score=94
let result;
    if(score>=60){
        result="pass"
        console.log(result);
    }
    else{
        result="fail"
        console.log(result);
    }

//    [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)

// 4. Create an if-else if-else statement that checks a variable `grade`. If it's greater than or equal to 90, set `letterGrade` to "A". If it's greater than or equal to 80, set it to "B". Otherwise, set it to "C".
//    Hint: Use multiple else if statements for different grade ranges.

let grade=85
let letterGrade
if (grade>=90){
    letterGrade="A"; 
}else if (grade>=80) {
        letterGrade="B"
}else {
    letterGrade="C"
}
console.log(letterGrade);

//    [Learn more about else if statements](https://www.w3schools.com/js/js_if_else.asp)

// 5. Write an if statement that checks if a variable `number` is even. If true, set a variable `isEven` to true.
//    Hint: Use the modulus operator (%) to check for even numbers.

let number=6
let isEven
if(number%2===0){
    isEven=true
}
else{
    isEven=false
}
console.log(isEven);

//    [Learn more about the modulus operator](https://www.w3schools.com/js/js_arithmetic.asp)

// 6. Create an if-else statement that checks if a variable `year` is divisible by 4. If true, set a variable `isLeapYear` to true. Otherwise, set it to false.
//    Hint: Use the modulus operator (%) to check divisibility.

let year=2024
let isLeapYear
if(year%4===0) isLeapYear=true
else isLeapYear=false
console.log(isLeapYear);
//    [Learn more about the modulus operator](https://www.w3schools.com/js/js_arithmetic.asp)

// 7. Write an if-else statement that checks if a variable `hour` is less than 12. If true, set a variable `period` to "AM". Otherwise, set it to "PM".
//    Hint: Use the less than operator (<).

let hour=11
let period
if(hour>12 && hour<24 && hour>!25 ) { // max amount of hours in a day is 24 made it so 25 will not define an hour since its not a valid hour
    period="PM"
}
else if(hour>!25 && hour<12) {
    period="AM"
}
else {
    console.log("Please enter a valid hour");
}
console.log(period);

//    [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)

// 8. Create an if-else if-else statement that checks a variable `dayNumber` (1-7). Set `dayName` to the corresponding day of the week.
//    Hint: Use multiple else if statements for different day numbers.

let dayNumber=5
let dayName
if (dayNumber===1) {
    dayName="Sunday"
}
else if (dayNumber===2) {
    dayName="Monday"
}
else if (dayNumber===2) {
    dayName="Monday"
}
else if (dayNumber===3) {
    dayName="Tuesday"
}
else if (dayNumber===4) {
    dayName="Wednesday"
}
else if (dayNumber===5) {
    dayName="Thursday"
}
else if (dayNumber===6) {
    dayName="Friday"
}
else {
    dayName="Saturday"
}
console.log(dayName);

//    [Learn more about else if statements](https://www.w3schools.com/js/js_if_else.asp)

// 9. Write an if statement that checks if a variable `name` is an empty string. If true, set a variable `hasName` to false.
//    Hint: Compare the string to an empty string ("").

let name=""
let hasName
if(name==="") hasName=false
else  hasName=true
console.log(hasName);

//    [Learn more about string comparison](https://www.w3schools.com/js/js_comparisons.asp)

// 10. Create an if-else statement that checks if a variable `amount` is greater than 1000. If true, set a variable `shipping` to 0. Otherwise, set it to 5.
//     Hint: Use the greater than operator (>).

let amount = 50
let shipping
if(amount>1000) shipping=0
else shipping=5
console.log(shipping);

//     [Learn more about comparison operators](https://www.w3schools.com/js/js_comparisons.asp)

// 11. Write an if-else statement that checks if a variable `password` is equal to "secret123". If true, set a variable `isLoggedIn` to true. Otherwise, set it to false.
//     Hint: Use the strict equality operator (===).
let password="secret123"
let isLoggedIn
if (password==="secret123") isLoggedIn=true
else isLoggedIn=false
console.log(isLoggedIn);
//     [Learn more about equality operators](https://www.w3schools.com/js/js_comparisons.asp)

// 12. Create an if-else if-else statement that checks a variable `month` (1-12). Set `season` to "Winter", "Spring", "Summer", or "Fall" based on the month.
//     Hint: Group months into seasons using else if statements.
let month= 10
let season
if (month>=12 || month===1 || month===2 ) season="Winter"
else if (month>=3 && month<5) season="Spring"
else if (month>=5 && month<10) season="Summer"
else if (month>=10 && month<12) season="Fall"
else season="Invalid season"
console.log(season);
//     [Learn more about else if statements](https://www.w3schools.com/js/js_if_else.asp)

// 13. Write an if statement that checks if a variable `income` is greater than 50000 and a variable `creditScore` is greater than 700. If both are true, set a variable `loanApproved` to true.
//     Hint: Use the AND operator (&&) to combine conditions.

let income=85000
let creditScore=750
let loanApproved
if(income>50000 && creditScore>700) loanApproved=true
else loanApproved=false
console.log(loanApproved);

//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 14. Create an if-else statement that checks if a variable `age` is less than 18 or greater than 65. If true, set a variable `discount` to 0.2. Otherwise, set it to 0.
//     Hint: Use the OR operator (||) to combine conditions.

let age2=18
let discount
if(age2<18 || age2>65) discount=0.2
else discount=0
console.log(`Your discount is ${discount}`);

//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)


// 15. Write an if-else statement that checks if a variable `number` is between 1 and 10 (inclusive). If true, set a variable `inRange` to true. Otherwise, set it to false.
//     Hint: Use the AND operator (&&) to combine two comparisons.

let inRange
let number2=7
if(number2>=1 && number2<=10) inRange=true
else inRange=false
console.log(inRange);

//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 16. Create a switch statement that checks a variable `dayNumber` (1-7) and sets `dayName` to the corresponding day of the week.
//     Hint: Use a switch statement with cases for each day number.
let dayNumber2=6
let dayName2
switch (dayNumber2) {
    case 1:dayName2 = "Sunday";break;
    case 2:dayName2 = "Monday";break;
    case 3:dayName2 = "Tuesday";break;
    case 4:dayName2 = "Wednesday"; break;
    case 5:dayName2 = "Thursday"; break;
    case 6:dayName2 = "Friday"; break;
    case 7:dayName2 = "Saturday";
  }
  console.log(dayName2);
//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)

// 17. Write a switch statement that checks a variable `grade` (A, B, C, D, F) and sets `description` to a corresponding message (e.g., "Excellent", "Good", etc.).
//     Hint: Use a switch statement with cases for each grade letter.

let grade2="F"
let description
switch(grade2){
    case "A":description="Excellent"; break;
    case "B":description="Good"; break;
    case "C":description="Almost"; break;
    case "D":description="Ok"; break;
    case "F":description="Come see me after class";
}
console.log(description);

//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)

// 18. Create an if-else statement that checks if a variable `number` is positive, negative, or zero. Set a variable `sign` accordingly.
//     Hint: Use nested if-else statements or else if statements.

let signNumber = 12.5
let sign
if(signNumber<0) sign=`Negative`
else if (signNumber>0) sign="Positive"
else sign="Zero"
console.log(sign);

//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 19. Write an if-else statement that checks if a variable `year` is a century year (ending with 00) and divisible by 400. If true, set `isCenturyLeapYear` to true. Otherwise, set it to false.
//     Hint: Use the modulus operator (%) and the AND operator (&&).

let year2=2000
let isCenturyLeapYear
if(year2%100===0 && year2%400===0) isCenturyLeapYear=true
else isCenturyLeapYear=false
console.log(isCenturyLeapYear);
//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 20. Create a switch statement that checks a variable `month` (1-12) and sets `daysInMonth` to the correct number of days for that month (assuming a non-leap year).
//     Hint: Use a switch statement with cases for each month number.
let month2=5
let daysInMonth
switch(month2){
case 1: daysInMonth="January has 31 days"; break;
case 2: daysInMonth="February has 28 days"; break;
case 3: daysInMonth="March has 31 days"; break;
case 4: daysInMonth="April has 30 days"; break;
case 5: daysInMonth="May has 31 days"; break;
case 6: daysInMonth="June has 30 days"; break;
case 7: daysInMonth="July has 31 days"; break;
case 8: daysInMonth="August has 31 days"; break;
case 9: daysInMonth="September has 30 days"; break;
case 10: daysInMonth="October has 31 days"; break;
case 11: daysInMonth="November has 30 days"; break;
case 12: daysInMonth="December has 31 days"; break;
default: daysInMonth="Invalid Month";
}
console.log(daysInMonth);

//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)

// ## More Difficult Exercises (21-30)

// 21. Write nested if-else statements that check if a variable `number` is positive, negative, or zero, and then check if it's even or odd. Set variables `sign` and `parity` accordingly.
//     Hint: Use nested if-else statements and the modulus operator (%).

let numberCheck=0
let sign2
let parity
if (numberCheck>0) sign2="positive"
else if(numberCheck<0) sign2="negative"
else sign2="zero"

if(sign2!== "zero"){
  if(numberCheck%2===0) parity="even"
  else parity="odd"
}
else parity="Zero is not capable of having a parity"

console.log(`The number is ${sign2} and is an ${parity} number`);



//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 22. Create nested if-else statements that check a variable `score` and a variable `attendance`. Set `grade` based on the score, but lower it by one level if attendance is less than 80%.
//     Hint: Use nested if-else statements with multiple conditions.

let score2=100
let grade3=score2
let attendance="79%"
if(score2=== grade3){
    if(attendance<"80%"){ grade3=score2--;}
    else score2=grade3
    }
    console.log(`your score is ${score2}`);


//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 23. Write an if-else statement that checks if a year is a leap year. A year is a leap year if it's divisible by 4, except for century years, which must be divisible by 400 to be a leap year.
//     Hint: Use multiple conditions with logical operators (&&, ||).

let year3=1900
let isLeapYear2
if(year3%4===0){
    if(year3%100===0){
        if(year3%400===0) isLeapYear2=true
        else isLeapYear2=false
    }
    else isLeapYear2=true
}
else 
isLeapYear2=false
console.log(isLeapYear2);

//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 24. Create a nested if-else statement that categorizes a person based on their age and employment status. Use variables `age` and `isEmployed` to determine if someone is a "Student", "Employed Adult", "Unemployed Adult", or "Retiree".
//     Hint: Use nested if-else statements with multiple conditions.

let howOld=19
let employment=true
let category
if(howOld<18)
    category="student"
    else{
        if(howOld>=67)
            category="Retiree"
        else{
            if(employment===true)
                category="Employed Adult"
            else category="Unemployed Adult"
        }
    }
console.log(`They are ${howOld} years old and are an ${category}`);

//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 25. Write a switch statement with fall-through cases that categorizes a variable `month` into seasons, where some months can belong to multiple seasons.
//     Hint: Use fall-through cases in a switch statement.

let months=5
switch(months){
    case 10:
    case 11:monthName="Fall" ; break;
    case 12:
    case 1:
    case 2:monthName="Winter"; break;
    case 3: 
    case 4:monthName="Spring"; break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9: monthName="Summer"; break;
}
console.log(monthName);

//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)

// 26. Create an if-else statement that determines the quadrant (1, 2, 3, or 4) of a point on a coordinate plane, given variables `x` and `y` for the coordinates.
//     Hint: Use nested if-else statements to check the signs of x and y.

let x = 5;  // Example x-coordinate
let y = -3; // Example y-coordinate
let quadrant;

if (x > 0 && y > 0) quadrant = 1; 
else if (x < 0 && y > 0) quadrant = 2;
else if (x < 0 && y < 0) quadrant = 3;
else if (x > 0 && y < 0) quadrant = 4;
else if (x === 0 && y !== 0) quadrant = "On the Y-axis";
else if (x !== 0 && y === 0) quadrant = "On the X-axis";
else quadrant = "At the origin";

console.log(`The point (${x}, ${y}) is in quadrant: ${quadrant}`);


//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 27. Write nested if-else statements that determine the state of water (solid, liquid, or gas) based on temperature and pressure variables.
//     Hint: Use nested if-else statements with multiple conditions.

let temperature2 = 25; 
let pressure = 1;     
let state;

if (pressure > 1) {
    if (temperature2 < 0) {
        state = "Solid (Ice)";
    } else if (temperature2 >= 0 && temperature2 <= 100) {
        state = "Liquid";
    } else {
        state = "Gas (Vapor)";
    }
} else {
    if (temperature2 < 0) {
        state = "Solid (Ice)";
    } else if (temperature2 >= 0 && temperature2 < 100) {
        state = "Liquid";
    } else {
        state = "Gas (Vapor)";
    }
}

console.log(`At ${temperature2}°C and ${pressure} atm, water is in the ${state} state.`);


//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// 28. Create a switch statement that calculates the number of days in a month, considering leap years. Use variables `month` and `isLeapYear`.
//     Hint: Use a switch statement with a special case for February.

let month4 = 2;        
let isLeapYea = true;  
let days;

switch (month4) {
    case 1:  
    case 3: 
    case 5:  
    case 7:  
    case 8:  
    case 10: 
    case 12: 
        days = 31;
        break;
    case 4: 
    case 6:  
    case 9:  
    case 11: 
        days = 30;
        break;
    case 2:  
        if (isLeapYea) {
            days = 29;
        } else {
            days = 28;
        }
        break;
    default:
        daysInMonth = "Invalid month"; 
}

console.log(`Month ${month4} has ${days} days.`);


//     [Learn more about switch statements](https://www.w3schools.com/js/js_switch.asp)

// 29. Write an if-else statement that determines if three numbers can form a triangle. Use variables `a`, `b`, and `c` for the side lengths.
//     Hint: Check if the sum of any two sides is greater than the third side.

let a = 3; 
let b = 4; 
let c = 5; 

if (a + b > c && a + c > b && b + c > a) {
    console.log("The sides can form a triangle.");
} else {
    console.log("The sides cannot form a triangle.");
}


//     [Learn more about logical operators](https://www.w3schools.com/js/js_comparisons.asp)

// 30. Create nested if-else statements that calculate the roots of a quadratic equation (ax^2 + bx + c = 0) based on the discriminant. Use variables `a`, `b`, and `c` for the coefficients.
//     Hint: Use nested if-else statements to handle different cases (two real roots, one real root, or no real roots).

let a2 = 1;  // Example coefficient for x^2
let b2 = -3; // Example coefficient for x
let c2 = 2;  // Example constant term

let discriminant = b2 * b2 - 4 * a2 * c2;

if (discriminant > 0) {
    let root1, root2;
    let temp = b2 * b2 - 4 * a2 * c2;  // Discriminant
    let divisor = 2 * a;

    console.log(`The equation has two distinct real roots. Roots calculation would require square root computation.`);
} else if (discriminant === 0) {
    // One real root (repeated root)
    let root = -b2 / (2 * a2);
    console.log(`The equation has one real root: ${root}`);
} else {
    // No real roots (complex roots)
    let realPart = -b2 / (2 * a2);
    // Imaginary part calculation without square root
    let imaginaryPart = (b2 * b2 - 4 * a2 * c2);  // This would be a placeholder
    console.log(`The equation has two complex roots: ${realPart} + i*sqrt(${imaginaryPart}) and ${realPart} - i*sqrt(${imaginaryPart})`);
}


//     [Learn more about nested if statements](https://www.w3schools.com/js/js_if_else.asp)

// ## Ternary Operator Exercises (31-32)

// 31. Use the ternary operator to check if a variable `number` is even or odd. Set a variable `parity` to "even" or "odd" accordingly.
//     Hint: Use the modulus operator (%) with the ternary operator.

let numberOddOr = 7; // Example number
let parityFor = (numberOddOr % 2 === 0) ? "even" : "odd";

console.log(`The number ${numberOddOr} is ${parityFor}.`);

//     [Learn more about the ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

// 32. Use the ternary operator to check if a variable `age` is greater than or equal to 18. Set a variable `canVote` to true or false accordingly.
//     Hint: Use a comparison with the ternary operator.

let ageFull = 20; 
let canHeVote = (ageFull >= 18) ? true : false;

console.log(`Can vote: ${canHeVote}`);


//     [Learn more about the ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

// Remember to test your code with different input values to ensure your conditional statements work correctly! -->
