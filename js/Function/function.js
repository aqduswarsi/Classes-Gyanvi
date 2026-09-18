// // Q1. Use rest parameter to accept any number of scores and return the total.

// function getScore(...scores) {

//     let total = 0;
//     // console.log(scores);
//     scores.forEach(function(val){
//         total = total + val;
//     })
//     return total;
// }
// console.log(getScore(10, 12, 30, 24, 54));

// // Q2. Can you assign a function to a variable and then call it ? show how.

// let a = function(){

// }

// a();

// // Q3. Pass a function into an another function.

// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("heyhey");
// })

// // Q4. What is higher order function.

// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("heyhey");
// })

// //Pure vs impure Function

// let total = 0;
// function addTotal(num){
//     total += num;
//     return total;
// }
// console.log(addTotal(10));

// // Convert the above function into pure function

// let total = 0;
// function addTotal(num){
//     let newTotal = total;
//     newTotal += num;
//     return newTotal;
// }
// console.log(addTotal(10));

// // What is closure ? when is it created ?

// function abcd(){
//     let val = 0;
//     return function(){
//         console.log(val);
//     }
// }
// console.log(abcd()());

// 2nd example

// function outer(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     };
// }
// const counter = outer();
// counter();
// counter();
// counter();
// counter();

// // convert this normal function into IIFE

// function init(){
//     console.log("IIFE");
// }
// init()

// // Write a BMI calculator

// function bmi(weight,height){
//     return weight / (height*height);
// }
// console.log(bmi(58,1.7).toFixed(2));

// // Create a reusable discount calculator

// function discountCalculator(discount){
//     return function (price){
//         return price - price * (discount / 100);
//     };
// }

// let ten = discountCalculator(10);
// let twenty = discountCalculator(20);
// let thirty = discountCalculator(30);

// console.log(ten(1500));
// console.log(twenty(1500));
// console.log(thirty(1500));

// function declaration

// function add(a,b){
//     console.log(a+b);
// }
// add();

// function expression

// let add = function (a,b){
//     console.log(a+b);
// }
// add(10,20);

// First class function

// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("heyhey");
// });

// function abcd(val){
//     return "heyhey"
// }
// console.log(abcd());

// function abcd(val){
//     return "heyhey";
// }
// console.log(abcd());

// higher order function

// function abcd(){
//     return function(){
//         console.log("heyhey");
//     }
// }
// abcd()();

// lexical scope

// function abcd(){
//     let a = 10;
//     console.log(a);
//     function defg(){
//         let b = 20;
//         // console.log(b);
//         function hijk(){
//             let c = 30;
//             console.log(a,b,c);
//         }
//         hijk();
//     }
//     defg();
// }
// abcd();

// function add(a=3,b=9){ //default parameter
//     console.log(a+b);
// }
// add(); //arguments priority is higher than default parameter.

// function lolo(){
//     console.log("Hey"); // function declaration
// }
// lolo();

// let fnc = function(){
//     console.log("Hey"); // function expression
// }
// fnc();

// (() => {
//     console.log("Hey"); // arrow function
// })();

// function abcd(a,b,c,...val){
//     console.log(a,b,val);
// }
// abcd(1,2,3,4,5,6,7,8,9);

// hoisting in function

// efg();
// abcd();

// function efg(){
//  console.log("My name is khan"); //function declaration
// }

// let abcd = function(){
//  console.log("My name is khan"); //function expresion
// }

// let prompt = (num) => {
//   if (num % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// };

// prompt(6766);