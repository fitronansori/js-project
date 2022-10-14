const colors = ["green", "red", "blue", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const rndmColor = getRandomColor();
  console.log(rndmColor);

  document.body.style.backgroundColor = colors[rndmColor];
  color.textContent = colors[rndmColor];
});

function getRandomColor() {
  const myColor = Math.floor(Math.random() * colors.length);
  return myColor;
}
