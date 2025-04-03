var estadolicuadora ="apagada";
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if(estadolicuadora == "apagada"){
        estadolicuadora = "encendido";
        console.log("me encendiste");
    }else {
        estadolicuadora = "apagada";
        console.log("me apagaste");
    }
}
