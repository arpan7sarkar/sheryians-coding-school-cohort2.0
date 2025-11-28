const main = document.querySelector(".main");
const download = document.querySelector(".download");
const loader = document.querySelector(".loader");
const loading = document.querySelector(".loading");
let val = 0;
const h1 = document.createElement("h1");
const btn = document.createElement("button");
download.addEventListener("click", () => {
  setInterval(() => {
    if (val === 101) {
      h1.textContent = "Download Complete";
      main.appendChild(h1);
      download.innerText = "Download agian";
      download.onclick = () => {
        val = 0;
        h1.remove();
        download.innerText = "Download";
      };
    }else{
        loading.style.width = val + "%";
        val++;
    }
  }, 10);
});
