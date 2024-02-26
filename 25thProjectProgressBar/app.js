let prvBtn = document.querySelector(".btn1")
let nxtBtn = document.querySelector(".btn2");
let circles = document.querySelectorAll(".active");
let progress = document.getElementById("progress");

let activeIndex = 1;

nxtBtn.addEventListener("click", ()=>{
    activeIndex++;
    if(activeIndex > circles.length){
        activeIndex = circles.length;
    }

    updateUI();
})

prvBtn.addEventListener("click", ()=>{
    activeIndex--;
    if(activeIndex < 1){
        activeIndex = 1;
    }

    updateUI();
})

function updateUI(){
    circles.forEach((circute, index)=>{
        if(index < activeIndex){
            circute.classList.add("circle")
        }else{
            circute.classList.remove("circle");
        }
    });

    let totalCircles = document.querySelectorAll(".circle");
    progress.style.width = (totalCircles.length - 1) / (circles.length - 1) * 100 + "%";
     console.log(activeIndex)
     console.log(circles.length)

     if (activeIndex === 1) {
        console.log(prvBtn);
        prvBtn.disabled = true;
      } else if (activeIndex === circles.length) {
        nxtBtn.disabled = true;
      } else {
        prvBtn.disabled = false;
        nxtBtn.disabled = false;
      }
}

//Here we kept activeIndex = 1; and with the forEach loop we iterate over the each circle, in the forEach method we pass circut and index, circute reprents circle of the progress bar and index represent index no of the circle. 

// 1st Iteration
//in forEach loop index no is = 0 and less then activeIndex so it will go if statement and it will add circle class list to it. 
// and it will go to the 2nd circle and it's index no will be 1 which is less than activeIndex, because activeIndex no is increased when user will click on nxtBtn, so here activeIndex is 2. which is greater than index no, so again it will add the circle class to the 2nd circle
// and again it will go to the 3rd circle and index no of 3rd circle is 2 which is equal to the activeIndex so it will not enter to the if statement further. It's all happen when user clicks on nxtBtn for the once.
