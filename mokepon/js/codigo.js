let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
    sectionSeleccionarAtaque.style.display= 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById("boton_mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton_fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton_agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton_tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton_reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego )

}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar_mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
    sectionSeleccionarAtaque.style.display= 'block'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipeyo = document.getElementById('capipeyo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador =document.getElementById('mascota_jugador')

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
    let spanMascotaEnemigo = document.getElementById('mascota_enemigo')    

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
    let spanVidasJugador = document.getElementById('vidas_jugador')
    let spanVidasenemigo = document.getElementById('vidas_enemigo')
    
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
    let mensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' ' + resultadoCombate

    mensaje.appendChild(parrafo)
}

function crearMensajeFinal(resultadoCombateFinal) {
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

    let mensaje = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoCombateFinal
    
    mensaje.appendChild(parrafo)
    
    let botonFuego = document.getElementById('boton_fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton_agua')
     botonAgua.disabled = true
    let botonTierra = document.getElementById('boton_tierra')
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return  Math.floor(Math.random()* (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)