let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion que aplica las animaciones de las habilidades
/*function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 100) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("base");
        habilidades[3].classList.add("java");
        habilidades[].classList.add("flutter");
        habilidades[].classList.add("comunicacion");
        habilidades[].classList.add("group");
        habilidades[].classList.add("creatividad");
        habilidades[].classList.add("puntualidad");
        habilidades[4].classList.add("respon");
    }
}*/


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}



