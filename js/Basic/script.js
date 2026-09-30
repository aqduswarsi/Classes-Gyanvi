// // Scopes 


// Block scope

// {
// let a = 12;
// console.log(a);
// }

// console.log(a);

// // Global Scope 

// var b = "fyhf"
// console.log(b)

// // function scope 

// function abcd (){
//     if(true){
//        let c = "dr strange" 
//        console.log(c);
//     }
//     // console.log(c);
// }
// abcd()


// Data types: string, number , boolean, null, undefined, object

// let name = "Adarsh";
// console.log(name);
// console.log(typeof name);

// let age = 13;
// console.log(age); // Number
// console.log(typeof age);


// let a = true;
// console.log(a); //boolean
// console.log(typeof a);


// let b = null;
// console.log(b) //object
// console.log(typeof b);


// let address;
// console.log(address) // undefined
// console.log(typeof address);


// let user = {
//     name : "adarsh",
//     age : 23,
//     city : "Gorakhpur"
// }
// console.log(user.age);
// console.log(typeof user);


// Type Conversion


// let name = "adarsh";
// name = Number(name);
// console.log(name);
// console.log(typeof name);

//string conversion

// let price = "undefined";
// price = Boolean(price);
// console.log(price);
// console.log(typeof price);


// let x = 3;
// let y = ++x;

// console.log(x,y);






//Q1

// let prize=1200;
// let discount=10;

// let discountamount=(prize*discount)/100;
// let final=prize-discountamount;

// if(discount=0){
//     console.log("no discount");
    
// }
// else{
//     console.log(discountamount);
    
//     console.log(final);
    
// }

//Q3

// let numbers = [12, 7, 20, 15, 8, 25];

// for(let num of numbers){
//     if(num>10){
//         console.log(num);
        
//     }
// }

//Q4

// function calculateBill(price, Quantity=1){
//     console.log(price*Quantity);
// }
// calculateBill(500,2);
// calculateBill(500);

//Q5

// let subjects = ["HTML", "CSS", "JavaScript", "React", "Node"];

// subjects.splice(2,1,"Typescript")
// console.log(subjects);

// arr1=subjects.slice(0,3)

// console.log(arr1);

