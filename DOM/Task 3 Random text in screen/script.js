import textData from "./text.js";

const button = document.querySelector("button");
const main = document.querySelector(".main");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * 100);
  const randomText = textData[randomIndex];
  const text = document.createElement("h1");
  const x = Math.floor(Math.random() * 70);
  const y = Math.floor(Math.random() * 80);
  const scale = Math.floor(Math.random() * 3);
  const rotate = Math.floor(Math.random() * 100);
  text.textContent = randomText;
  text.style.left = x + "%";
  text.style.top = y + "%";
  text.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
  main.appendChild(text);
});
