// Map

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map(function (value) {
// if (value % 2 === 0) {
//      return value * 2;
// }});

// console.log(newArr);

// ForEach

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (value) {
//     return (value * 2);
// });

// console.log(arr);


// Filter

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.filter(function (value) {
//     return value % 2 === 0;
// });

// console.log(newArr);

// craete an array with 3 fruits and print the second fruit.

// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[1]);

// add mango to the end and pinapple to the beginning of the array and print the array.

// fruits.push("mango");
// fruits.unshift("pineapple");
// console.log(fruits);

// replace cherry with orange and print the array.

// fruits[2] = "orange";
// console.log(fruits);

// remove the last item from this array using a method.

// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// console.log(arr);

// Insert red and blue at index 1 and 2 in this array and print the array.

// let colors = ["green", "yellow", "purple","orange","brown"];
// colors.splice(1, 3);
// console.log(colors);

// extract the middle 3 elements from this array.

// let items = [1, 2, 3, 4, 5, 6, 7];
// let adarsh = items.slice(0, 5);
// console.log(adarsh); 
// console.log(items);

// sort this array alphabetically and reverse it.

// let fruits = ["banana", "apple", "cherry", "date"];
// fruits.sort().reverse();
// console.log(fruits);

// use .map to square each number.

// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map(function (value) {
//     return value * value;
// });

// console.log(squaredNumbers);


// use .filter to get only graeter than 10

// let arr =[1, 5, 10, 15, 20, 25];
// let filteredArr = arr.filter(function (value) {
//     return value > 10;
// });

// console.log(filteredArr);


// let arr = [1, 2, 3, 4, 5];

// let newArr = arr;

// newArr = newArr.slice(1, 3);

// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(0,3);
// console.log(arr);   

// sort method 

// let arr = [5, 2, 8, 1, 4];
// arr.sort(function(a, b) {
//     return b - a; // Sort in ascending order
// });

// console.log(arr); // Output: [1, 2, 4, 5, 8]

// forEach method

// let arr = [11,56, 23, 78, 45];

// arr.forEach(function(value) {
//     console.log(value+5);u
// }); 

// map method

// let arr = [11,56, 23, 78, 45];

// newArr = arr.map(function(value) {
//     if (value > 30) return value;
// }); 
// console.log(newArr);

// filter method

// let arr = [11,56, 23, 78, 45];

// newArr = arr.filter(function(value) {
//     if (value > 30) return value;
// }); 
// console.log(newArr);

// reduce method

// let arr = [11,56, 23, 78, 45];

// let sum = arr.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 213

//find method

// let arr = [11,56, 23, 78, 45];

// let foundValue = arr.find(function(value) {
//     return value > 50;
// }); 

// console.log(foundValue); // Output: 56

// some method

// let arr = [11,56, 23, 78, 45];

// let hasValueGreaterThan50 = arr.some(function(value) {
//     return value > 50;
// });

// console.log(hasValueGreaterThan50); // Output: true

// every method

// let arr = [11,56, 23, 78, 45];

// let allValuesGreaterThan10 = arr.every(function(value) {
//     return value > 12;
// });

// console.log(allValuesGreaterThan10); // Output: true


// destructuring arrays

// let arr = [1, 2, 3, 4, 5];

// // let [first, second, ...rest] = arr;
// let [a, ,b,c] = arr;

// console.log(b); // Output: 1

// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4, 5]     

// let fruits = ["apple", "banana", "cherry"];
// fruits.splice(2, 1, "mango","pineapple");
// console.log(fruits); 

// spread operators array

// let arr = [1,2,3,4,5,5,5,6,6,7];

// arr2 = {...arr};

// console.log(arr2);

