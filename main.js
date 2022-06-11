const hamburger = document.getElementById("navIcon");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", (event) => {
    navList.classList.toggle("showNavIcon");
    console.log(navList.classList);
})

window.addEventListener("resize", (event) => {
    if (document.body.clientWidth > 700) {
        navList.classList.remove("showNavIcon")
    }
})