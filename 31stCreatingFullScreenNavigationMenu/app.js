//menu
let menu = document.querySelector(".menu");
// 3 dots
let dot = document.querySelector(".dots");
//highlight
let highlight = document.querySelector(".highlight");
//links
let links = document.querySelectorAll("li");

dot.addEventListener('click', function() {
    if(this.dataset.open === "close"){
        menu.style.clipPath = "circle(100% at 50% 50%)"
        this.dataset.open = "open"
    }else{
        menu.style.clipPath = "";
        this.dataset.open = "close"
        highlight.style = "";
    }
});

links.forEach((link)=>{
    link.addEventListener('pointerover', function() {
        const w = this.offsetWidth,
              h = this.offsetHeight,
              t = this.offsetTop;

              highlight.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px`;
    });
})


// In this project we have used clip path property, It allows you to specify a shape or path that determines what part of an element should be visible. Anything outside of this shape or path will be clipped and not displayed.
//clip-path: circle(20px at calc(100vw - 5vw) 31px); In this clip path code, we have defined the circle radius i,e 20px and we have defined x and y position using "at" keyword.
//w = this.offsetWidth,
// h = this.offsetHeight These are the JS properties return the layout width and height of an element.
//this.offsetTop is a JavaScript property that returns the distance between the top edge of the current element and the top edge of its offset parent. 


//highlight.style.cssText in this line of code, what is the cssText here ? Ans:-The cssText property of this object allows you to get or set the entire inline CSS styling for the element as a string.

//pointeverover is the property of css it's works like hover
//data-open is an HTML attribute that allows developers to store custom data associated with an element. This attribute is part of the data-* attribute family in HTML, where *

