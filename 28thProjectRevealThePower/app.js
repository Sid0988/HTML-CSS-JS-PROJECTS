let password = document.getElementById("pass")
let eye = document.getElementById("eye");

eye.addEventListener("click", ()=>{
    if(password.type === "password"){
        password.type = "text"
    } else{
        password.type = "password"
    }
})