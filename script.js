//Task1
const firstWord = 'Hello';
const secondWord = 'World';

console.log(`${firstWord} ${secondWord}`);

//Task2
var multiply = (a, b=1) => a*b;

console.log(multiply(2,5));
console.log(multiply(5));

//Task3
let average = (...arr) => {
    let sum = 0;
    arr.forEach(arr => sum += arr);
    
    return sum / arr.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//task4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const gradesAverage = average(...grades);

console.log(gradesAverage);

//task5

const table = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = table;

console.log(`${firstName} ${lastName}`);
