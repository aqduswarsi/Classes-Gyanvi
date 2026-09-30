// JavaScript Objects — Intermediate Level
// 20 Practice Questions with Answers

// Q1. Object Destructuring + Rename

// let user = {
//   name: "Aqdus",
//   age: 24,
//   city: "Gorakhpur",
// };

// let { name: username, age: userAge } = user;

// console.log(username);
// console.log(userAge);

// // Output:
// // Aqdus
// // 24

// // Q2. Default Value in Destructuring

// let user2 = {
//   name: "Aqdus",
//   age: 24,
// };

// let { name, city = "Delhi" } = user2;

// console.log(name);
// console.log(city);

// // Output:
// // Aqdus
// // Delhi

// // Q3. Nested Destructuring

// let user3 = {
//   name: "Aqdus",
//   address: {
//     city: "Gorakhpur",
//     pincode: 273001,
//   },
// };

// let {
//   address: { city: userCity },
// } = user3;

// console.log(userCity);

// // Output:
// // Gorakhpur

// // Q4. Spread + Override

// let user4 = {
//   name: "Aqdus",
//   age: 24,
// };

// let updatedUser = {
//   ...user4,
//   age: 25,
//   city: "Delhi",
// };

// console.log(updatedUser);

// // Output:
// // { name: "Aqdus", age: 25, city: "Delhi" }

// // Q5. Spread Order

// let obj1 = {
//   name: "Aqdus",
//   age: 24,
// };

// let obj2 = {
//   age: 30,
//   city: "Delhi",
// };

// let result = {
//   ...obj1,
//   ...obj2,
// };

// console.log(result);

// // Output:
// // { name: "Aqdus", age: 30, city: "Delhi" }

// // Q6. Object Reference

// let obj3 = {
//   name: "Aqdus",
// };

// let obj4 = obj3;

// obj4.name = "Ansh";

// console.log(obj3.name);

// // Output:
// // Ansh

// // Q7. Shallow Copy + Nested Object

// let user5 = {
//   name: "Aqdus",
//   address: {
//     city: "Gorakhpur",
//   },
// };

// let user6 = { ...user5 };

// user6.address.city = "Delhi";

// console.log(user5.address.city);

// // Output:
// // Delhi

// // Q8. Properly Copy a Nested Object

// let user7 = {
//   name: "Aqdus",
//   address: {
//     city: "Gorakhpur",
//   },
// };

// let user8 = {
//   ...user7,
//   address: {
//     ...user7.address,
//   },
// };

// user8.address.city = "Delhi";

// console.log(user7.address.city);
// console.log(user8.address.city);

// // Output:
// // Gorakhpur
// // Delhi

// // Q9. Computed Property

// let key = "email";

// let user9 = {
//   name: "Aqdus",
//   [key]: "aqdus@gmail.com",
// };

// console.log(user9.email);

// // Output:
// // aqdus@gmail.com

// // Q10. Dynamic Property

// let key2 = "age";
// let value = 24;

// let user10 = {
//   name: "Aqdus",
//   [key2]: value,
// };

// console.log(user10);

// // Output:
// // { age: 24 }

// // Q11. Object.keys() + Loop

// let user11 = {
//   name: "Aqdus",
//   age: 24,
//   city: "Gorakhpur",
// };

// Object.keys(user11).forEach((key) => {
//   console.log(key, user11[key]);
// });

// // Output:
// // name Aqdus
// // age 24
// // city Gorakhpur

// // Q12. Object.entries()

// let user12 = {
//   name: "Aqdus",
//   age: 24,
// };

// Object.entries(user12).forEach(([key, value]) => {
//   console.log(key, value);
// });

// // Output:
// // name Aqdus
// // age 24

// // Q13. Check if a Property Exists

// let user13 = {
//   name: "Aqdus",
//   age: 24,
// };

// console.log("name" in user13);
// console.log("city" in user13);name: "Aqdus", 

// // Output:
// // true
// // false

// // Q14. Object.freeze()

