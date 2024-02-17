let playVideo = document.querySelector('.playImg');// this is for play img which is at bottom
let bgcover = document.querySelector('.nanu') // this is for background color 
let videoconatiner = document.querySelector(".active") // this is for video div or container
let closeVideo = document.querySelector('.close-icon') //this is for close icon
let mainVideo = document.querySelector(".atm")// this is for video

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
