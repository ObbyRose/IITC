// # JavaScript Objects - 20 More Practice Exercises

// ## Exercise 11: Playlist
// 1. Create an object called `playlist` with properties: name (string), songs (array of strings), and duration (number in minutes).
// 2. Add a new song to the playlist.
// 3. Calculate and log the average song duration (assume each song is 3 minutes long).

// **Hint:** Use the `length` property of the array to get the number of songs.

let playlist = {
  name: `Afrobeats Mix`,
  songs: [`Free Mind`, `Vanilla`, `Supalife`],
  duration: 9,
};
playlist.songs.push(`Feel`);
playlist.duration += 3;
let AvgLength = playlist.duration / playlist.songs.length;
console.log(AvgLength);

// ## Exercise 12: Bank Account
// 1. Create an object called `bankAccount` with properties: accountNumber (string), balance (number), and isActive (boolean).
// 2. Create a method called `deposit` that takes an amount and adds it to the balance.
// 3. Create another method called `withdraw` that takes an amount and subtracts it from the balance, but only if the balance is sufficient.

// **Hint:** Use `this` keyword inside methods to access object properties.

let bankAccount = { accountNumber: `3555`, balance: 15000, isActive: true };

// bankAccount.balance += Number(prompt(`Deposit amount`))

console.log(bankAccount.balance);

// bankAccount.balance -= Number(prompt(`withdraw amount`));

console.log(bankAccount.balance);

// ## Exercise 13: Circle
// 1. Create an object called `circle` with properties: radius (number) and color (string).
// 2. Add a method called `calculateArea` that returns the area of the circle (π * r^2).
// 3. Add another method called `calculateCircumference` that returns the circumference of the circle (2 * π * r).

// **Hint:** Use `Math.PI` for the value of π.

let circle = { radius: 5, color: `blue` };

circle.calcArea = function (area) {
  return (area = (Math.PI * circle.radius) ^ 2);
};
console.log(circle.calcArea(5));

circle.calcCircumf = function (circumference) {
  return (circumference = 2 * Math.PI * circle.radius);
};
console.log(circle.calcCircumf(10));

// ## Exercise 14: Student Grade Calculator
// 1. Create an object called `student` with properties: name (string) and grades (array of numbers).
// 2. Add a method called `calculateAverage` that returns the average of the student's grades.
// 3. Add another method called `getLetterGrade` that returns 'A' for >=90, 'B' for >=80, 'C' for >=70, 'D' for >=60, and 'F' for <60.

// **Hint:** Use array methods like `reduce()` to calculate the average.

let student = {
  name: `Tal Maman`,
  grades: [90, 85, 95, 100],

  calcAvg: function (grades) {
    let avgSum = 0;
    if (student.grades === 0) return 0;
    let sum = grades.reduce(function (acc, grade) {
      return acc + grade;
    });
    return sum / grades.length;
  },

  getLetterGrade: function (avg) {
    if (avg >= 90) return `A`;
    else if (avg >= 80) return `B`;
    else if (avg >= 70) return `C`;
    else if (avg >= 60) return `D`;
    else return `F`;
  },
};

console.log(student.calcAvg(student.grades));
console.log(student.getLetterGrade(student.calcAvg(student.grades)));

// ## Exercise 15: To-Do List
// 1. Create an object called `todoList` with properties: tasks (array of strings) and completedTasks (array of strings).
// 2. Add methods: `addTask(task)`, `completeTask(task)`, and `displayTasks()`.
// 3. `completeTask(task)` should move a task from tasks to completedTasks.

// **Hint:** Use array methods like `push()` and `filter()`.

let todoList = {
  tasks: [`Clean Room`, `Pack Suitcase`, `Laundry`],
  completedTasks: [`Clean garage`, `Take Dog Out`],
  addTask: function (task) {
    return this.tasks.push(task);
  },
  finishedTask: function (task) {
    return this.completedTasks.push(task);
  },
  displayTasks: function () {
    return console.log(this.tasks);
  },
  moveTasks: function (task) {
    let idx = this.tasks.indexOf(task);
    console.log(idx);
    if (idx !== -1) this.completedTasks.push(this.tasks[idx]);
    this.tasks.splice(idx, 1);
    return this.completedTasks;
  },
};
console.log(todoList.moveTasks(`Clean Room`));
console.log(todoList.displayTasks());

// ## Exercise 16: Library Book
// 1. Create an object called `book` with properties: title (string), author (string), isbn (string), and isAvailable (boolean).
// 2. Add methods: `checkOut()` and `return()`.
// 3. These methods should change the `isAvailable` status and log a message.

// **Hint:** Use conditional statements in your methods.

// ## Exercise 17: Color Mixer
// 1. Create an object called `colorMixer` with properties: color1 (string) and color2 (string).
// 2. Add a method called `mix()` that returns a new color based on the combination of color1 and color2.
// 3. Use predefined combinations like "red" + "blue" = "purple", "yellow" + "blue" = "green", etc.

