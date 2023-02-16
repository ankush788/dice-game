var ans1;
var ans2;

function myfun() {
  var ans = Math.floor(Math.random() * 6) + 1;

  var ans1 = Math.floor(Math.random() * 6) + 1;

    result(ans, ans1);
  document
    .querySelectorAll(".dice img")[0]
    .setAttribute("src", "images/dice" + ans + ".png");
  document
    .querySelectorAll(".dice img")[1]
    .setAttribute("src", "images/dice" + ans1 + ".png");
}

function result(ans, ans1) {
  if (ans > ans1) {
    document.querySelector("#resultBoard").textContent =
      " player 1 wins !";
  } else if (ans === ans1) {
    document.querySelector("#resultBoard").textContent = " draw !!";
  } else {
    document.querySelector("#resultBoard").textContent =
      "player 2 wins !";
  }
  return;
}
