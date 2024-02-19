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