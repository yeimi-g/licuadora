var estadolicuadora ="apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound")
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if(estadolicuadora == "apagada"){
        estadolicuadora = "encendido";
        controlarSonido();
        licuadora.classList.add("active");
    }else {
        estadolicuadora = "apagada";
        controlarSonido();
        licuadora.classList.remove("active");
    }
}

function controlarSonido(){
    if(sonidoLicuadora.paused){
        botonLicuadora.onplay();
        sonidoLicuadora.onplay();
    } else {
        botonLicuadora.onplay();
        sonidoLicuadora.onpause();
        sonidoLicuadora.currentTime = 0;
    }
}