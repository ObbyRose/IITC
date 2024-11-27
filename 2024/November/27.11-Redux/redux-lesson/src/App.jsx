import { useState } from 'react'
import './App.css'

function App() {
let numbers = [1,2,3,4,5]
let newArr = [...numbers]
console.log(newArr);

let arr1 = [1,2,3,4,5]
let arr2 =["tree","records","jail"]

let combinedArr = [...arr1, ...arr2]
console.log(combinedArr);

numbers = [6, ...numbers]
console.log(numbers);

numbers = [...numbers, 8]
console.log(numbers);

combinedArr = [...arr1, ...arr2, ...numbers]
console.log(combinedArr);

arr1 = [...arr1.slice(1)]
console.log(arr1);

arr1 = [...arr1.slice(-3)]
console.log(arr1);

arr2 = [...arr2.reverse()]
console.log(arr2);

arr2 = [arr2[0], "Booger" ,...arr2.slice(2)]
console.log(arr2);

let word = "Ray"
console.log([...word]);

let nestedArr = [1,2,3,[4,5]]
console.log([...nestedArr.flat()]);

console.log([...arr2.slice(0,-1)]);

console.log([...arr2.slice(0,2), "Chair", ...arr2.slice(2)]);

arr2 = ["tree","records","jail", "tree"]
console.log([...new Set(arr2)]);

console.log([...arr2.slice(1,-1)]);

console.log([...arr2.slice(1), arr2[0]]);

console.log(["Hello", ...arr2]);

const mergedArr = (arr1,arr2) => {
  console.log([...arr1.concat(arr2)]);
  
}
mergedArr(["tree","sneakers","skateboard"],["about","rain","tests"])

console.log([...arr2.sort(()=>{Math.random() -0.5})]);

let obj = {
  obj1: "hasting",
  obj2: "running",
  obj3: "sitting",
  obj4: "managing"
}

console.log({...obj});


  return (
    <>
    </>
  )
}

export default App
