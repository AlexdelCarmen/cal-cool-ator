let displayArray = [];

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

display.textContent = 0;

console.log(buttons);

function pressEnd(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("pressed");
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    button.classList.add("pressed");
  })
);

buttons.forEach((button) => button.addEventListener("transitionend", pressEnd));

function keyPress(e) {
  const keys = document.querySelector(`.button[data-key='${e.keyCode}']`);
  if (!keys) return;
  keys.classList.add("pressed");
  console.log(e.key);
  displayArray.push(e.key);
  let displayContent = displayArray.toString();
  display.textContent = displayContent.replaceAll(",", "");
}

window.addEventListener("keydown", keyPress);
