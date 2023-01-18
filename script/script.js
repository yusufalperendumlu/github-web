const sideBar = document.getElementById("bar");
const menuBtn = document.getElementById("menubtn");
const openmenu = document.getElementById("activeicon");

menuBtn.addEventListener("click", () => {
    sideBar.classList.add("sideActive");
    menuBtn.setAttribute("style","visibility: hidden;");
    openmenu.setAttribute("style","visibility: visible;");
})

openmenu.addEventListener("click", () => {
    sideBar.classList.remove("sideActive");
    menuBtn.setAttribute("style","visibility: visible;");
    openmenu.setAttribute("style","visibility: hidden;");
})



