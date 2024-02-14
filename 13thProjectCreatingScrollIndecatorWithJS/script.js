let indicator = document.querySelector(".scroll-indicator .progress");
let scrollingHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
// console.log(scrollingHeight);

function scrollWidth(){
    let scrollingTop = document.documentElement.scrollTop;
    let scrolled = (scrollingTop / scrollingHeight)*100
    indicator.style.width = `${scrolled}%`
}
window.addEventListener('scroll', scrollWidth);
