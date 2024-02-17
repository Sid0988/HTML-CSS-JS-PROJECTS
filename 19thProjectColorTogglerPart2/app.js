let container = document.getElementById("check");

container.addEventListener('click', ()=>{
    // if(container.checked === true){
    //     document.body.style.backgroundColor = "black";
    // } else{
    //     document.body.style.backgroundColor = "white";
    // }

    container.checked === true ? document.body.style.backgroundColor = "black" :
    document.body.style.backgroundColor = "white";

})