// Assignment operator
// =,+=,-=,*=,/=,%=

// let a = 20;
// a += 3;
// a -= 4;
// a *= 2;
// a /= 2;
// a %= 3;

// console.log(a);

// let temp = 35;

// if(!(temp >= 38)){
//     console.log("Hot");
// }else{
//     console.log("Cold")
// }

// unary operator

// let a = 3;
// let result = ++a + a++ + a++;
// console.log(result);

// let x = 6;
// let result = --x - --x;
// console.log(result);

// let count = 5;

// if(count-- === 5){
//     console.log("Matched");
// }else{
//     console.log("Not Matched");
// }

// Ternary Operators

// let score = 34;

// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 55 ? "C" : "Fail" ;

// console.log(grade);

// let loggedIn = true;
// let hasToken = false;

// let access = loggedIn || hasToken ? "Allow" : "Deny" ;

// console.log(access);

// if else

// let marks = 40;

// if (marks < 33) {
//   console.log("fail");
// } else if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 70) {
//   console.log("B");
// } else if (marks >= 55) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// Switch case

// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// Early return pattern

// function checkAge(age){
//   if ( age >= 18) return ("You can vote");
//   return ("You cannot vote")
// }
// console.log(checkAge(30));


// let age = 17;

// if( age >= 18 ){
//     console.log("You can vote");
//     } else {
//        console.log("you cannot vote")
//     }

//Rock, Paper, Scissor

// function rps(user, computer){
//     if(user === computer) return "Draw";

//     if(user === "rock" && computer === "scissor") return "user";
//     if(user === "paper" && computer === "rock") return "user";
//     if(user === "scissor" && computer === "paper") return "user";

//     return "computer";
// }
// console.log(rps("rock","scissor"))