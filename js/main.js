// VARIABLES
let anioActual = 2024
let IVA = 1.21
let listaDeProductos = "Jarron, Silla, Libro, Flor, Lapiz" 



let edad = prompt("Ingresa tu edad :")

if (edad >= 18) { 
    console.log("¡Estas listo para comprar!")
} else {
    console.error("Lo siento, no puedes comprar, vuelve al cumplir 18")
}



let nombre = prompt("Ingresa tu nombre de usuario para empezar compras :")

if (nombre.length >= 5) { 
    console.log("Bienvenido " + nombre.trim()) 
} else if (nombre.length <= 2) { 
    console.warn("¡Tu nombre de usuario es muy corto!, coloca uno mas largo") 
} else if (nombre.length <= 4) {
    console.warn("¡Tu nombre de usuario sigue siendo muy corto!, coloca mas letras")
}



let codigoCompra = prompt("Escribe el codigo de lo que deseas comprar " + nombre)
if (codigoCompra === null) { 
    console.error("Introduce el codigo de compra correcto")
} else {
    switch (parseInt((codigoCompra))) {
        case 202024:
            console.log("Tu compra de un jarrón cuenta con un valor de: " + (400 * IVA));
            break;
        case 303034:
            console.log("Tu compra de una silla cuenta con un valor de: " + (600 * IVA));
            break;
        case 404044:
            console.log("Tu compra de un libro cuenta con un valor de: " + (200 * IVA));
            break;
        case 505054:
            console.log("Tu compra de una flor cuenta con un valor de: " + (100 * IVA));
            break;
        case 606064:
            console.log("Tu compra de un lapiz cuenta con un valor de: " + (50 * IVA));
            break;
        default:
            console.error("El código de compra ingresado no coincide con ningun producto disponible.");
            break;
    }
}
