//TASK 01---------------------------------------------------------
// let firstName = "Tal"
// let lastName = "Maman"
// let fullName= firstName+ " " + lastName
// let age = 22 
// const isStudent= true
// const isAdult=age>18
// const isJohn=false
// if(fullName && isStudent && isAdult)
// console.log(`${fullName} is an adult student`)

// else{
//     console.log(fullName, "is not a student")
// }

// if(isJohn===true){
// console.log("His name is John")
// }
// else{
//     console.log("His name is not John")
// }


//TASK 02---------------------------------------------------------
// let firstName="Tal"
// let lastName="Maman"
// function greet (firstName, lastName){
// fullName=`${firstName} ${lastName}`
// console.log(`Hi ${fullName.toUpperCase()} Welcome to the IITC College`)
// }
// greet(`Tal`, `Maman`)

// //Task 03---------------------------------------------------------

//     function checkAge(age) {
//         if (age < 13) {
//             return "You are a child.";
//         } else if (age >= 13 && age <= 17) {
//             return "You are a teenager.";
//         } else if (age >= 18 && age <= 64) {
//             return "You are an adult.";
//         } else {
//             return "You are a senior.";
//         }
//     }
    
//     console.log(checkAge(70));   // "You are a senior."
//     console.log(checkAge(10));   // "You are a child."
//     console.log(checkAge(15));   // "You are a teenager."
//     console.log(checkAge(30));   // "You are an adult."
//     // Switch
//     function getDayMessage(dayOfWeek) {
//         switch (dayOfWeek) {
//             case "Monday":
//                 return "Start of the work week!";
//             case "Tuesday":
//                 return "A day to keep pushing forward.";
//             case "Wednesday":
//                 return "Halfway there!";
//             case "Thursday":
//                 return "One more day till Friday.";
//             case "Friday":
//                 return "TGIF! It's Friday!";
//             case "Saturday":
//                 return "Enjoy your weekend!";
//             case "Sunday":
//                 return "A day of rest.";
//             default:
//                 return "Invalid day!";
//         }
//     }
    
//     console.log(getDayMessage("Monday"));    // "Start of the work week!"
//     console.log(getDayMessage("Friday"));    // "TGIF! It's Friday!"
//     console.log(getDayMessage("Sunday"));    // "A day of rest."
//     console.log(getDayMessage("xyz"));       // "Invalid day!"

//     function checkEligibility(age, isStudent) {
//         if (age < 18) {
//             if (isStudent) {
//                 return "You are a minor student.";
//             } else {
//                 return "You are a minor non-student.";
//             }
//         } else if (age >= 18 && age <= 24) {
//             if (isStudent) {
//                 return "You are a young adult student.";
//             } else {
//                 return "You are a young adult non-student.";
//             }
//         } else { // age >= 25
//             if (isStudent) {
//                 return "You are an adult student.";
//             } else {
//                 return "You are an adult non-student.";
//             }
//         }
//     }
    
    
//     console.log(checkEligibility(15, true));   // "You are a minor student."
//     console.log(checkEligibility(20, false));  // "You are a young adult non-student."
//     console.log(checkEligibility(30, true));   // "You are an adult student."
//     console.log(checkEligibility(18, true));   // "You are a young adult student."
    
//    // string comparison
//    function formatName(name){
//     let formatName= name.trim().toLowerCase();

//     if(formatName==="admin"){
//         return "Welcome, Admin"
//     }
//     else{
//         return `Hello ${name}`
//     }
//    }
   
//    console.log(formatName("John")) // "Hello John"
//    console.log(formatName("admin")) // "Welcome Admin"
//    console.log(formatName("Tal")) // "Hello tal"

// function checkDiscount(age, isMember) {
//     if (age < 18) {
//         if (isMember) {
//             return "You get a 20% discount.";
//         } else {
//             return "You get a 10% discount.";
//         }
//     } else if (age >= 65) {
//         if (isMember) {
//             return "You get a 30% discount.";
//         } else {
//             return "You get a 20% discount.";
//         }
//     } else { // age is between 18 and 64
//         if (isMember) {
//             return "You get a 10% discount.";
//         } else {
//             return "No discount available.";
//         }
//     }
// }


// console.log((checkDiscount)(65, true));
// console.log((checkDiscount)(17, true));
// console.log((checkDiscount)(64, true));
// console.log((checkDiscount)(65, false));
// console.log((checkDiscount)(17, false));
// console.log((checkDiscount)(64, false));

// Login Validation
// function validateLogin(username, password){
//     const storedUsername="Dobby"
//     const storedPassword="1234"
//     if(username===storedUsername && password===storedPassword){
//         return "Login Successful"
//     }
//     else{
//         return "invalid username or password"
//     }
// }
// console.log(validateLogin("Dobby", "1234")); // Login Successful
// console.log(validateLogin("Dobby", "123")); // invalid username or password
// console.log(validateLogin("Doy", "1234")); // invalid username or password

// Initials------------------------------

// function extractInitials(firstName, lastName){

//     let firstInitial=firstName.charAt(0).toUpperCase();
//     let secondInitial=lastName.charAt(0).toUpperCase();
//     let initials=firstInitial+`.`+secondInitial;
//     return initials;
// }
// console.log(extractInitials("Tal", "Maman")); // T.M
// console.log(extractInitials("Dobby", "TheElf")); // D.T

//string replacement-----------------
// function maskEmail(email){
//     let masking= email.split(`@`)
//     let maskedUsername = masking[0].replace(/./g, '*');
//     let maskedEmail=maskedUsername + "@" + masking[1]

//     return maskedEmail;
// }
// console.log(maskEmail(`Dreapet41s@gmail.com`)) // *********@gmail.com


// function gradeCalculator(score){
//     let studentGrade=score
//     if (studentGrade > 90) return "A";
//     else if (studentGrade > 80) return "B"; 
//     else if (studentGrade > 70) return "C";
//     else if (studentGrade > 60) return "D";
//     else return "F";
// }
// console.log(gradeCalculator(91)) // A
// console.log(gradeCalculator(81)) // B
// console.log(gradeCalculator(71)) // C
// console.log(gradeCalculator(61)) // D
// console.log(gradeCalculator(51)) // F

//complex boolean--------------------------------------------
// function canVote (age, isCitizen){
//     if (age>=18 && isCitizen===true) return "You are eligible to vote!"
//     else return "You are not eligible to vote";
// }
// console.log(canVote(18, true)) // You are eligible to vote!
// console.log(canVote(18, false)) // You are not eligible to vote
// console.log(canVote(10, true)) // You are not eligible to vote

// String and Number Conversion:--------------------------
// function convertToUpperCaseAndAddAge(name, age){
// let capitalizedName=name.toUpperCase()
// let addAge=capitalizedName+age; 
// return addAge;

// }
// console.log(convertToUpperCaseAndAddAge("tal", 12)) // TAL12

// Capitalize First Letter:----------------------------------
// function capitalized(word){
//     let capitalizedWord=word.charAt(0).toUpperCase() + word.substring (1)
//     return capitalizedWord;
// }
// console.log(capitalized("Rabies")) // returns Rabies

//Check Substring:--------------------------------------------
    // function containsSubstring(mainString, subString){
    //     return (mainString.includes(subString))
    // }
    // console.log(containsSubstring("Johnny had a wild ride", "i")) // true
    // console.log(containsSubstring("Johnny had a wild ride", "riders")) // false
    // console.log(containsSubstring("Johnny had a wild ride", "wild")) // true