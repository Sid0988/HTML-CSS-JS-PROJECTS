
    let signUp = document.getElementById("btn1");
    let closeBtn = document.getElementById("btn2");
    let showContainer = document.getElementById("modal");

    console.log(signUp);
    console.log(closeBtn);
    console.log(showContainer);

    signUp.addEventListener("click", ()=>{
        showContainer.classList.add("show-modal");
        console.log(signUp);
    });

    closeBtn.addEventListener("click", ()=>{
        showContainer.classList.remove("show-modal");
    });

