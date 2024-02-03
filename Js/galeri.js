const container = document.querySelector(".container");
const hero = document.querySelector(".hero");
const thumbs = document.querySelector(".thumb");

container.addEventListener("click", (e) => {
  //! cek apakah yg di klik thumbnail
  if (e.target.className == "thumb") {
    hero.src = e.target.src;
    hero.classList.add("fade");
    setTimeout(() => {
      hero.classList.remove("fade");
    }, 500);

    thumbs.forEach((thumb) => {
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
