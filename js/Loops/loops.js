// Loops

// Q1 — For Loop: Print numbers 1 to 10

// for(let i = 1; i <=10; i++){
//     console.log(i);
// }

// Q2 — While Loop: Print numbers 1 to 10

// let i = 1; // start
// while (i <= 10) {   // end
//   console.log(i); //code
//   i++; //change
// }

// Q3 — For Loop + Modulus: Print even numbers

// for(let i = 1; i <=20; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// Q4 — While Loop + Modulus: Print odd numbers

// let i = 1;
// while(i <= 20){
//     if(i%2 !== 0){
//         console.log(i);
//     }
//     i++;
// }

// Q5 — For Loop: Multiplication Table of 5

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
//     // console.log(5*i);
// }

// Q6 — For Loop + Accumulator: Sum of numbers

// let sum = 0;

// for (let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log(sum);

// Q7 — For Loop + Modulus: Multiples of 3

// for (let i = 1; i <= 30; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }

// Q8 — For Loop + User Input + Even/Odd Check

// let val = prompt("Give a number");

// for (let i = 1; i <= val; i++){
//     if(i%2 === 0){
//         console.log(`${i} is even`);
//     }else{
//         console.log(`${i} is odd`);
//     }
// }

// Q9 — For Loop + Logical AND: Common multiples of 3 and 5

// for (let i = 1; i <=100; i++){
//     if ( i%3 ===0 && i%5 ===0){
//         console.log(i);
//     }
// }

// Q10 — Break + Continue + Count

// let count = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i === 6) {
//         break;
//     }
//     if (i % 2 === 0) {
//         continue;
//     }
//     count++;
// }
// console.log(count);

// Q11 — Continue + Break + Count

// let count = 0;
// for (let i = 1; i <= 10; i++) {
//     if (i === 3 || i === 5) {
//         continue;
//     }
//     count++; //1,2,4,6,7,8
//     if (i === 8) {
//         break;
//     }
// }
// console.log(count);

// Q12 — Break + Count: First 5 odd numbers

// let count = 0; //tracker

// for(let i = 1; i <=100; i++){
//     if( i%2 !== 0){
//         count++;
//         console.log(i);
//     }
//     if (count === 10 ) break;
// }

// For Loop + Nested Loop: Print a pattern

// for (let i = 1; i <= 5; i++) {       // ROWS
//     let pattern = "";
//     for (let j = 1; j <= 5; j++) {   // STARS
//         pattern += "*";
//     }
//     console.log(pattern);
// }

// for (let i = 1; i <= 5; i++) {
//     let pattern = "";

//     // Spaces
//     for (let j = 1; j <= 5 - i; j++) {
//         pattern += " ";
//     }

//     // Stars
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }


// for (let i = 4; i >= 1; i--) {
//     let pattern = "";

//     // Spaces
//     for (let j = 1; j <= 5 - i; j++) {
//         pattern += " ";
//     }

//     // Stars
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }


// let i = 12;
// do{
//     console.log(i);
//     i++;    
// } while(i <= 10);

// let i = 12;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
