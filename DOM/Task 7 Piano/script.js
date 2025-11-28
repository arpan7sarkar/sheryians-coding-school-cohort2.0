const allKeys = document.querySelectorAll(".white, .black");

function playSound(keyElement) {
  if (!keyElement) return;

  const soundId = keyElement.dataset.sound;
  const audio = new Audio(`./songs/${soundId}.mp3`);
  audio.play();

  keyElement.classList.add("active");

  setTimeout(() => {
    keyElement.classList.remove("active");
  }, 150);
}

allKeys.forEach((key) => {
  key.addEventListener("click", () => playSound(key));
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  const keyElement = document.querySelector(
    `.white[data-key="${key}"], .black[data-key="${key}"]`
  );
  playSound(keyElement);
});
