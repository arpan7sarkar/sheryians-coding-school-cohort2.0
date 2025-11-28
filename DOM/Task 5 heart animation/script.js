const card = document.querySelector(".card");
const icon = document.querySelector("i");

card.addEventListener("dblclick", function() {
  icon.style.transition = "none";
  icon.style.opacity = "0";
  icon.style.transform = "translate(-50%, -50%) scale(0) rotate(-180deg)";

  icon.style.opacity = "1";
  icon.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

  setTimeout(() => {
    icon.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
    icon.style.transform = "translate(-50%, -350%) scale(1) rotate(0deg)";
    icon.style.opacity = "0";
  }, 300);

  setTimeout(() => {
    icon.style.transition = "none";
    icon.style.transform = "translate(-50%, -50%) scale(0) rotate(-180deg)";
    icon.style.opacity = "0";
  }, 800);
});