let icon_menu = document.querySelector('.ham-menu');
let menu = document.querySelector('.nav-menu')

function mostrarMenu(){
menu.classList.toggle('active');
}

icon_menu.addEventListener('click',mostrarMenu);

let inicio = document.querySelector('.inicio');
let boletos = document.querySelector('.boletos');
let galeria = document.querySelector('.galeria');
let novedades = document.querySelector('.novedades');
let contacto = document.querySelector('.contacto');
let tienda = document.querySelector('.tienda');


function camPagInicio(){
location.href="../php/index.html"
}
function camPagBoletos(){
location.href="../php/index2.html"
}
function camPagGaleria(){
location.href="../php/index3.html"
}
function camPagNovedades(){
location.href="../php/index4.html"
}
function camPagContacto(){
location.href="../php/index5.html"
}
function camPagTienda(){
location.href="../php/index6.html"
}

inicio.addEventListener('click',camPagInicio);
boletos.addEventListener('click',camPagBoletos);
galeria.addEventListener('click',camPagGaleria);
novedades.addEventListener('click',camPagNovedades);
contacto.addEventListener('click',camPagContacto);
tienda.addEventListener('click',camPagTienda);