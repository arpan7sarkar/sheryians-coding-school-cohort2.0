import data from "./data.js";

const card = document.querySelector(".card");
const predict = document.querySelector(".predict");

let randomData = data[Math.floor(Math.random() * data.length)];
console.log(randomData);

card.innerHTML = `
    ****
`;
predict.addEventListener("click", () => {
  randomData = data[Math.floor(Math.random() * data.length)];
  card.innerHTML = `
        <h2>${randomData.name}</h2>
        <p>${randomData.fullName}</p>
        <p>${randomData.lastTitleYear}</p>
        <p>${randomData.totalTitles}</p>
        <p>${randomData.captain}</p>
        <p>${randomData.state}</p>
    `;
  card.style.background = `linear-gradient(${randomData.primaryColour}, ${randomData.secondaryColour})`;
});
