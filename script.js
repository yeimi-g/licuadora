var estadolicuadora ="apagada";
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if(estadolicuadora == "apagada"){
        estadolicuadora = "encendido";
        licuadora.classList.add("active");
    }else {
        estadolicuadora = "apagada";
        licuadora.classList.remove("active");
    }
}
