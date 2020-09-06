let butQ = document.getElementById(`Q`).addEventListener("click", playAudio1);
butQ = document.addEventListener("keydown", function () {
  if (event.keyCode === 81) {
    playAudio1();
    console.log(event.keyCode);
  }
});
const audQ = document.getElementById("sound1");
function playAudio1() {
  audQ.play();
}
function pauseAudio1() {
  audQ.pause();
}

let butW = document.getElementById(`W`).addEventListener("click", playAudio2);
butW = document.addEventListener("keydown", function () {
  if (event.keyCode === 87) {
    playAudio2();
    console.log(event.keyCode);
  }
});
const audW = document.getElementById("sound2");
function playAudio2() {
  audW.play();
}

let butE = document.getElementById(`E`).addEventListener("click", playAudio3);
butE = document.addEventListener("keydown", function () {
  if (event.keyCode === 69) {
    playAudio3();
    console.log(event.keyCode);
  }
});
const audE = document.getElementById("sound3");
function playAudio3() {
  audE.play();
}

let butR = document.getElementById(`R`).addEventListener("click", playAudio4);
butR = document.addEventListener("keydown", function () {
  if (event.keyCode === 82) {
    playAudio4();
    console.log(event.keyCode);
  }
});
const audR = document.getElementById("sound4");
function playAudio4() {
  audR.play();
}

let butT = document.getElementById(`T`).addEventListener("click", playAudio5);
butT = document.addEventListener("keydown", function () {
  if (event.keyCode === 84) {
    playAudio5();
    console.log(event.keyCode);
  }
});
const audT = document.getElementById("sound5");
function playAudio5() {
  audT.play();
}

let butY = document.getElementById(`Y`).addEventListener("click", playAudio6);
butY = document.addEventListener("keydown", function () {
  if (event.keyCode === 89) {
    playAudio6();
    console.log(event.keyCode);
  }
});
const audY = document.getElementById("sound6");
function playAudio6() {
  audY.play();
}
