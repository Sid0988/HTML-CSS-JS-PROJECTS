let toggled = document.getElementById('toggle');
let navigation = document.getElementById('nav');


toggled.addEventListener('click', ()=>{
    navigation.classList.toggle("active")
})