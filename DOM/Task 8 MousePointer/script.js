const body=document.body
const cursor=document.querySelector('#cursor')
body.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.clientX+'px'
    cursor.style.top=e.clientY+'px'
})