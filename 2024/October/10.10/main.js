    // 1. Create a new Promise that resolves with the value "Hello, World!".
    const promise1 = new Promise((resolve) => resolve("Hello, World!"));

    // 2. Create a new Promise that rejects with the value "Error occurred".
    const promise2 = new Promise((_, reject) => reject("Error occurred"));

    // 3. Write a Promise that resolves after 2 seconds with the value "Resolved!".
    const promise3 = new Promise((resolve) => setTimeout(() => resolve("Resolved!"), 2000));

    // 4. Write a Promise that rejects after 1 second with the value "Rejected!".
    const promise4 = new Promise((_, reject) => setTimeout(() => reject("Rejected!"), 1000));

    // 5. Create a Promise that resolves with a given value and log the resolved value using .then().
    const promise5 = (value) => new Promise((resolve) => resolve(value)).then(console.log);

    // 6. Create a Promise that rejects with a given value and handle the rejection using .catch().
    const promise6 = (value) => new Promise((_, reject) => reject(value)).catch(console.error);

    // 7. Write a Promise that resolves with the value "Hello, World!" and logs "Promise Resolved!" after it resolves.
    const promise7 = new Promise((resolve) => resolve("Hello, World!"))
    .then((value) => {
        console.log(value);
        console.log("Promise Resolved!");
    });

    // 8. Write a function that returns a resolved Promise with a given message.
    const resolvedPromise = (message) => new Promise((resolve) => resolve(message));

    // 9. Write a function that returns a rejected Promise with a given error message.
    const rejectedPromise = (errorMessage) => new Promise((_, reject) => reject(errorMessage));

    // 10. Create a Promise that resolves after 3 seconds and logs the value "3 seconds passed".
    const promise10 = new Promise((resolve) => setTimeout(() => resolve("3 seconds passed"), 3000)).then(console.log);

    // 11. Chain two Promises together where the second Promise resolves with the value of the first Promise plus " and then some".
    const promise11 = new Promise((resolve) => resolve("First promise"))
    .then((value) => new Promise((resolve) => resolve(value + " and then some")))
    .then(console.log);

    // 12. Write a Promise that resolves with an array of numbers and logs the sum of those numbers using .then().
    const promise12 = new Promise((resolve) => resolve([1, 2, 3, 4, 5]))
    .then((numbers) => numbers.reduce((sum, num) => sum + num, 0))
    .then(console.log);

    // 13. Create a Promise that rejects if a given number is less than 10 and resolves if it's 10 or greater.
    const promise13 = (num) =>
    new Promise((resolve, reject) => (num >= 10 ? resolve(num) : reject("Number is less than 10")));

    // 14. Write a function that returns a Promise which resolves after a given number of milliseconds.
    const delayPromise = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // 15. Write a Promise that resolves with the current date and time.
    const promise15 = new Promise((resolve) => resolve(new Date())).then(console.log);

    // 16. Use Promise.all() to wait for two Promises to resolve and then log their results.
    const promise16a = new Promise((resolve) => resolve("First Promise"));
    const promise16b = new Promise((resolve) => resolve("Second Promise"));
    Promise.all([promise16a, promise16b]).then(console.log);

    // 17. Create a Promise that resolves with a user's name and another that resolves with the user's age. Use Promise.all() to wait for both and then log a message "Name: [name], Age: [age]".
    const promise17a = new Promise((resolve) => resolve("John"));
    const promise17b = new Promise((resolve) => resolve(30));
    Promise.all([promise17a, promise17b]).then(([name, age]) => console.log(`Name: ${name}, Age: ${age}`));

    // 18. Write a function that returns a Promise which resolves with a random number after 1 second.
    const randomNumberPromise = () => new Promise((resolve) => setTimeout(() => resolve(Math.random()), 1000));

    // 19. Create a Promise that rejects with a specific error message and handle it using .catch() and log the error.
    const promise19 = new Promise((_, reject) => reject("Specific error message")).catch(console.error);

    // 20. Write a Promise that resolves with "Success!" and logs "Operation was successful!" using .then().
    const promise20 = new Promise((resolve) => resolve("Success!")).then(() => console.log("Operation was successful!"));

    // 21. Write a Promise that resolves with "Done!" and always logs "Finished!" using .finally().
    const promise21 = new Promise((resolve) => resolve("Done!"))
    .finally(() => console.log("Finished!"));

    // 22. Write a function that returns a Promise which resolves with "Data received" after simulating a 2-second network request using setTimeout.
    const fetchData = () => new Promise((resolve) => setTimeout(() => resolve("Data received"), 2000));

    // 23. Write a function that uses Promise.all() to wait for three Promises that resolve with different values and logs all the values once all Promises are resolved.
    const promise23 = () =>
    Promise.all([
        new Promise((resolve) => resolve("First value")),
        new Promise((resolve) => resolve("Second value")),
        new Promise((resolve) => resolve("Third value")),
    ]).then(console.log);

    // 24. Write a function that returns a Promise which rejects if a given string is empty and resolves if it is not empty.
    const checkString = (str) =>
    new Promise((resolve, reject) => (str ? resolve("String is valid") : reject("String is empty")));

    // 25. Write a Promise that resolves with the square of a given number.
    const squarePromise = (num) => new Promise((resolve) => resolve(num * num));

    // 26. Create a Promise that resolves with the value of a given number multiplied by 2 after 2 seconds.
    const multiplyByTwo = (num) =>
    new Promise((resolve) => setTimeout(() => resolve(num * 2), 2000));

    // 27. Write a function that returns a Promise which resolves with a greeting message for a given name.
    const greet = (name) => new Promise((resolve) => resolve(`Hello, ${name}!`));

    // 28. Write a Promise that resolves with "File downloaded" after simulating a file download with setTimeout.
    const downloadFile = () => new Promise((resolve) => setTimeout(() => resolve("File downloaded"), 2000));

    // 29. Write a Promise that rejects with "Network error" if a given boolean is false and resolves with "Network success" if true.
    const checkNetwork = (status) =>
    new Promise((resolve, reject) => (status ? resolve("Network success") : reject("Network error")));

    // 30. Write a function that returns a Promise which resolves with "API call successful" after simulating an API call with setTimeout.
    const apiCall = () => new Promise((resolve) => setTimeout(() => resolve("API call successful"), 2000));
