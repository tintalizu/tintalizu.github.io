//Agrega clase para mostrar el accordeon
let btn = document.querySelectorAll(".btn-item");
let item = document.querySelectorAll(".item");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (item[i].className == "item active") {
            removerClase();
        } else {
            item[i].classList.add("active");
        }
    })
};

function removerClase() {
    for (let i = 0; i < btn.length; i++) {
        item[i].classList.remove("active");
    }
};

//Elimina o agrega clase intercaladamente al hacer click para crear un navbar en responsive
let togglebtn = document.querySelector(".toggle");
let menuactive = document.querySelector(".menu-item");

togglebtn.addEventListener("click", function () {
    if (menuactive.className == "menu-item") {
        menuactive.classList.remove("menu-item");
        menuactive.classList.add("menu-item-active");
    } else {
        if (menuactive.className == "menu-item-active") {
            menuactive.classList.remove("menu-item-active");
            menuactive.classList.add("menu-item");
        }
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        menuactive.classList.remove("menu-item-active");
        menuactive.classList.add("menu-item");
    }
});

//Crear Modal
//1 Añadir un objeto de atributos a un elemento 
const addAttributes = function(element, attrObj){
    for (let attr in attrObj){
        if(attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
    }
}; 

//2 crear elementos con atributos e hijo
const createCustomElement = function(element,attributes,children){
    let customElement = document.createElement(element);
    if(children !== undefined) children.forEach(el => {
        if(el.nodeType){
            if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
        } else{
            customElement.innerHTML += el;
        }
    });
    addAttributes(customElement, attributes);
    return customElement;
};

//3 imprimir Modal en el DOM
const printModal = content => {
    //crear contenedor interno
    const modalContentEl = createCustomElement('div',{
        id: 'modal-content',
        class: 'modal-content'
    }, [content]),
    //crear contenedor externo
    modalContainerEl = createCustomElement('div', {
        id: 'modal-container',
        class: 'modal-container'
    }, [modalContentEl]);

    //imprimir modal
    document.body.appendChild(modalContainerEl);
    
    //remover modal
    const removeModal = () => document.body.removeChild(modalContainerEl);

    modalContainerEl.addEventListener('click', e =>{
        if(e.target === modalContainerEl) removeModal();
    });
};


const tituloModal1 = '<h1>1 tazón con 2 retratos</h1><div class="divId1"></div>';
const tituloModal2 = '<h1>1 tazón con 3 retratos</h1><div class="divId2"></div>';
const tituloModal3 = '<h1>Cuadro 18x13cm retrato individual</h1><div class="divId3"></div>';
const tituloModal4 = '<h1>Cuadro 30x25cm hasta 2 retratos</h1><div class="divId4"></div>';
const tituloModal5 = '<h1>Cuadro 40x30cm hasta 3 retratos</h1><div class="divId5"></div>';
const tituloModal6 = '<h1>Cuadro 50x40cm hasta 6 retratos</h1><div class="divId6"></div>';

let modalbtn1 = document.getElementById('show-modal1');
let modalbtn2 = document.getElementById('show-modal2');
let modalbtn3 = document.getElementById('show-modal3');
let modalbtn4 = document.getElementById('show-modal4');
let modalbtn5 = document.getElementById('show-modal5');
let modalbtn6 = document.getElementById('show-modal6');

modalbtn6.addEventListener('click', function(){
    printModal(tituloModal6);
});
modalbtn5.addEventListener('click', function(){
    printModal(tituloModal5);
});
modalbtn4.addEventListener('click', function(){
    printModal(tituloModal4);
});
modalbtn3.addEventListener('click', function(){
    printModal(tituloModal3);
});
modalbtn2.addEventListener('click', function(){
    printModal(tituloModal2);
});
modalbtn1.addEventListener('click', function(){
    printModal(tituloModal1);
});




