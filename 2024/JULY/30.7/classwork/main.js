// // loop count the amount of letters in a string

// function countChar(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (char === str[i]) {
//       count++;
//     }
//   }
//   console.log(`count of ${char}: ${count} in ${str}`);
// }
// countChar(`hello`, `l`);

//---------------------------------------------------------------

//count the character in a strings array

// let names = [`sasha`, `omer`, `samuel`, `shai`];

// function countCharInArray(elements, char) {
//   let count = 0;

//   for (let i = 0; i < elements.length; i++) {
//     let currentElement = elements[i];

//     for (let j = 0; j < currentElement.length; j++) {
//       let currentChar = currentElement[j];

//       if (char === currentChar) count++;
//     }
//   }
//   console.log(`count of ${char}: ${count}`);
// }
// countCharInArray(names, `s`);
//---------------------------------------------------------------
let numbers = [1, 2, 3];
function sumInArray(nums) {
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    let counterNumber = nums[i];
    count += counterNumber;
  }
  console.log(`count is ${count}`);
}
sumInArray(numbers);

//---------------------------------------------------------------

function sumNestedNumbersArray(nestedNumbers) {
  let sum = 0;

  for (let i = 0; i < nestedNumbers.length; i++) {
    let elementArr = nestedNumbers[i];
    console.log(elementArr);

    for (let j = 0; j < elementArr.length; j++) {
      const element = elementArr[j];
      console.log(element);
      sum += element; // its like sum=sum+elementArr
    }
  }

  console.log(`sum is: ${sum}`);
}

sumNestedNumbersArray([[5, 2], [3, 20, 10], [1]]);

//---------------------------------------------------------------
// QUESTION FOR HOMEWORK STAR PATTERN
function starPattern() {
  for (let i = 1; i <= 5; i++) {
    let stars = ``;
    for (let j = 1; j <= i; j++) {
      stars += `*`;
    }
    console.log(stars);
  }
}
starPattern();

//---------------------------------------------------------------
// from homework Multiply table

function makeMultiTable() {
  for (let i = 1; i <= 10; i++) {
    let row = ``;
    for (let j = 1; j <= 10; j++) {
      row += j * i +" ";
    }
    console.log(row);
} 
}
makeMultiTable()

//--------------------------------------------------------------