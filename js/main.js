// VARIABLES
let IVA = 1.21
let listaDeProductos = "Jarron, Silla, Libro, Flor, Lapiz" 


function usuarioEdad() {
    let edad = prompt("Ingresa tu edad :")

    if (edad >= 18) { 
        console.log("¡Estas listo para comprar! ( Los codigos son estos: 202024: Jarron | 303034: Silla | 404044: Libro | 505054: Flor | 606064: Lapiz ) ")
        usuarioNombre()
    } else {
        console.error("Lo siento, no puedes comprar, vuelve al cumplir 18")
    }
}

usuarioEdad()

function usuarioNombre() {

    let nombre = prompt("Ingresa tu nombre de usuario para empezar compras :")

    if (nombre.length >= 5) { 
        console.log("Bienvenido " + nombre.trim())
        codigoDeCompra() 
    } else if (nombre.length <= 2) { 
        console.warn("¡Tu nombre de usuario es muy corto!, coloca uno mas largo") 
    } else if (nombre.length <= 4) {
        console.warn("¡Tu nombre de usuario es algo corto!, coloca un poco mas letras")
    }
}

function codigoDeCompra() {
    let confirmacion;
    let codigoCompra = prompt("Escribe el codigo de lo que deseas comprar")
    if (codigoCompra === null) { 
        console.error("Introduce un codigo de compra correcto")
    } else {
        switch (parseInt((codigoCompra))) {
            case 202024:
                alert ("Tu compra de un jarrón cuenta con un valor de: " + (400 * IVA))
                confirmacion = confirm ("¿Deseas saber el valor de otro producto?") 
                if (confirmacion === true) {
                    codigoDeCompra()
                } else {
                    console.log("¡Gracias por consultar!")
                }
                break
            case 303034:
                alert ("Tu compra de una silla cuenta con un valor de: " + (600 * IVA))
                confirmacion = confirm ("¿Deseas saber el valor de otro producto?") 
                if (confirmacion === true) {
                    codigoDeCompra()
                } else {
                    console.log("¡Gracias por consultar!")
                }
                break
            case 404044:
                alert ("Tu compra de un libro cuenta con un valor de: " + (200 * IVA))
                confirmacion = confirm ("¿Deseas saber el valor de otro producto?") 
                if (confirmacion === true) {
                    codigoDeCompra()
                } else {
                    console.log("¡Gracias por consultar!")
                }
                break
            case 505054:
                alert ("Tu compra de una flor cuenta con un valor de: " + (100 * IVA))
                confirmacion = confirm ("¿Deseas saber el valor de otro producto?") 
                if (confirmacion === true) {
                    codigoDeCompra()
                } else {
                    console.log("¡Gracias por consultar!")
                }
                break
            case 606064:
                alert ("Tu compra de un lapiz cuenta con un valor de: " + (50 * IVA))
                confirmacion = confirm ("¿Deseas saber el valor de otro producto?") 
                if (confirmacion === true) {
                    codigoDeCompra()
                } else {
                    console.log("¡Gracias por consultar!")
                }
                break
            default:
                console.error("El código de compra ingresado no coincide con ningun producto disponible.")
                break
        }
    }
}