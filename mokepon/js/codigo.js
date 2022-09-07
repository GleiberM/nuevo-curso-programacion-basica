let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton_mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton_fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton_agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton_tierra')
    botonTierra.addEventListener('click', ataqueTierra)

}

function seleccionarMascotaJugador() {

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
    if (ataqueEnemigo === ataqueJugador) {
        crearMensaje("Empate")
    }   else if (ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA') {
        crearMensaje("Ganaste")
    }   else if (ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO') {
        crearMensaje("Ganaste")
    }   else if (ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA') {
        crearMensaje("Ganaste")
    }   else {
        crearMensaje("Perdiste")
    }   
}

function crearMensaje(resultadoCombate) {
let mensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' ' + resultadoCombate

    mensaje.appendChild(parrafo)
}

function aleatorio(min, max) {
    return  Math.floor(Math.random()* (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)