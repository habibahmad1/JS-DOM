// tangkap button
const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.addEventListener("click", () => {
  //   document.body.style.backgroundColor = "purple";
  //   document.body.setAttribute("class", "warnaBody");
  document.body.classList.toggle("warnaBody");
});

//Buat tombol dengan javascript
const tAcakWarna = document.createElement("button");
const teks = document.createTextNode("Tombol Baru");

tAcakWarna.appendChild(teks);

tAcakWarna.setAttribute("type", "button");

tUbahWarna.after(tAcakWarna);

tAcakWarna.onclick = function () {
  let r = Math.round(Math.random() * 255 + 1);
  let g = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);
  let a = Math.random().toFixed(1);

  console.log(a);

  document.body.style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + "," + a + ")";
};

// tangkap slider
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  //   document.body.style.backgroundColor = "rgba (" + r + ",100,100,100)";
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
});

sHijau.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
});

sBiru.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
});

document.body.addEventListener("mousemove", (event) => {
  //cari posisi x
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const YPos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = "rgb(" + xPos + ", " + YPos + ",100)";
});
