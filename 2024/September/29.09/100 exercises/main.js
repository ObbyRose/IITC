resource = [1, 2, 3, 4, 5];
//Q1

resource.forEach((num) => {
return console.log(num);
});

//Q2
resource.forEach((num) => {
let total = num * (num + 1);
return console.log(total);
});

//Q3
resource.forEach((num) => {
let sum = 0;
sum += num ** 2;
return console.log(sum);
});

//Q4
