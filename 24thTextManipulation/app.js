//copybtn 
let copyBtn = document.getElementById('copy-btn')
//copytext
let copyText = document.getElementById('copy-text');
//movebtn
let moveBtn = document.getElementById('move-btn');
//movetext
let moveText = document.getElementById('move-text');
//output
let output = document.getElementById('output');

copyBtn.addEventListener('click', ()=>{
    
    copyToClipBoard(copyText.value);
})

moveBtn.addEventListener("click", ()=>{
    
    moveText.value = copyText.value;
})


copyText.addEventListener('click', ()=>this.select());

function copyToClipBoard(str){
    let outputContainer = document.querySelector('.right-side');
    let textArea = document.createElement('textarea');
    textArea.value = str;
    outputContainer.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    outputContainer.removeChild(textArea);
    output.innerHTML = "<h3>Content copied</h3>";
    output.classList.add("added");
    setTimeout(() => {
        output.classList.toggle("added");
        output.textContent = "";
    }, 2000);
}

// In this project i have learned creating element using JS. and we can place the created element in the line no 29 i have placed it, and in this project i got to know about the select(); method, and document.execCommand("copy"), this will help to copy the selected content and it will remove.

// and remaining you can understand through program
//Program explaination:-
// When user click on copyBtn it will call function copyToClipBoard with copy.text argument passes in the function. in the function we have taken the reference of the right-side container,and created a element textarea and we have assign it's value = str, which is an parameter of copyToClipBoard function, which contains the value of copyText area.