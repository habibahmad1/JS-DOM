// const bungkus = document.querySelector(".card");
// const button = document.querySelector(".close");

// button.addEventListener("click", () => {
//   bungkus.style.display = "none";
// });

// DOM Traversal
// const close = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", (e) => {
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// pakai forEach
// close.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const card = document.querySelectorAll(".card");

// card.forEach((card) => {
//   card.addEventListener("click", () => {
//     alert("ok");
//   });
// });

const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
});
