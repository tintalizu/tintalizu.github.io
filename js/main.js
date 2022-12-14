//Agrega clase para mostrar el accordeon
let btn = document.querySelectorAll(".info__item--btn");
let item = document.querySelectorAll(".info__item");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (item[i].className == "info__item accordeon") {
            removerClase();
        } else {
            item[i].classList.add("accordeon");
        }
    })
};

function removerClase() {
    for (let i = 0; i < btn.length; i++) {
        item[i].classList.remove("accordeon");
    }
};

//Elimina o agrega clase intercaladamente al hacer click para crear un navbar en responsive
let togglebtn = document.getElementById("toggle");
let menuactive = document.getElementById("menu");
let listactive = document.getElementById("list");

togglebtn.addEventListener("click", function () {
    if (menuactive.className == "nav__menu") {
        listactive.classList.add("action");
        menuactive.classList.add("action");
    } else {
        listactive.classList.remove("action");
        menuactive.classList.remove("action");
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        menuactive.classList.remove("action");
    }
});
