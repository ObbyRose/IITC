// # JavaScript Objects - Practice Exercises

// ## Exercise 1: Person

// 1. Create an object called `person` with properties: name (string), age (number), and isStudent (boolean).
// 2. Access and log the name and age of the person.
// 3. Modify the isStudent property and log the updated object.

// **Hint:** Use object literal syntax to create the object. Remember, you can access object properties using dot notation or bracket notation.
// **Learn more:** [MDN Web Docs - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

let person = { name: `david`, age: 15, isStudent: true };

console.log(`his name is ${person.name} and he is ${person.age} years old`);
console.log((person.isStudent = false));

// ## Exercise 2: Car

// 1. Create an object called `car` with properties: make (string), model (string), and year (number).
// 2. Access and log the make and model of the car.
// 3. Update the year of the car and log the updated object.

// **Hint:** After creating the object, you can modify properties by assigning new values to them.

// **Learn more:** [JavaScript.info - Objects](https://javascript.info/object)

let car = { make: `Alfa Romeo`, model: `Giulia QV`, year: 2022 };
console.log(
  `The make of the vehicle is ${car.make} and the model is ${car.model}`
);
car.year = 2024;
console.log(`the year of the model is ${car.year}`);

// ## Exercise 3: Fruit

// 1. Create an object called `fruit` with properties: name (string), color (string), and sweetness (number from 1-10).
// 2. Access and log the name and sweetness of the fruit.
// 3. Change the color of the fruit and log the updated object.

// **Hint:** Remember to use appropriate data types for each property. The sweetness should be a number.

let fruit = { name: `Pineapple`, color: `Yellow`, sweetness: 9 };
console.log(
  `the fruit is ${fruit.name} and its sweetness level is ${fruit.sweetness}`
);

// **Learn more:** [W3Schools - JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

// ## Exercise 4: Book

// 1. Create an object called `book` with properties: title (string), author (string), and pages (number).
// 2. Access and log the title and author of the book.
// 3. Increase the number of pages by 50 and log the updated object.

// **Hint:** To increase the number of pages, you'll need to access the current value and add to it.

// **Learn more:** [MDN Web Docs - Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

let book = {
  title: `The lion who loves strawberries`,
  author: `Jay Len`,
  pages: 400,
};
console.log(
  `the name of the book is ${book.title} whcih was written by ${book.author}`
);
book.pages = 450;
console.log(`the book has ${book.pages} pages`);

// ## Exercise 5: Animal

// 1. Create an object called `animal` with properties: species (string), sound (string), and isWild (boolean).
// 2. Access and log the species and sound of the animal.
// 3. Change the isWild property and log the updated object.

// **Hint:** Boolean values in JavaScript are `true` or `false` (without quotes).
// **Learn more:** [JavaScript.info - Object properties configuration](https://javascript.info/object-properties)

let animal = { species: `cats`, sound: `Rawr`, isWild: true };

console.log(
  `the animal is from the ${animal.species} species and makes a ${animal.sound} sound`
);
animal.isWild = false;
console.log(animal.isWild);

// ## Exercise 6: Smartphone

// 1. Create an object called `smartphone` with properties: brand (string), model (string), and storageGB (number).
// 2. Access and log the brand and storageGB of the smartphone.
// 3. Update the model of the smartphone and log the updated object.
// **Hint:** When logging multiple properties, you can use string concatenation or template literals.
// **Learn more:** [MDN Web Docs - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

let smartphone = { brand: `Iphone`, model: `14plus`, storageGB: 256 };
console.log(smartphone.brand, smartphone.storageGB);
smartphone.model = `15Ultra`;
console.log(`the updated model is ${smartphone.model}`);

// ## Exercise 7: Recipe

// 1. Create an object called `recipe` with properties: name (string), ingredients (array), and preparationTime (number in minutes).
// 2. Access and log the name and the first ingredient of the recipe.
// 3. Add a new ingredient to the ingredients array and log the updated object.

// **Hint:** To access the first element of an array, use index 0. To add an element to an array, you can use the `push()` method.

// **Learn more:** [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

let recipe = {
  name: `cake`,
  ingredients: [`flour`, `eggs`, `butter`, `chocolate`],
  preparationTime: 30,
};
console.log(
  `the recipe is for a ${recipe.name} and the first ingredient is ${recipe.ingredients[0]}`
);
recipe.ingredients.push(`milk`);
console.log(recipe.ingredients);

// ## Exercise 8: Movie

// 1. Create an object called `movie` with properties: title (string), director (string), and releaseYear (number).
// 2. Access and log the title and director of the movie.
// 3. Update the releaseYear and log the updated object.

// **Hint:** Make sure to use the appropriate data type for the releaseYear (it should be a number, not a string).

// **Learn more:** [JavaScript.info - Object methods, "this"](https://javascript.info/object-methods)

let movie = {
  title: `DeadPool5`,
  director: `Quentin Tarantino`,
  releaseYear: `2024`,
};
console.log(`The director of ${movie.title} is ${movie.director}`);
movie.releaseYear = 2025;
console.log(movie.releaseYear);

// ## Exercise 9: Country

// 1. Create an object called `country` with properties: name (string), capital (string), and population (number).
// 2. Access and log the name and capital of the country.
// 3. Increase the population by 1 million and log the updated object.

// **Hint:** When increasing the population, remember to add the number (1000000) to the current population value.

// **Learn more:** [MDN Web Docs - Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

let country = {
  name: `Alfa Torr`,
  capital: `Torr Island`,
  population: 2000000,
};
console.log(`The capital of ${country.name} is ${country.capital}`);
country.population += 1000000;
console.log(country.population);

// ## Exercise 10: Computer

// 1. Create an object called `computer` with properties: brand (string), CPU (string), and RAMinGB (number).
// 2. Access and log the brand and CPU of the computer.
// 3. Double the RAMinGB and log the updated object.
// **Hint:** To double a number, you can multiply it by 2 or add it to itself.
// **Learn more:** [JavaScript.info - Objects](https://javascript.info/object)

let computer = { brand: `msi`, CPU: `AMD Ryzen 7800x3d`, ramInGB: 32 };
console.log(
  `the brand of the computer is ${computer.brand} and it has a ${computer.CPU} CPU`
);
computer.ramInGB += computer.ramInGB;
console.log(computer.ramInGB);

// Remember, practice is key to mastering JavaScript objects. Try to complete these exercises without looking at the solutions, and don't hesitate to use console.log() to check your work at each step!