// **Hint:** Use a switch statement or object lookup for color combinations.

// ## Exercise 18: Temperature Converter
// 1. Create an object called `tempConverter` with properties: celsius (number) and fahrenheit (number).
// 2. Add methods: `setC(temp)`, `setF(temp)`, `getC()`, and `getF()`.
// 3. When setting one temperature, automatically calculate and set the other.

// **Hint:** Use the formulas: C = (F - 32) * 5/9 and F = C * 9/5 + 32

// ## Exercise 19: Virtual Pet
// 1. Create an object called `pet` with properties: name (string), type (string), hunger (number), and happiness (number).
// 2. Add methods: `feed()`, `play()`, and `getStatus()`.
// 3. `feed()` should decrease hunger, `play()` should increase happiness, and `getStatus()` should return a string describing the pet's state.

// **Hint:** Use template literals for `getStatus()` return value.

// ## Exercise 20: Quiz
// 1. Create an object called `quiz` with properties: questions (array of objects) and score (number).
// 2. Each question object should have: text (string), options (array), and correctAnswer (number - index of correct option).
// 3. Add methods: `askQuestion(index)` and `checkAnswer(index, answer)`.

// **Hint:** Use `console.log()` to display questions and options.

// ## Exercise 21: Inventory Manager
// 1. Create an object called `inventory` with properties: items (array of objects) where each item has name (string) and quantity (number).
// 2. Add methods: `addItem(name, quantity)`, `removeItem(name, quantity)`, and `checkStock(name)`.

// **Hint:** Use array `find()` method to locate items.

// ## Exercise 22: Dice Roller
// 1. Create an object called `dice` with properties: sides (number) and lastRoll (number).
// 2. Add a method called `roll()` that generates a random number between 1 and `sides`, sets `lastRoll`, and returns the result.

// **Hint:** Use `Math.random()` and `Math.floor()`.

// ## Exercise 23: Word Counter
// 1. Create an object called `wordCounter` with a property text (string).
// 2. Add methods: `countWords()`, `countCharacters(includeSpaces)`, and `getFrequentWords(n)`.
// 3. `getFrequentWords(n)` should return the n most frequent words.

// **Hint:** Use string methods like `split()` and object to store word frequencies.

// ## Exercise 24: Simple Calculator
// 1. Create an object called `calculator` with properties: result (number).
// 2. Add methods: `add(n)`, `subtract(n)`, `multiply(n)`, `divide(n)`, and `clear()`.
// 3. Each method (except `clear()`) should update and return `result`.

// **Hint:** Use method chaining to allow operations like `calculator.add(5).multiply(2)`.

// ## Exercise 25: Rock Paper Scissors Game
// 1. Create an object called `game` with properties: playerScore (number) and computerScore (number).
// 2. Add methods: `play(playerChoice)`, `getComputerChoice()`, and `determineWinner(player, computer)`.

// **Hint:** Use Math.random() for computer choice and nested if statements for winner logic.

// ## Exercise 26: BMI Calculator
// 1. Create an object called `bmiCalculator` with properties: weight (number) and height (number).
// 2. Add methods: `setMetricUnits(weight, height)`, `setImperialUnits(weight, height)`, and `calculate()`.
// 3. `calculate()` should return the BMI and a description (e.g., "Normal weight", "Overweight").

// **Hint:** BMI = weight(kg) / (height(m))^2 or BMI = 703 * weight(lbs) / (height(inches))^2

// ## Exercise 27: Time Converter
// 1. Create an object called `timeConverter` with a property seconds (number).
// 2. Add methods: `setTime(seconds)`, `getHours()`, `getMinutes()`, and `getSeconds()`.
// 3. Each getter method should return the appropriate part of the time.

// **Hint:** Use division and modulo operators.

// ## Exercise 28: Shopping Cart
// 1. Create an object called `shoppingCart` with properties: items (array of objects) and total (number).
// 2. Each item should have: name (string), price (number), and quantity (number).
// 3. Add methods: `addItem(name, price, quantity)`, `removeItem(name)`, and `calculateTotal()`.

// **Hint:** Use array `reduce()` method to calculate the total.

// ## Exercise 29: Morse Code Translator
// 1. Create an object called `morseTranslator` with a property alphabet (object mapping letters to morse code).
// 2. Add methods: `textToMorse(text)` and `morseToText(morse)`.

// **Hint:** Use string `split()` and `join()` methods along with `map()`.

// ## Exercise 30: Simple Stopwatch
// 1. Create an object called `stopwatch` with properties: startTime (number), isRunning (boolean), and elapsedTime (number).
// 2. Add methods: `start()`, `stop()`, `reset()`, and `getElapsedTime()`.

// **Hint:** Use `Date.now()` to get the current timestamp.

// Remember to test your code frequently and use `console.log()` to debug!
