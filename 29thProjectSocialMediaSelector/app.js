let selector = document.getElementById("select-field");
let list = document.getElementById("list");
let selectText = document.getElementById("select-text");
let arrow = document.getElementById("arrow-icon");
let options = document.querySelectorAll(".options");    

console.log(selector);
console.log(list);
console.log(selectText);
console.log(arrow);
console.log(options);

selector.addEventListener("click", ()=>{
    list.classList.toggle("hide");
    arrow.classList.add("rotate");
})

for(ele of options){
    ele.onclick = function(){
        selectText.innerHTML = this.textContent
        list.classList.toggle("hide");
        arrow.classList.add("rotate");
    };
}

// in this program I have used for of loop, It will help to get every element of options or array. 