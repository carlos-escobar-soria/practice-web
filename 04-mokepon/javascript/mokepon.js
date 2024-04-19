// alert("hola, mundo js ");


function iniciarJuego() {

    let botonMascota = document.getElementById('boton-mascota');
    let botonFuego = document.getElementById('boton-fuego') ;
    let botonAgua = document.getElementById('boton-agua') ;
    let botonTierra = document.getElementById('boton-tierra') ;
    let botonReiniciar = document.getElementById('boton-reiniciar') ;
    let mascota = "";

    botonMascota.addEventListener('click', selectMascotaPlayer);
    function selectMascotaPlayer() {
        let hipoge = document.getElementById('hipoge');
        let capipepo = document.getElementById('capipepo');
        let langostelvis = document.getElementById('langostelvis');
        let tucapalma = document.getElementById('tucapalma');
        let pidos = document.getElementById('pidos');
        let mascotaJugador = document.getElementById('name');

        if(hipoge.checked){
            mascota = "hipoge";
            mascotaJugador.innerHTML = mascota;
        }else if(capipepo.checked){
            mascota = "capipepo";
            mascotaJugador.innerHTML = mascota;
        }else if(langostelvis.checked) {
            mascota = "langostelvis";
            mascotaJugador.innerHTML = mascota;
        }else if(tucapalma.checked) {
            mascota = "tucapalma";
            mascotaJugador.innerHTML = mascota;
        }else if(pidos.checked) {
            mascota = "pidos";
            mascotaJugador.innerHTML = mascota;
        }else{
            alert("selecciona una mascota");
        }
        
    }

  
    



}


window.addEventListener('load', iniciarJuego);