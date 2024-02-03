// membuat paragrag baru
const pBaru = document.createElement("p");
const teks = document.createTextNode("Paragraf Baru");

// simpan tulisan ke paragraf
pBaru.appendChild(teks);

// tampilkan paragraf yang telah dibuat
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// buat list baru
const liBaru = document.createElement("li");
const tLi = document.createTextNode("ini list baru");

//simpan tulisan ke list
liBaru.appendChild(tLi);

const ul2 = document.querySelector("section#b ul");
const li2 = ul2.querySelector("li:nth-child(2)");

ul2.insertBefore(liBaru, li2);

// menghapus element
const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);
