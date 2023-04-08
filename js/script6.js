let icon_menu = document.querySelector('.ham-menu');
let menu = document.querySelector('.nav-menu')

function mostrarMenu(){
menu.classList.toggle('active');
}

icon_menu.addEventListener('click',mostrarMenu);