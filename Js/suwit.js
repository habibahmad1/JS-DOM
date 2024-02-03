const skorComputer = document.querySelector(".skorKomputer");
const skorPlayer = document.querySelector(".skorPlayer");

let sComputer = 0;
let sPlayer = 0;

function getyPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval();
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");

pilihan.forEach((gambar) => {
  gambar.addEventListener("click", () => {
    // mengambil selektor dari class img-komputer
    const imgComputer = document.querySelector(".img-komputer");
    const pilihanComputer = getyPilihanComputer();
    const pilihanPlayer = gambar.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    setTimeout(() => {
      if (hasil == "KALAH!") {
        sComputer++;
        return (skorComputer.textContent = `Skor Computer : ${sComputer}`);
      }
      if (hasil == "MENANG!") {
        sPlayer++;
        return (skorPlayer.textContent = `Skor Player : ${sPlayer}`);
      }
    }, 2000);

    putar();

    setTimeout(() => {
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      // mengambil selektor dari class info
      const skor = document.querySelector(".info");
      // menampilkan skor
      skor.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// const pOrang = document.querySelector(".orang");
// const pSemut = document.querySelector(".semut");
// const skor = document.querySelector(".info");
// const imgComputer = document.querySelector(".img-komputer");
// pGajah.addEventListener("click", () => {
//   const pilihanComputer = getyPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   skor.innerHTML = hasil;

//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
// });
// pOrang.addEventListener("click", () => {
//   const pilihanComputer = getyPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   skor.innerHTML = hasil;

//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
// });
// pSemut.addEventListener("click", () => {
//   const pilihanComputer = getyPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   skor.innerHTML = hasil;

//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
// });
