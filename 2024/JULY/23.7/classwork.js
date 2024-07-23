let firstName = "John"
let lastName = "Bravo"
let fullName= firstName+ " " + lastName
let age = 22 
const isStudent= true
const isAdult=age>18
const isJohn=firstName

if(isJohn=true){
console.log("His name is John")
}
if(fullName && isStudent && isAdult)
console.log(`${fullName} is an adult student`)

else{
    console.log(fullName, "is not a student")
}