
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton_mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
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

function aleatorio(min, max) {
    return  Math.floor(Math.random()* (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)