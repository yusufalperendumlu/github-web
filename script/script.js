window.addEventListener("scroll", () => {
    document.body.style.setProperty("--scroll", window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false)


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

const title = document.title;
const changetitle = "Hoop! Hemserim nereye";

window.onblur = () => {
    document.title = changetitle; 
}

window.onfocus = () => {
    document.title = title;
}

