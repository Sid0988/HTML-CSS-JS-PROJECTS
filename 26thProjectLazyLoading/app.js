let percentage = document.querySelector(".loading-text");
let background = document.querySelector(".bg-image");

console.log(background);

let load = 0;
let time = setInterval(bluring, 30);

function bluring() {

    load++;

    if(load > 99){
        clearInterval(time)
    }

    percentage.innerText = `${load}%`;
    percentage.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min))/(in_max - in_min) + out_min;
};

// scaled_value = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min  this is the formula we need to remember for linear interpolution
//
