// alert("hola, mundo js ");

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let ataqueJugador = '';
let ataqueAleatorioEnemigo = "";
let vidasJugador = 3;
let vidasEnemigo = 3;



function iniciarJuego() {
    let botonMascota = document.getElementById('boton-mascota');
    botonMascota.addEventListener('click', selectMascotaPlayer);
    let botonFuego = document.getElementById('boton-fuego') ;
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua') ;
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra') ;
    botonTierra.addEventListener('click', ataqueTierra);
    let botonReiniciar = document.getElementById('boton-reiniciar') ;
    botonReiniciar.addEventListener('click', reset);
}

function reset(){
    location.reload();
}

function combate() {
    let ganador = false;
    let liveEnemigo = document.getElementById('live-enemigo');
    if(ataqueJugador == "Fuego"&& ataqueAleatorioEnemigo == "Tierra"){
        ganador = true;
        --vidasEnemigo;
        liveEnemigo.innerHTML = vidasEnemigo;
    }else if(ataqueJugador == "Agua"&& ataqueAleatorioEnemigo == "Fuego"){
        ganador = true;
        --vidasEnemigo;
        liveEnemigo.innerHTML = vidasEnemigo;
    }else if(ataqueJugador == "Tierra"&& ataqueAleatorioEnemigo == "Agua"){
        ganador = true;
        --vidasEnemigo;
        liveEnemigo.innerHTML = vidasEnemigo;
    }
    return ganador;
}

function crearMensaje() {
    let live = document.getElementById('live');
    let parrafo = document.createElement('p');
    let mensajeGanador = "";
    
    if(ataqueJugador == ataqueAleatorioEnemigo) {
        mensajeGanador = 'Empate';
    }else if(combate()) {
        mensajeGanador = "Ganaste";
    }else{
        mensajeGanador = "Perdiste";
        --vidasJugador;
        live.innerHTML = vidasEnemigo;
    }

    parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, las mascotas del enemigo atacó con ${ataqueAleatorioEnemigo} - ${mensajeGanador}`; 
    let mensajes = document.getElementById('mensajes');
    mensajes.appendChild(parrafo);
    
    if(vidasJugador == 0){
        alert(`Gano el enemigo`);
    }else if(vidasEnemigo == 0){
        alert(`Gano el jugador`);
    }
}

function ataqueEnemigo() {
    const ataque = ['Fuego', 'Agua', 'Tierra'];
    const indiceAleatorio = aleatorio(0, 2);
    ataqueAleatorioEnemigo = ataque[indiceAleatorio];
    crearMensaje();
}

function ataqueFuego(){
    ataqueJugador = 'Fuego';
    ataqueEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'Agua';
    ataqueEnemigo();
}

function ataqueTierra(){
    ataqueJugador = 'Tierra';
    ataqueEnemigo()
}

function selectMascotaPlayer() {
    let hipoge = document.getElementById('hipoge');
    let capipepo = document.getElementById('capipepo');
    let langostelvis = document.getElementById('langostelvis');
    let tucapalma = document.getElementById('tucapalma');
    let pidos = document.getElementById('pidos');
    let mascotaJugador = document.getElementById('name');
    let mascota = "";
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
    selectMascotaEnemigo()
}

function selectMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    let nameMascotaEnemigo = document.getElementById('name-mascota-enemigo');
     if(ataqueAleatorio == 1) {
        nameMascotaEnemigo.innerHTML = "Hipodope";
    }else if(ataqueAleatorio == 2) {
        nameMascotaEnemigo.innerHTML = "Capipepo";
    }else if(ataqueAleatorio == 3) {
        nameMascotaEnemigo.innerHTML = "Ratigueya";
    }
}

window.addEventListener('load', iniciarJuego);

