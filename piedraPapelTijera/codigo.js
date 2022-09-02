 // funcion para aleatoriedad
 function aleatorio(min, max) {
    return  Math.floor(Math.random()* (max - min + 1) + min)
}

function eleccion(jugada) {
        let resultado = "";
        if (jugada === 1) {
        resultado = "PIEDRA";
    }   else if (jugada === 2) {
        resultado = "PAPEL";
    }   else if (jugada === 3) {
        resultado = "TIJERA";
    }   else {
        resultado = "MALA SELECCION"
    }
        return resultado
}

function combate(jugador, pc) {
    //let resultadoCombate = ""
    if (jugador === pc) {
        resultadoCombate = "Empate"
    }   else if (jugador === 1 && pc === 3) {
        resultadoCombate = "Ganaste"
        victorias++
    }   else if (jugador === 2 && pc === 1) {
        resultadoCombate = "Ganaste"
        victorias++
    }   else if (jugador === 3 && pc === 2) {
        resultadoCombate = "Ganaste"
        victorias++
    }   else {
        resultadoCombate = "Perdiste"
        derrotas++
    }   
    return(resultadoCombate)
}
// 1 es piedra, 2 papel, 3 tijera
let jugador = 0;
let pc = 0;
let victorias = 0
let derrotas = 0

while (victorias < 3 && derrotas < 3) {
    pc = aleatorio(1,3)

    jugador = prompt("Elige: 1 para PIEDRA, 2 para PAPEL, 3 para TIJERA")
    
    alert("Tu eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))

    // COMBATE
    combate()
    alert(combate(pc, jugador));
}

alert( "Victorias: " + victorias + " Derrotas: " + derrotas)

