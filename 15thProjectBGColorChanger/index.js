let clickMe = document.getElementById('clickHere')
let colorId = document.getElementById('colors')

function ramdomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}

clickMe.addEventListener('click', ()=>{
    document.body.style.backgroundColor = ramdomColor();
    colorId.innerHTML = ramdomColor()
})

//comment section to understand code of for loop
//First Iteration (i = 0):
        // Random number generated: Let's say Math.random() produces 0.763284.
        // After Math.random()*16, we get 12.252544.
        // After Math.floor(Math.random()*16), it becomes 12.
        // Thus, letters[12] would yield the character 'C'. here it will select 12th letter from letters
        // 'C' is appended to the color string.
        // After the first iteration, color contains the character 'C'.

// //Second Iteration (i = 1):

// Random number generated: Let's say Math.random() produces 0.448239.
// After Math.random()*16, we get 7.171824.
// After Math.floor(Math.random()*16), it becomes 7.
// Thus, letters[7] would yield the character '7'.
// '7' is appended to the color string.
// After the second iteration, color contains the characters 'C7'.

