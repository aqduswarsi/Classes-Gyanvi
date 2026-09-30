// 1. basic addEventListener
document.getElementById("demo1btn").addEventListener("click", function () {
  document.getElementById("demo1log").textContent =
    "✅ Listener chal gaya! Button click detect hua.";
});

// 2. click
document.getElementById("clickDemo").addEventListener("click", function () {
  document.getElementById("clickResult").textContent =
    "click event fire hua ✅";
});

// mouseover
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", function () {
  hoverBox.textContent = "Mouse aa gaya! 👋";
});
hoverBox.addEventListener("mouseout", function () {
  hoverBox.textContent = "Mouse le jao yahan";
});

// keydown
document.getElementById("keyDemo").addEventListener("keydown", function (e) {
  document.getElementById("keyLog").textContent = "Key dabai: " + e.key;
});

// submit
document.getElementById("formDemo").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("formInput").value;
  document.getElementById("formLog").textContent =
    "Form submit hua! Naam: " + (name || "(khali)");
});

// change
document.getElementById("changeDemo").addEventListener("change", function (e) {
  document.getElementById("changeLog").textContent =
    "Select kiya: " + e.target.value;
});

// preventDefault demo
document.getElementById("pdForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("pdLog").textContent =
    "preventDefault() chal gaya — page reload nahi hua ✅";
});

// bubbling demo
function bubbleHandler(e) {
  const log = document.getElementById("bubbleLog");
  log.textContent +=
    (log.textContent ? "\n" : "") + "Clicked: " + e.currentTarget.id;
}
document.getElementById("inner").addEventListener("click", bubbleHandler);
document.getElementById("middle").addEventListener("click", bubbleHandler);
document.getElementById("outer").addEventListener("click", bubbleHandler);
document.getElementById("bubbleReset").addEventListener("click", function () {
  document.getElementById("bubbleLog").textContent = "";
});

// delegation demo
document.getElementById("delegateList").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    document.getElementById("delegateLog").textContent =
      "Delegation se pakda gaya: " + e.target.textContent;
  }
});
