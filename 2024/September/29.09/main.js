
//q1 forEach Method
function displaySquares() {
    const q1_resource = [2,4,6,8,10]
    let sum = 0;
    const numberList = document.getElementById('numberList');

    numberList.innerHTML = '';

    q1_resource.forEach(function(currentNumber) {
        sum += currentNumber ** 2;

        const listItem = document.createElement('li');
        listItem.textContent = `Square of ${currentNumber}: ${currentNumber ** 2}`;
        
        numberList.appendChild(listItem);
    });
            const totalSum = document.createElement('p');
            totalSum.textContent = `Total Sum of Squares: ${sum}`;
            
            // numberList.appendChild(totalSum);
            
            numberList.insertAdjacentElement("afterend", totalSum)
            
    }

    displaySquares()

// //Q2 map() method

// // const listEl = document.querySelectorAll(`li`)
// // console.log(listEl);
// // listEl.forEach(function(liEl, index){
// //     if (index %2 === 0) {
// //         liEl.style.color = `red`
// //     }
// // })

// const q2_resource = ["4", "6","21", "8"]

// let answer1 = q2_resource.map(function(strNum){
//    let changedNum = Number(strNum) ** 3
//     return changedNum
// })
// console.log(answer1);


// //Q3 FilterMethod

// const people = [
//     {name: `Alice`, age: 22 },
//     {name: `Bob`, age: 17 },
//     {name: `Anna`, age: 19 },
//     {name: `Mike`, age: 23 }
// ];

// [
//     {name: `Alice`, age: 22 },
//     {name: `Anna`, age: 19 }
// ]

// const newArr = people.filter(function(people){
//     return people.age >= 18 && people.name[0] === "A";
// })

// console.log(newArr);


// //Q4 reduce method

// const fruits = [`apple`, `banana`]

// const fruitsObj = fruits.reduce((acc, string) => {
// const stringArr = string.split("")
// stringArr.forEach((char) => {
//     if (acc[char]) {
//         acc[char]++
//     } else {
//         acc[char] = 1
//     }
// })
// return acc
// }, {})

// console.log(fruitsObj);

// //Q5 Some & every method is homework
// const allLetters ="abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const allNumbers=`1234567890`
// const passwords = [
//     "eJp0doFY",
//     "dfnaP9jd",
//     "TraaP9jR",
//     "OlraP9j2",
//     "dfnaP9jG"
// ]

// const isStrong = passwords.some((passwordStr) => {
//     let hasLetters = false
//     let hasNumbers = false
//     passwordStr.length >= 8 ? passwordStr.forEach((char) => {
//         allLetters.includes(char) ? hasLetters = true : null
//         allNumbers.includes(char) ? hasNumbers = true : null
//     })

// //Q6 find & findindex method

// const outOfStockProduct = products.find(function(product) {
//         return product.stock === 0;
//     });
//     console.log(outOfStockProduct); // { name: 'Phone', price: 800, stock: 0 }
    
//     // מציאת האינדקס של המוצר היקר ביותר
//     const indexOfMostExpensive = products.findIndex(function(product) {
//         return product.price === Math.max(...products.map(p => p.price));
//     });
//     console.log(indexOfMostExpensive);

// //Q7 Sort method

//    const students = [
//         { name: 'Clara', average: 95 },
//         { name: 'Anna', average: 92 },
//         { name: 'Ben', average: 85 },
//         { name: 'Daniel', average: 85 }

//     ]
//     const sorted = students.sort(function(a, b) {
//         if (b.average !== a.average) {
//         return b.average - a.average;
//         } else {
//         return a.name.localeCompare(b.name);
//         }
//     });
//     console.log(sorted);


    // Q2: Map Method
const q2_resource = ["4", "6", "21", "8"];
let answer1 = q2_resource.map(function(strNum) {
    let changedNum = Number(strNum) ** 3;
    return changedNum;
});
console.log(answer1);


const mapResultsDiv = document.getElementById('mapResults');
answer1.forEach(result => {
    const resultItem = document.createElement('p');
    resultItem.textContent = `Cubed value: ${result}`;
    mapResultsDiv.appendChild(resultItem);
});

// Q3: Filter Method
const people = [
    { name: `Alice`, age: 22 },
    { name: `Bob`, age: 17 },
    { name: `Anna`, age: 19 },
    { name: `Mike`, age: 23 }
];

const newArr = people.filter(function(person) {
    return person.age >= 18 && person.name[0] === "A";
});
console.log(newArr);


const filterResultsDiv = document.getElementById('filterResults');
newArr.forEach(person => {
    const personItem = document.createElement('p');
    personItem.textContent = `Name: ${person.name}, Age: ${person.age}`;
    filterResultsDiv.appendChild(personItem);
});

// Q4: Reduce Method
const fruits = ['apple', 'banana'];
const fruitsObj = fruits.reduce((acc, string) => {
    const stringArr = string.split("");
    stringArr.forEach((char) => {
        if (acc[char]) {
            acc[char]++;
        } else {
            acc[char] = 1;
        }
    });
    return acc;
}, {});
console.log(fruitsObj);


const reduceResultsDiv = document.getElementById('reduceResults');
Object.entries(fruitsObj).forEach(([char, count]) => {
    const charItem = document.createElement('p');
    charItem.textContent = `Character: ${char}, Count: ${count}`;
    reduceResultsDiv.appendChild(charItem);
});

// Q6: Find & FindIndex Method
const products = [
    { name: 'Phone', price: 800, stock: 0 },
    { name: 'Laptop', price: 1200, stock: 5 },
    { name: 'Tablet', price: 600, stock: 2 }
];

const outOfStockProduct = products.find(function(product) {
    return product.stock === 0;
});
console.log(outOfStockProduct);

const indexOfMostExpensive = products.findIndex(function(product) {
    return product.price === Math.max(...products.map(p => p.price));
});
console.log(indexOfMostExpensive);


const findResultsDiv = document.getElementById('findResults');
const outOfStockItem = document.createElement('p');
outOfStockItem.textContent = `Out of Stock: ${outOfStockProduct.name}, Price: ${outOfStockProduct.price}`;
findResultsDiv.appendChild(outOfStockItem);

const expensiveIndexItem = document.createElement('p');
expensiveIndexItem.textContent = `Index of Most Expensive Product: ${indexOfMostExpensive}`;
findResultsDiv.appendChild(expensiveIndexItem);

// Q7: Sort Method
const students = [
    { name: 'Clara', average: 95 },
    { name: 'Anna', average: 92 },
    { name: 'Ben', average: 85 },
    { name: 'Daniel', average: 85 }
];

const sorted = students.sort((a, b) => {
    if (b.average !== a.average) {
        return b.average - a.average;
    } else {
        return a.name.localeCompare(b.name);
    }
});
console.log(sorted);


const sortResultsDiv = document.getElementById('sortResults');
sorted.forEach(student => {
    const studentItem = document.createElement('p');
    studentItem.textContent = `Name: ${student.name}, Average: ${student.average}`;
    sortResultsDiv.appendChild(studentItem);
});
