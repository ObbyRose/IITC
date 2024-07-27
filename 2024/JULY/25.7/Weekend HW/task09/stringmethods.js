// # JavaScript String Methods Exercises

// ## Introduction
// Before starting the exercises, review the basics of JavaScript string methods:
// [JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)

// ## String Method Exercises (1-20)

// 1. Write a function that takes a string and returns its length.
//    Hint: Use the `length` property.

function stringLength(word){
return console.log(word.length);
}
stringLength("TELL ME WHY? AIN'T NOTHING BUT A HEART ACHE")

//    [Learn more about string length](https://www.w3schools.com/jsref/jsref_length_string.asp)

// 2. Create a function that converts a string to uppercase.
//    Hint: Use the `toUpperCase()` method.

function toUpper(string){
    return console.log(string.toUpperCase())
}
toUpper("i never wanna hear you say")
//    [Learn more about toUpperCase()](https://www.w3schools.com/jsref/jsref_touppercase.asp)

// 3. Write a function that converts a string to lowercase.
//    Hint: Use the `toLowerCase()` method.

function toLower(stringL){
    return console.log(stringL.toLowerCase());
}
toLower("I WANT IT MY WAY")

//    [Learn more about toLowerCase()](https://www.w3schools.com/jsref/jsref_tolowercase.asp)

// 4. Create a function that returns the character at a specified index in a string.
//    Hint: Use the `charAt()` method.

function returnChar(charWord){
    let letter=charWord.charAt(5)
    return console.log(letter);
}
returnChar("Amazing")

//    [Learn more about charAt()](https://www.w3schools.com/jsref/jsref_charat.asp)

// 5. Write a function that extracts a portion of a string between two specified indices.
//    Hint: Use the `substring()` method.

function portion(extracts){
    let sub=extracts.substring(2, 5)
    return console.log(sub);
}
portion("Terrific")

//    [Learn more about substring()](https://www.w3schools.com/jsref/jsref_substring.asp)

// 6. Create a function that replaces all occurrences of a specified value in a string.
//    Hint: Use the `replace()` method with a regular expression.

function replaces(value){
    let replaceValue=value.replace(value, "Sitting")
    return console.log(replaceValue);
}
replaces("character")

//    [Learn more about replace()](https://www.w3schools.com/jsref/jsref_replace.asp)

// 7. Write a function that removes whitespace from both ends of a string.
//    Hint: Use the `trim()` method.

function removeWhiteSpace(endsOfString){
    let result=endsOfString.trim()
    return console.log(result);
}
removeWhiteSpace("        I hate Trains             ")

//    [Learn more about trim()](https://www.w3schools.com/jsref/jsref_trim_string.asp)

// 8. Create a function that checks if a string starts with a specified value.
//    Hint: Use the `startsWith()` method.

// Function to check if a string starts with a specified value
function startsWith(str, value) {
    return console.log(str.startsWith(value));
}
startsWith("Hello, World!", "Hello"); 
startsWith("Hello, World!", "World"); 

//    [Learn more about startsWith()](https://www.w3schools.com/jsref/jsref_startswith.asp)

// 9. Write a function that checks if a string ends with a specified value.
//    Hint: Use the `endsWith()` method.

function endWith(endStr, value2) {
    return console.log(endStr.endsWith(value2));
}
endWith("Hello, World!", "Hello"); 
endWith("Hello, World!", "World!"); 

//    [Learn more about endsWith()](https://www.w3schools.com/jsref/jsref_endswith.asp)

// 10. Create a function that searches a string for a specified value and returns the position.
//     Hint: Use the `indexOf()` method.

function findPosition(pStr,pValue) {
    return console.log (pStr.indexOf(pValue));
}

findPosition("Hello, World!", "World");
findPosition("Hello, World!", "Hello");
findPosition("Hello, World!", "JavaScript");


//     [Learn more about indexOf()](https://www.w3schools.com/jsref/jsref_indexof.asp)

// 11. Write a function that splits a string into an array of substrings.
//     Hint: Use the `split()` method.

function splits(sStr){
    let splitted=sStr.split(``)
return console.log(splitted);
}
splits("Hi Java how are you today?")

//     [Learn more about split()](https://www.w3schools.com/jsref/jsref_split.asp)

// 12. Create a function that repeats a string a specified number of times.
//     Hint: Use the `repeat()` method.

function repeats(rStr){
return console.log(rStr.repeat(4));
}
repeats("Texas Toast ")

//     [Learn more about repeat()](https://www.w3schools.com/jsref/jsref_repeat.asp)

// 13. Write a function that concatenates two strings.
//     Hint: Use the concatenation operator (+) or the `concat()` method.

function concatAll(cStr,cStr2){
    return console.log(cStr.concat(cStr2));
}
concatAll("Rainbows", " Sunshine")

//     [Learn more about concat()](https://www.w3schools.com/jsref/jsref_concat_string.asp)

// 14. Create a function that pads a string with a specified character to a certain length.
//     Hint: Use the `padStart()` or `padEnd()` method.

function pads(padStr, theLength ,char=``){
    return console.log(padStr.padStart(theLength,char));
}
pads("when?",8 , `*`)

//     [Learn more about padStart()](https://www.w3schools.com/jsref/jsref_padstart.asp)

// 15. Write a function that extracts the first n characters from a string.
//     Hint: Use the `slice()` method.

function extractingN(nWord, n){
    return console.log(nWord.slice(0,n));
}
extractingN("not what you thought it was ah?", 12)

//     [Learn more about slice()](https://www.w3schools.com/jsref/jsref_slice_string.asp)

// 16. Create a function that replaces the first occurrence of a specified value in a string.
//     Hint: Use the `replace()` method without a regular expression.

function replaceFirstOccurrence(rStr, searchValue, replaceValue) {
    return console.log (rStr.replace(searchValue, replaceValue));
}
replaceFirstOccurrence("Hello, World! Hello again!", "Hello", "Hi"); 

//     [Learn more about replace()](https://www.w3schools.com/jsref/jsref_replace.asp)

// 17. Write a function that checks if a string includes a specified value.
//     Hint: Use the `includes()` method.

function includesValue(iStr, iValue) {
    return console.log(iStr.includes(iValue));
}

includesValue("Hello, World!", "World"); 


//     [Learn more about includes()](https://www.w3schools.com/jsref/jsref_includes.asp)

// 18. Create a function that returns the last character of a string.
//     Hint: Use the `length` property and square bracket notation.

function getLastCharacter(gStr) {
    return console.log(gStr[gStr.length - 1]);
}

getLastCharacter("JavaScript"); 


//     [Learn more about string characters](https://www.w3schools.com/js/js_strings.asp)

// 19. Write a function that checks if a string is empty.
//     Hint: Check if the `length` of the string is 0.

function isEmpty(EmptyStr) {
    return console.log(EmptyStr.length === 0);
}
isEmpty(""); 


//     [Learn more about string length](https://www.w3schools.com/jsref/jsref_length_string.asp)

// 20. Create a function that returns a portion of a string from a specified index to the end.
//     Hint: Use the `slice()` method with only one argument.

function getSubstringFromIndex(IndexStr, index) {
    return console.log(IndexStr.slice(index));
}
getSubstringFromIndex("Hello, World!", 7); 


//     [Learn more about slice()](https://www.w3schools.com/jsref/jsref_slice_string.asp)
// Remember to test your functions with different inputs to ensure they work correctly!
