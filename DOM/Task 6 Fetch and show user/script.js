import userData from "./data.js"
let sum =''
userData.forEach((elem)=>{
  console.log(elem.name)
  sum =sum + `<div class="card">
      <img src="${elem.profilePicture}" alt="0">
      <h2>${elem.name}</h2>
      <h3>${elem.currentPosition}</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>`
})
console.log(sum)
let main = document.querySelector('main')
main.innerHTML =sum