let students = [
  { id: `1`, name: `Omer` },
  { id: `2`, name: `Avi` },
  { id: `3`, name: `Gaga` },
];

// TODO:
// 1. Write a function that takes an array of object and a key
// 2. return a new array with the values of the given key

function getValuesFromKey(array, key) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i][key]);
  }
  return newArray;
}

console.log(getValuesFromKey(students, `name`));

// TODO:
// 1. Write a function that takes an array of object students
// 2. return a new array with only the students with grades greater than (n)

let student = [
  { id: `1`, name: `Omer`, grade: 80 },
  { id: `2`, name: `Avi`, grade: 65 },
  { id: `3`, name: `Gaga`, grade: 90 },
];

function getPassingStudents(student, grade) {
  let newArray = [];
  for (let i = 0; i < student.length; i++) {
    if (student[i].grade >= grade) newArray.push(student[i].name);
  }
  return newArray;
}
console.log(getPassingStudents(student, 70));

//TODO:
// 1. write a function that takes an array of names
// 2. return a new array with objects that have a "name" key value and a value

function createPersons(names) {
  let persons = [];
  for (let i = 0; i < names.length; i++) {
    persons.push([{ name: names[i] }]);
  }
  return persons;
}

console.log(createPersons(["Yossi", `Charlie`, `Baba`]));

/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/
let employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

console.log(groupBy(employees, "department"));

function groupBy(array, key) {
  let group = {};
  for (let item of array) {
    let groupKey = item[key];
    if (!group[groupKey]) {
      group[groupKey] = [];
    }
    group[groupKey].push(item);
  }
  return group;
}

/*
  {
    Engineering: [
      { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
    ],
    Marketing: [
      { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
      { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
      { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
    ]
  }
  */

let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// TODO: Write a function to update the person's city
function updateCity(person, newCity) {
  person.address.city = newCity;
}

updateCity(person, "Los Angeles");
console.log(person.address.city);

// updateCity(person, "Los Angeles");
// console.log("Updated Person:", person);

/////////////////////////////////////////////////////

students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// TODO: Write a function to return an array of student names
function getStudentNames(students) {
  return students.map(function (student) {
    return student.name;
  });
}

let names = getStudentNames(students);
console.log("Student Names:", names);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
  return students.find(function (student) {
    return student.id === id;
  });
}
student = getStudentById(students, 2);
console.log("Found Student:", student);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}
student = getStudentById(students, 2);
console.log("Found Student:", student);

// TODO: Write a function to add a new student to the array
function addStudent(students, newStudent) {
  students.push(newStudent);
}

addStudent(students, { id: 4, name: "Charlie", age: 19 });
console.log("Updated Students:", students);

/////////////////////////////////////////////////////

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

// TODO: Write a function to toggle the product's availability
function toggleAvailability(product) {
  product.isAvailable = !product.isAvailable;
}

toggleAvailability(product);
console.log("Updated Product:", product);

// TODO: Write a function to update the product's price
function updatePrice(product, newPrice) {
  product.price = newPrice;
}

updatePrice(product, 1500);
console.log("Updated Product:", product);

// TODO: Write a function to remove a category from the product
// function removeCategory(product, category) {
//     product.categories = product.categories.filter(function(category) {
//         return category !== categoryToRemove;
//       });
//     }

// removeCategory(product, "tech");
// console.log("Updated Product:", product)

/////////////////////////////////////////////////////

let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];

// TODO: Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
  return products.reduce(function (maxProduct, currentProduct) {
    if (currentProduct.price > maxProduct.price) {
      return currentProduct;
    } else {
      return maxProduct;
    }
  }, products[0]);
}

let expensiveProduct = findMostExpensiveProduct(products);
console.log("Most Expensive Product:", expensiveProduct);

// TODO: Write a function to return an array of only available product sizes
function getAvailableSizes(products) {
  let availableSizes = [];
  products.forEach(function (product) {
    if (product.isAvailable) {
      availableSizes = availableSizes.concat(product.sizes);
    }
  });
  return availableSizes;
}

let sizes = getAvailableSizes(products);
console.log("Available Sizes:", sizes);

/////////////////////////////////////////////////////

student = {
  name: "Alice",
  age: 20,
};

// TODO: Write a function to add a new property to the student object
function addProperty(student, key, value) {
  student[key] = value;
}

addProperty(student, "grade", "A");
console.log("Updated Student:", student);

/////////////////////////////////////////////////////

let school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

// TODO: Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {
  const student = school.students.find(function (student) {
    return student.id === studentId;
  });

  if (student && student.grades.hasOwnProperty(subject)) {
    student.grades[subject] = newGrade;
  } else {
    console.log("Student not found or invalid subject");
  }
}

// updateStudentGrade(school, 1, "math", 90);
// console.log("Updated School:", school);

/////////////////////////////////////////////////////

let orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

// TODO: Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
  return orders.filter(function (order) {
    return order.status === "delivered";
  });
}

let deliveredOrders = getDeliveredOrders(orders);
console.log("Delivered Orders:", deliveredOrders);

// TODO: Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
  return orders.reduce(function (productCounts, order) {
    if (productCounts[order.product]) {
      productCounts[order.product]++;
    } else {
      productCounts[order.product] = 1;
    }
    return productCounts;
  }, {});
}

let productCounts = countProductOccurrences(orders);
console.log("Product Counts:", productCounts);
/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */
