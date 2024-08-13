//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

//Q1:
let numbersAbove25 = numbers.filter((number) => {
  if (number >= 25) {
    return true;
  } else {
    return false;
  }
});

console.log(numbersAbove25);

//q2:
let numbersDivBy5 = numbers.filter((number) => {
  if (number % 5 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log("Numbers Divisible by 5", numbersDivBy5);

//task2
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:


Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

//Q3
let squared = numbers.map((number) => number * number);

console.log("squared", squared);

//Q4
let double = numbers.map((number) => number * 2);
console.log("Double", double);

//task3
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

//Q5:
let biggerThan20Squared = numbers.fillter((number) => {
  if (number >= 20) {
    return true;
  } else {
    return false;
  }
});
console.log("biggerThan20Squared", biggerThan20Squared);

//Q6:

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

const logger = (array) => {
  array.forEach((element) => {
    console.log(element);
  });
};

let numbers2 = [1, 2, 3, 4, 5, 6];
logger(numbers2);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

const toCelsius = (temperature) => {
  let tempInCel = temperature.map((temp) => {
    return (temp - 32) * (5 / 9);
  });

  return tempInCel;
};
console.log(toCelsius([100, 130, 80, 40]));

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/

const hottestDays = (temperature, threshold) => {
  let exceed = temperature.fillter((temp) => {
    if (temp > threshold) {
      return true;
    } else {
      return false;
    }
  });

  return exceed;
};

console.log(hottestDays([100, 130, 80, 40], 40));

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

const logHottestDays = (temperature, threshold) => {
  let hottestDaysInFar = hottestDays(temperature, threshold);
  let hottestDaysInCel = toCelsius(hottestDaysInFar);
  logger(hottestDaysInCel);
};
logHottestDays([100, 130, 80, 40], 40);
