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
// console.log(validateLogin("Dobby", "1234"));
// console.log(validateLogin("Dobby", "123"));
// console.log(validateLogin("Doy", "1234"));