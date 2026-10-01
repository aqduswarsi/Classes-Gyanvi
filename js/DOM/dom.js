// T1 Select the heading of a page by Id and change its text to "Welcome to Gyanvi Classes"

// let p = document.querySelector("#text");
// p.textContent = "Welcome to Gyanvi Classes";

// select all li elements and print their text using a loop.

// let lis = document.querySelectorAll("li")

// one way

// lis.forEach(function(val){
//     console.log(val.textContent);
// });

// second way

// for(let i = 0; i < lis.length; i++){
//     console.log(lis[i].textContent)
// }

// let abcd = document.querySelector("h1")
// abcd.textContent = "hello";
// console.log(abcd);

// let h1 = document.createElement("h1");
// h1.textContent = "welcome";
// document.querySelector("body").prepend(h1);

// let para = document.querySelector("#text");
// para.textContent = ("heyyyyyyyy");
// console.dir(para);

// let heading = document.querySelector("h1");

// window.addEventListener("keydown",function (dets){
//     if(dets.key === " "){
//         heading.textContent = "Space";
//     } else {
//         heading.textContent = dets.key;
//     }
// })

// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");

// btn.addEventListener("click", function(){
//     fileinp.click();
// });

// fileinp.addEventListener("change", function(dets){
//     const file = dets.target.files[0];
//     if(file){
//         btn.textContent = file.name;
//     }
// });

// let heading = document.querySelector("h1");
// heading.textContent = "bghwdgdg"
// console.dir(heading)

// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.youtube.com/");
// a.setAttribute("target","_blank")
// a.textContent = "Youtube"
// console.log(a.getAttribute);
// console.log(a.getAttribute("href"));
// a.removeAttribute("href")

// const h1 = document.createElement("h1");
// const body = document.querySelector("body");
// h1.textContent = "Google";
// // a.setAttribute("href", "https://www.google.com/");
// document.querySelector("body").prepend(h1);
// body.style.display = "flex";

// body.style.justifyContent = "center";

// body.style.alignItems = "center";

// body.style.height = "100vh";

// // document.body.style.margin = "0";

// h1.style.color = "Red";

// console.dir(h1);
// console.dir(body);

// const div = document.createElement("div");

// const p = document.createElement("p");
// const body = document.querySelector("body");

// p.textContent = "Kuch bhi";

// div.append(p);

// document.body.prepend(div);
// p.style.backgroundColor = "Green";
// body.style.display = "flex";
// body.style.alignItems = "center";
// body.style.justifyContent = "center";
// body.style.height = "100vh";
// console.log(div);

// const h1 = document.querySelector("h1");

// // h1.classList.add("hulu");
// h1.classList.toggle("hulu");
// const hulu = document.querySelector(".hulu");
// hulu.style.color = "red"

// console.dir(h1)