// let user14 = {
//   name: "Aqdus",
//   age: 24,
// };

// Object.freeze(user14);

// user14.age = 30;

// console.log(user14.age);

// // Output:
// // 24

// // Q15. Object.seal()

// let user15 = {
//   name: "Aqdus",
//   age: 24,
// };

// Object.seal(user15);

// user15.age = 30;
// user15.city = "Delhi";

// console.log(user15);

// // Output:
// // { name: "Aqdus", age: 30 }

// // Q16. this Keyword + Method

// let user16 = {
//   name: "Aqdus",

//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// user16.greet();

// // Output:
// // Aqdus

// // Q17. Object Method + Calculation

// let product = {
//   price: 1000,
//   quantity: 3,

//   total() {
//     return this.price * this.quantity;
//   },
// };

// console.log(product.total());

// // Output:
// // 3000

// // Q18. Object.assign()

// let user17 = {
//   name: "Aqdus",
//   age: 24,
// };

// Object.assign(user17, {
//   age: 25,
//   city: "Delhi",
// });

// console.log(user17);

// // Output:
// // { name: "Aqdus", age: 25, city: "Delhi" }

// // Q19. Array → Object with Object.fromEntries()

// let entries = [
//   ["name", "Aqdus"],
//   ["age", 24],
//   ["city", "Gorakhpur"],
// ];

// let user18 = Object.fromEntries(entries);

// console.log(user18);

// // Output:
// // { name: "Aqdus", age: 24, city: "Gorakhpur" }

// // Q20. Deep/Nested Copy Challenge

// let user19 = {
//   name: "Aqdus",
//   age: 24,
//   address: {
//     city: "Gorakhpur",
//   },
// };

// let user20 = {
//   ...user19,
//   age: 25,
//   address: {
//     ...user19.address,
//     city: "Delhi",
//   },
// };

// user20.name = "Ansh";

// console.log(user19);
// console.log(user20);

// Output:
// {
//     name: "Aqdus",
//     age: 24,
//     address: {
//         city: "Gorakhpur"
//     }
// }

// {
//     name: "Ansh",
//     age: 25,
//     address: {
//         city: "Delhi"
//     }
// }

// QUICK REVISION

// { ...obj }                    → Shallow Copy
// structuredClone(obj)          → Deep Clone
// Object.keys(obj)              → Array of keys
// Object.values(obj)            → Array of values
// Object.entries(obj)           → Array of [key, value]
// Object.fromEntries(array)     → Object
// Object.assign()               → Copy/Merge properties
// Object.freeze()               → No modification
// Object.seal()                 → Modify existing, no add/delete
// [key]                         → Computed Property
// this.property                 → Current object property


// const obj = {
//     name : "Kalpana",
//     address :{
//         city : "Hata",
//         pin : 273001,
//     },
// };

// let obj2 = {...obj};
// let obj2 = JSON.parse(JSON.stringify(obj));
// let obj2 = structuredClone(obj);

// obj2.address.city = "Gorakhpur";
// obj2.name = "Khushi"    

// console.log(obj?.addresses?.pin); // optional chaining
// console.log(obj2?.addresses?.city);
// console.log(typeof obj);

// console.log(obj);

// let user = {
//   name : "Aqdus",
//   address : {
//     city : "gorakhpur",
//   },
// };


// let user2 = {...user};
// user2.address.city = "delhi";
// user2.name = "ansh";
// console.log(user2);
// console.log(user);


// let {lat,lng} = user.address.location;
// console.log(lat, lng);

// console.log(user.address.location.lng);SON.parse

// let obj = {
//   name : "sam",
//   email : "fsfsg@Tex.com",
//   phone : 9228786625,
// }

// // let obj2 = {...obj};

// let obj2 = Object.assign({city : "gorakhpur"},obj)

// console.log(obj2);


// for (let key in obj){
//       console.log(`${key} : ${obj[key]}`);
// }

let user = {
    name : "aqdus",
    class : "javascript",
    number : 7317810608,
}

let user2 = {...user}; 
