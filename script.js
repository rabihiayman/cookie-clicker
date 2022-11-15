let score = 0;
let clickers = 1;
let autoClickers = 0;
let megaautoClickers = 0;
let gegaautoClickers = 0;

document.getElementById("score").addEventListener("click", function () {
  score = score + clickers;
  display_score();
});

document.getElementById("buy").addEventListener("click", function () {
  if (score >= 10) {
    clickers = clickers + 1;
    score = score - 10;
    document.getElementById("clicker").innerText = "x" + clickers;
    display_score();
  }
});

function manage_autoclickers() {
  score = score + clickers * autoClickers;
  display_score();
}
function display_score() {
  document.getElementById("scoreText").innerText = "Points : " + score;
}
document
  .getElementById("buy-auto-clicker")
  .addEventListener("click", function () {
    if (score >= 1000) {
      autoClickers = autoClickers + 1;
      score = score - 1000;
      document.getElementById("auto-clickers").innerText = "x" + autoClickers;
    }
  });

setInterval(manage_autoclickers, 1000);

function manage_autoclickers1() {
  score = score + clickers * autoClickers * megaautoClickers;
  display_score();
}
function display_score() {
  document.getElementById("scoreText").innerText = "Points : " + score;
}
document
  .getElementById("buy-auto-clicker1")
  .addEventListener("click", function () {
    if (score >= 10000) {
      megaautoClickers = megaautoClickers + 1;
      score = score - 10000;
      document.getElementById("auto-clickers1").innerText =
        "x" + megaautoClickers;
    }
  });

setInterval(manage_autoclickers1, 1000);

function manage_autoclickers2() {
  score = score + clickers * autoClickers * megaautoClickers * gegaautoClickers;
  display_score();
}
function display_score() {
  document.getElementById("scoreText").innerText = "Points : " + score;
}
document
  .getElementById("buy-auto-clicker2")
  .addEventListener("click", function () {
    if (score >= 100000) {
      gegaautoClickers = gegaautoClickers + 1;
      score = score - 100000;
      document.getElementById("auto-clickers2").innerText =
        "x" + gegaautoClickers;
    }
  });

setInterval(manage_autoclickers2, 1000);
