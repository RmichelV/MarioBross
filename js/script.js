let icon_menu = document.querySelector('.ham-menu');
let menu = document.querySelector('.nav-menu')
let btnReserva = document.querySelector('.btn-reservar')
let inicio = document.querySelector('.inicio');
let boletos = document.querySelector('.boletos');
let galeria = document.querySelector('.galeria');
let novedades = document.querySelector('.novedades');
let contacto = document.querySelector('.contacto');
let tienda = document.querySelector('.tienda');


function mostrarMenu(){
menu.classList.toggle('active');
}

function camPagInicio(){
location.href="../html/index.html"
}
function camPagBoletos(){
location.href="../html/index2.html"
}
function camPagGaleria(){
location.href="../html/index3.html"
}
function camPagNovedades(){
location.href="../html/index4.html"
}
function camPagContacto(){
location.href="../html/index5.html"
}
function camPagTienda(){
location.href="../html/index6.html"
}

icon_menu.addEventListener('click',mostrarMenu);


inicio.addEventListener('click',camPagInicio);
boletos.addEventListener('click',camPagBoletos);
galeria.addEventListener('click',camPagGaleria);
novedades.addEventListener('click',camPagNovedades);
contacto.addEventListener('click',camPagContacto);
tienda.addEventListener('click',camPagTienda);
btnReserva.addEventListener('click',camPagBoletos);