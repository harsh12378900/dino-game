let score = 0;
let crose = true;
let scorecont = document.querySelector(".scorecont");
audio=new Audio('music.mp3');
audiogo=new Audio('gameover.mp3');
setTimeout(() => {
  audio.play();
},1000);
document.onkeydown = function (e) {
  console.log("key code is :", e.keyCode);
  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
  if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 122 + "px";
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 122 + "px";
  }
};
setInterval(() => {
  dino = document.querySelector(".dino");
  gameover = document.querySelector(".gameover");
  obstacle = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );
  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  if (offsetX < 113 && offsetY < 52) {
    gameover.style.visibility = "visible";
    obstacle.classList.remove('obstacleAni')
  } else if (offsetX < 100 && crose ) {
    score += 1;
    updatescore(score);
    crose = false;
    setTimeout(() => {
      crose = true;
    }, 1000);
    setTimeout(() => {
      anidur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newdur = anidur - 0.1;
      obstacle.style.animationDuration = newdur + "s";
    }, 500);
  }
}, 10);
function updatescore(score) {
  scorecont.innerHTML = "Your score :" + score;
}
