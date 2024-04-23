
const botonMascota = document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego') ;
const botonAgua = document.getElementById('boton-agua') ;
const botonTierra = document.getElementById('boton-tierra') ;
const botonReiniciar = document.getElementById('boton-reiniciar') ;

let hipodoge;
let capipepo;
let ratigueya;


const nameMascotaEnemigo = document.getElementById('name-mascota-enemigo');
const mensajes = document.getElementById('mensajes');

const liveEnemigo = document.getElementById('live-enemigo');
const live = document.getElementById('live');

const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

let ataqueJugador = '';
let ataqueAleatorioEnemigo = "";
let vidasJugador = 3;
let vidasEnemigo = 3;
let opcionDeMokepones;

class Mokemon{
    
    constructor(name, photo, vida) {
        this.name = name;
        this.photo = photo;
        this.vida = vida;
        this.attack = [];
    }
}

let mokemonHipodoge = new Mokemon("Hipodoge", "./assert/mokepons_mokepon_hipodoge_attack.png", 3);
let mokemonCapipepo = new Mokemon("Capipepo", "./assert/mokepons_mokepon_capipepo_attack.png", 3);
let mokemonRatigueya = new Mokemon("Ratigueya", "./assert/mokepons_mokepon_ratigueya_attack.png", 3);

mokemonHipodoge._attack = [
    {nombre: 'Agua 💦', id: 'button-agua'}, 
    {nombre: 'Agua 💦', id: 'button-agua'},
    {nombre: 'Agua 💦', id: 'button-agua'},
    {nombre: 'Fuego 🔥', id: 'button-fuego'},
    {nombre: 'Tierra 🌴', id: 'button-tierra'},
]

mokemonCapipepo._attack = [
    {nombre: 'Tierra 🌴', id: 'button-tierra'},
    {nombre: 'Tierra 🌴', id: 'button-tierra'},
    {nombre: 'Tierra 🌴', id: 'button-tierra'},
    {nombre: 'Fuego 🔥', id: 'button-fuego'},
    {nombre: 'Agua 💦', id: 'button-agua'},
]

mokemonRatigueya._attack = [
    {nombre: 'Fuego 🔥', id: 'button-fuego'},
    {nombre: 'Fuego 🔥', id: 'button-fuego'},
    {nombre: 'Fuego 🔥', id: 'button-fuego'},
    {nombre: 'Agua 💦', id: 'button-agua'},
    {nombre: 'Tierra 🌴', id: 'button-tierra'},
]
let mokepones = [];
mokepones = [...mokepones, mokemonHipodoge, mokemonCapipepo, mokemonRatigueya ];


















function iniciarJuego() {

    mokepones.forEach(mokepon => {
        opcionDeMokepones = `
            <input type="radio" id=${mokepon.name} name="mascota" />
            <label class="tarjeta-mokepon"for=${mokepon.name}>
                <p>${mokepon.name}</p>
                <img src=${mokepon.photo} alt=${mokepon.name}>
            </label>
        `;
        contenedorTarjetas.innerHTML += opcionDeMokepones;
    });

    hipodoge = document.getElementById('Hipodoge');
    capipepo = document.getElementById('Capipepo');
    ratigueya = document.getElementById('Ratigueya');
    botonMascota.addEventListener('click', selectMascotaPlayer);

    // botonFuego.addEventListener('click', ataqueFuego);
    // botonAgua.addEventListener('click', ataqueAgua);
    // botonTierra.addEventListener('click', ataqueTierra);
    // botonReiniciar.addEventListener('click', reset);
}

function reset(){
    location.reload();
}

function combate() {
    let ganador = false;

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
    let mascota = "";
    if(hipodoge.checked){
        mascota = "Hipodoge";
        mascotaJugador.innerHTML = mascota;
    }else if(capipepo.checked){
        mascota = "Capipepo";
        mascotaJugador.innerHTML = mascota;
    }else if(ratigueya.checked) {
        mascota = "Ratigueya";
        mascotaJugador.innerHTML = mascota;
    }else{
        alert("selecciona una mascota");
    }
    selectMascotaEnemigo()
}

function selectMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
     if(ataqueAleatorio == 1) {
        nameMascotaEnemigo.innerHTML = "Hipodope";
    }else if(ataqueAleatorio == 2) {
        nameMascotaEnemigo.innerHTML = "Capipepo";
    }else if(ataqueAleatorio == 3) {
        nameMascotaEnemigo.innerHTML = "Ratigueya";
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener('load', iniciarJuego);

