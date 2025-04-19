const menuHamburguer = document.querySelector(".navMobileHamburguer")

menuHamburguer.addEventListener("click", ()=> {
    var menu = document.querySelector("header")
    menu.classList.toggle("active")
})



const showFormSignIn = document.querySelector(".linkFormSignIn")
showFormSignIn.addEventListener("click", ()=> {
    var form2 = document.querySelector(".formSignIn");
    form2.classList.add("active")
})


function showFormSignIn() {
    alert("Fio")
}

// linkFormSignUp

// linkFormSignUp