//---------------------Implicit types---------------------

let firstName = 'baba'
firstName = 'lulu'
firstName= 5

let num = 4
num.toUpperCase();

let person = { name: "bob", age: 44 };
person.location = 'USA'
person.name = true
person = 'banana' 

let something;
something = 25;
something = "banana";
something = true;
something = { name: "John", age: 25 }
// any (having no output) means anything, avoid using it as much as possible 

let users = [{ id:"1", name: "babi" }, { id:"2" }];
users.push({ id:"9", name: "harry" }); // this is allowed
users.push({ id:"17" }); // this is allowed
users.push({ id: 1 }); // this is not allowed (Id should be a string)
users.push({}); // this is not allowed (id is required)

document.addEventListener('resize', function(ev) {
    console.log(ev.ctrlKey);
    
});
document.addEventListener('click', function(ev) {
    console.log(ev.ctrlKey);
    
});

function handleClick() {
    document.onload
}

//---------------------Explicit types---------------------
let num_1 : number = 1;
let num_2 : number = "baba";
num_2 = true

let nickname_1: string = "babalulu"
let nickname_2: string = false

let numsArray_1: (number | boolean)[] = [ 1, 2, 3, true ];

// real use case
let myData: null | string[] = null

myData = ["mama , yorai"];

//Explicit are more useful in functions
// the reason why we use types in functions is to catch silly mistakes

//passing the wrong type of arguments
//bug in the code below
function sum (a: any, b: any) {
    return a+b;
}

sum(10 , "20"); // 1020

// NO BUG IN THE CODE BELOW
function safeSum (a: number, b: number) {
    return a+b;
}
safeSum(10 , "20");
let res = safeSum(10 , 20);

// tyoescript knows that res is of type 'number' even when we don't explicitly type it! great!
res.toLowerCase()