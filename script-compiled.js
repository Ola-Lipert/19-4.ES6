'use strict';

//Task1
var firstWord = 'Hello';
var secondWord = 'World';

console.log(firstWord + ' ' + secondWord);

//Task2
var multiply = function multiply(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};

console.log(multiply(2, 5));
console.log(multiply(5));

//Task3
var average = function average() {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
    }

    var sum = 0;
    arr.forEach(function (arr) {
        return sum += arr;
    });

    return sum / arr.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//task4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var gradesAverage = average.apply(undefined, grades);

console.log(gradesAverage);

//task5

var table = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = table[2],
    lastName = table[4];


console.log(firstName + ' ' + lastName);
