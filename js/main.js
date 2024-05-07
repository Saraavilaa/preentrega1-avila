// VARIABLES
let anioActual = 2024
let IVA = 1.21



let edad = prompt("Ingresa tu edad")

if (edad >= 18) { 
    console.log("Estas listo para comprar")
} else {
    console.error("Lo siento, no puedes comprar, vuelve al cumplir 18")
}



let nombre = prompt("Ingresa tu nombre de usuario para empezar compras :")

if (nombre.length >= 5) { 
    console.log("Bienvenido " + nombre.trim()) 
} else if (nombre.length >= 2) { 
    console.warn("¡Tu nombre de usuario es muy corto!, coloca uno mas largo") 
} else if (nombre.length >= 4) {
    console.warn("¡Tu nombre de usuario sigue siendo muy corto!, coloca mas letras")
}

let ofertas = prompt("Escribe el codigo de lo que deseas comprar " + nombre)
if (ofertas === undefined) { 
    console.error("Introduce el codigo de compra correcto")
} else if (ofertas === 202024) {
    console.log("Tu compra de un jarron medieval cuenta con el valor de: " + 400 + IVA )
}


