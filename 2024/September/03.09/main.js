// const userData = {
//   name: `John Doe`,
//   age: 25,
//   email: `John@doe.com`,
//   location: `USA`,
//   blogs: [
//     { title: `blog1`, likes: 52 },
//     { title: `blog 2`, likes: 31 },
//   ],
// };
// const userData2 = {
//   name: `Jane Doe`,
//   age: 30,
//   email: `Jane@doe.com`,
//   location: `UK`,
//   blogs: [
//     { title: `blog1`, likes: 52 },
//     { title: `blog 2`, likes: 31 },
//   ],
// };

//Get value from object

//METHOD 1
// console.log( userData.name);

//METHOD 2
// console.log(userData["name"]);

//METHOD 3 without dynamic string
// const keys = ["name", "age", "email", "location"]

// for (let i = 0; i < keys.length; i++) {
//    console.log(userData[keys[i]]);
//    console.log(userData2[keys[i]]);

// }

// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object
// where keys are the number of spaces
//and values are arrays of strings.4

const strings = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];

const groupStringsBySpaces = function() {
let  countObj = {}

    for (let i = 0; i < strings.length; i++) {
    let count = 0;
    const myStrings = strings[i];
    console.log(strings[i]);

    for (let j = 0; j <= myStrings.length; j++) {
      if (myStrings[j] === " ") {
        count++;
      }
    }
    if(!countObj[count]){
        countObj[count] = []
    }
    countObj[count].push(strings[i]);
  }
  console.log(countObj);
  
}

groupStringsBySpaces()
