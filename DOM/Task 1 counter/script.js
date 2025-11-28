const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const count = document.getElementById("count");

let counter = 0;

decrement.addEventListener("click", () => {
    counter--;
    count.textContent = counter;
});

increment.addEventListener("click", () => {
    counter++;
    count.textContent = counter;
});