const buttons = document.querySelectorAll(".button");

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
