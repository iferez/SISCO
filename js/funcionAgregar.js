
// AGREGAR BOTONES MARCA
// FUNCIONA PERO SI TIENE ID, CREA UN CLON CON EL MISMO ID
let agregar = document.getElementById('agregarMarca');
let contenido = document.getElementById('contenedorMarcas');


agregar.addEventListener('click', e =>{
    e.preventDefault();
    let clonado = document.querySelector('.clonarMarca');
    let clon = clonado.cloneNode(true);

    contenido.appendChild(clon).classList.remove('clonarMarca');

    let remover_ocutar = contenido.lastChild.childNodes[1].querySelectorAll('span');
    remover_ocutar[0].classList.remove('ocultar');
});

contenido.addEventListener('click', e =>{
    e.preventDefault();
    if(e.target.classList.contains('puntero')){
        let contenedor  = e.target.parentNode.parentNode;
    
        contenedor.parentNode.removeChild(contenedor);
    }
});


