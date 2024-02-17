let container = document.querySelector(".toggler-container")
let whiteCricle = document.querySelector(".circle");
let body = document.getElementsByTagName("body")

container.addEventListener('click', ()=>{
    whiteCricle.classList.toggle("move-right");
    container.classList.toggle("bg")
    document.body.classList.toggle("back")
})