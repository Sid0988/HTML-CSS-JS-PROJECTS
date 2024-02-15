let typedText = document.getElementById('typedText');
let cursor = document.getElementById('cursor');
let words = ['Awesome', 'Fun', 'Super', 'Amazing', 'Cool', 'Famous'];
let index = 0;
let charIndex = 0
let typedDelay = 200;
let newLetterDelay = 2000;
let erasingDelay = 200;


document.addEventListener('DOMContentLoaded', ()=>{
    if(words.length){
        setTimeout(type, newLetterDelay)
    }
})


function type(){

    if(charIndex < words[index].length){
        typedText.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typedDelay)
    } else{
        setTimeout(erase, newLetterDelay)
    }

}

function erase(){
    if(charIndex > 0){
        typedText.textContent = words[index].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay)
    } else{
        index++;
        if(index >= words.length){
            index = 0;
        }
        setTimeout(type, typedDelay + 1100)
    }
}