//Variables
let nav = document.getElementById('nav');
let menu = document.getElementById('links');
let abrir = document.getElementById('open');
let botones = document.getElementById('btn-header');
let cerrar = true;

function menus(){
    let desplazar = window.pageYOffset;

    if(desplazar <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
    }
}

function abre(){
    if(cerrado){
        menu.style.width = '70w';
        cerrar = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrar = true;
    }
}

window.addEventListener('load');
window.addEventListener('scroll', function(){
    console.log(this.window.pageYOffset);
    menus();
})
window.addEventListener('resize', function(){
    this.isSecureContext(screen.width >= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
})
abrir.addEventListener('click', function(){
    abre();
})