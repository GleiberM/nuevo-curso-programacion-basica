const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
const botonMascotaJugador = document.getElementById("boton_mascota")
const botonFuego = document.getElementById('boton_fuego')
const botonAgua = document.getElementById('boton_agua')
const botonTierra = document.getElementById('boton_tierra')
const botonReiniciar = document.getElementById('boton_reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar_mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipeyo = document.getElementById('capipeyo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador =document.getElementById('mascota_jugador')
const spanMascotaEnemigo = document.getElementById('mascota_enemigo')    
const spanVidasJugador = document.getElementById('vidas_jugador')
const spanVidasenemigo = document.getElementById('vidas_enemigo')

const mensaje = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')


let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego() {

    sectionSeleccionarAtaque.style.display= 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego )
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display= 'flex'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipeyo.checked) {
        spanMascotaJugador.innerHTML = 'Capipeyo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else  {
        alert('Debes selecionar una mascota')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)

    if (mascotaAleatorio == 1) {
          spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipeyo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()

}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()

}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()

}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate() {
    
    if (ataqueEnemigo === ataqueJugador) {
        crearMensaje("Empate")
    }   else if (ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA' || ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO' || ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA') {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasenemigo.innerHTML = vidasEnemigo
    }   else {
        crearMensaje("Perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }   
    // revisar vidas
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES!! Tu mascota ha ganado el combate.')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Tu mascota ha sido derrotada!')
    }
}

function crearMensaje(resultadoCombate) {   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    mensaje.innerHTML = resultadoCombate
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoCombateFinal) {
    sectionReiniciar.style.display = 'block' 
    mensaje.innerHTML = resultadoCombateFinal   
    botonFuego.disabled = true
     botonAgua.disabled = true
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return  Math.floor(Math.random()* (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)