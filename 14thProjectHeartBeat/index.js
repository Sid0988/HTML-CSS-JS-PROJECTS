let grayHeart = document.querySelector(".gray-heart")
let redHeart = document.querySelector(".red-heart")

grayHeart.addEventListener('click', ()=>{
    redHeart.classList.add('animation')
    redHeart.classList.add('fill-color')
})

redHeart.addEventListener('click', ()=>{
    redHeart.classList.remove('animation')
    redHeart.classList.remove('fill-color')
})