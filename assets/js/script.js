const menuHamburguer = document.querySelector (".menuHamburguer");

menuHamburguer.addEventListener("click", ()=> {
    const menu = document.querySelector("header");
    menu.classList.toggle("active");
})