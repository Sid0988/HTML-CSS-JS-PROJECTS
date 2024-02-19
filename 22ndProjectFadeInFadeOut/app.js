let arrow = document.getElementById("arrow");

window.addEventListener('scroll', () => {
    let position = window.scrollY;
    if (position <= 100) { // Adjust this threshold as needed
        arrow.classList.remove("fade-out");
        arrow.classList.add("fade-in");
    } else {
        arrow.classList.remove("fade-in");
        arrow.classList.add("fade-out");
    }
});
