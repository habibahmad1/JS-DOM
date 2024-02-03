// pakai event handler

const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarna;

// function ubahWarna() {
//   p2.style.backgroundColor = "red";
// }
// pakai addEventListener
// pilih paragraf yang akan dijadikan tombol generate
const p4 = document.querySelector("#b p");
//buat fungsi click
p4.addEventListener("click", () => {
  //cari parent dari tag yang ingin di ubah
  const ul = document.querySelector("#b ul");

  // buat variabel baru dari tag yang akan generated
  const liBaru = document.createElement("li");

  // isi teks untuk berada di dalam tag li yang baru
  const isiLi = document.createTextNode("Li Baru");

  // ubah warna liBaru yang telah dibuat
  liBaru.style.backgroundColor = "red";

  // gabungkan liBaru dan teksLi
  liBaru.appendChild(isiLi);

  // cetak kedalam ul sehingga jadi liBaru
  ul.appendChild(liBaru);
});

// p2.onclick = function () {
//   p2.style.backgroundColor = "pink";
// };
// p2.onclick = function () {
//   p2.style.color = "pink";
// };

p2.addEventListener("mouseenter", () => {
  p2.style.backgroundColor = "pink";
});
p2.addEventListener("mouseleave", () => {
  p2.style.backgroundColor = "white";
});
p2.addEventListener("click", () => {
  p2.style.backgroundColor = "purple";
});
