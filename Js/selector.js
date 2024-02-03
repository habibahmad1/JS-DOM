// DOM Selection
// 1. document.getElementById()
// mengembalikan element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "grey";
judul.innerHTML = "Blogger";

// 2.getElementsByTagName
// mengembalikan HTML Collection
const paragraf = document.getElementsByTagName("p");

for (let i = 0; i < paragraf.length; i++) {
  paragraf[i].style.backgroundColor = "yellow";
}

// 3.getElementsByClassName
// mengembalikan HTML Collection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini diubah dari JS DOM";

// 4. querySelector
// mengembalikan element
const paragraf4 = document.querySelector("#b p");
paragraf4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(3)");
li2.style.backgroundColor = "purple";

// 5. querySelectorAll
// mengembalikan NOdeList
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "pink";
}
