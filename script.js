let btnplay = document.getElementById("btnplay");
let popup = document.getElementById("popup");
let audio = document.getElementById("audio");
let anya1 = document.getElementById("anya1");
let anya2 = document.getElementById("anya2");

btnplay.addEventListener("click", function () {
  audio.play();
  audio.volume = 0.4;
  popup.style.display = "none";
  anya1.style.display = "block";
  anya2.style.display = "block";
});

AOS.init();
