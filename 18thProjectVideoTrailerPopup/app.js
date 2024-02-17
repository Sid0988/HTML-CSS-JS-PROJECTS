let playVideo = document.querySelector('.playImg');
let bgcover = document.querySelector('.nanu')
let videoconatiner = document.querySelector(".active")
let closeVideo = document.querySelector('.close-icon')
let mainVideo = document.querySelector(".atm")

playVideo.addEventListener('click', ()=>{
    playVideo.classList.add("btn2")
    videoconatiner.classList.remove("active")
})

closeVideo.addEventListener('click', ()=>{
    playVideo.classList.remove("btn2");
    videoconatiner.classList.add("active");
    mainVideo.pause();
    mainVideo.currentTime = 0;
})
