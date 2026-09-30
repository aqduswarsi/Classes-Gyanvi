// let username = "admin";
// let password = "1234";

// if (username === "admin" && password === "1234") {
//   console.log("login sccessfull");
// } else {
//   console.log("invalid login");
// }

// let numbers = [12,7,20,15,8,25];

// for (let num of numbers){
//     if (num > 10 ){
//         console.log(num);
        
//     }
// }




// let username = "admin";
// let password = "1234";
// if (username === "admin" && password === "1234") {
//     console.log("Login Successful");
// } else {
//     console.log("Invalid Login");
// }

// let numbers = [12, 7, 20, 15, 8, 25];
// for (let number of numbers) {
//     if (number > 10) {
//         console.log(number);
//     }
// }

// function calculateBill(price, quantity = 1) {
//     return price * quantity;
// }
// console.log(calculateBill(500, 2)); // 1000
// console.log(calculateBill(500));    // 500

// let subjects = ["HTML", "CSS", "JavaScript", "React", "Node"];
// // JavaScript ko TypeScript se replace karna
// subjects.splice(2, 1, "TypeScript");
// // First three subjects ki new array
// let firstThree = subjects.slice(0, 3);
// console.log("Updated:", subjects);
// console.log("First Three:", firstThree);

// let prices = [100, 200, 300, 400];
// let updatedPrices = prices.map(function (price) {
//     return price + 50;
// });
// console.log(updatedPrices);
// console.log(prices);

// let names = ["Aman", "Riya", "Rahul", "Ankit", "Sara"];
// let aNames = names.filter(function (name) {
//     return name.startsWith("A");
// });
// let riyaExists = names.includes("Riya");
// console.log(aNames);
// console.log("Riya exists:", riyaExists);

// let expenses = [500, 250, 800, 150, 300];
// let total = expenses.reduce(function (sum, expense) {
//     return sum + expense;
// }, 0);
// console.log("Total:", total);
// if (total > 1500) {
//     console.log("Budget Exceeded");
// } else {
//     console.log("Within Budget");
// }

// let employee = {
//     name: "Aqdus",
//     salary: 45000,
//     getDetails: function () {
//         console.log(`${this.name} earns ${this.salary}`);
//     }
// };
// employee.getDetails();
// let { name, salary } = employee;
// console.log(name);
// console.log(salary);

// let students = [
//     { name: "Aman", marks: 72 },
//     { name: "Riya", marks: 88 },
//     { name: "Karan", marks: 65 },
//     { name: "Sara", marks: 91 }
// ];
// let result = students
//     .filter(function (student) {
//         return student.marks >= 80;
//     })
//     .map(function (student) {
//         return student.name;
//     });
// console.log(result);

// let result = students
//     .filter(student => student.marks >= 80)
//     .map(student => student.name);
// console.log(result);


