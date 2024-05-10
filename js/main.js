// VARIABLES
let IVA = 1.21
let listaDeProductos = "Jarron, Silla, Libro, Flor, Lapiz"

// INFORMACION DEL USUARIO
function usuarioEdad() {
    // Se solicita la edad al usuario
    let edad = prompt("Ingresa tu edad :")

    if (edad >= 18) { 
        // Si el usuario es mayor de 18 años, mostrar mensaje de bienvenida
        console.log("¡Estas listo para comprar! ( Los codigos son estos: 202024: Jarron | 303034: Silla | 404044: Libro | 505054: Flor | 606064: Lapiz ) ")
        usuarioNombre()
    } else {
        // Si el usuario es menor de 18 años, mostrar mensaje de error
        console.error("Lo siento, no puedes comprar, vuelve al cumplir 18")
    }
}
// Llamar a la funcion para solicitar la edad del usuario al inicio
usuarioEdad()
// Funcion para solicitar el nombre de usuario
function usuarioNombre() {
    let nombre = prompt("Ingresa tu nombre de usuario para empezar compras :")
    if (nombre.length >= 5) { 
        // Si el nombre de usuario tiene mas de 5 caracteres o 5 caracteres, mostrar mensaje de bienvenida
        console.log("Bienvenido " + nombre.trim())
        codigoDeCompra() 
    } else if (nombre.length <= 2) { 
        // Si el nombre de usuario tiene menos de 2 caracteres o 2 caracteres, mostrar mensaje de error
        console.warn("¡Tu nombre de usuario es muy corto!, coloca uno mas largo") 
    } else if (nombre.length <= 4) {
        // Si el nombre de usuario tiene menos de 4 caracteres o 4 caracteres, mostrar mensaje de error
        console.warn("¡Tu nombre de usuario es algo corto!, coloca un poco mas letras")
    }
}
// FIN INFORMACION DEL USUARIO


// CODIGO DE COMPRA
function codigoDeCompra() {
    let confirmacion;
    let codigoCompra = prompt("Escribe el codigo de lo que deseas comprar")
    if (codigoCompra === null) { 
        // Si el usuario no ingresa un codigo, mostrar mensaje de error
        console.error("Introduce un codigo de compra")
    } else {
        // Procesar la compra segun el codigo ingresado
        switch (parseInt((codigoCompra))) {
            // Si el código corresponde a un producto, mostrar precio y ofrecer ver los productos de nuevo
            case 202024:
                alert ("Tu compra de un jarrón cuenta con un valor de: " + (400 * IVA))
                confirmacion = confirm ("¿Deseas saber el valor de otro producto?") 
                if (confirmacion === true) {
                    codigoDeCompra()
                } else {
                    let ofertas = confirm ("¿Deseas volver a saber sobre nuestros productos disponibles?")
                    if (ofertas === true) {
                        mostrarProductosYCodigos()
                    } else {
                        console.log("¡Gracias por consultar!")
                    }
                }
                break
            case 303034:
                alert ("Tu compra de una silla cuenta con un valor de: " + (600 * IVA))
                confirmacion = confirm ("¿Deseas saber el valor de otro producto?") 
                if (confirmacion === true) {
                    codigoDeCompra()
                } else {
                    let ofertas = confirm ("¿Deseas volver a saber sobre nuestros productos disponibles?")
                    if (ofertas === true) {
                        mostrarProductosYCodigos()
                    } else {
                        console.log("¡Gracias por consultar!")
                    }
                }
                break
            case 404044:
                alert ("Tu compra de un libro cuenta con un valor de: " + (200 * IVA))
                confirmacion = confirm ("¿Deseas saber el valor de otro producto?") 
                if (confirmacion === true) {
                    codigoDeCompra()
                } else {
                    let ofertas = confirm ("¿Deseas volver a saber sobre nuestros productos disponibles?")
                    if (ofertas === true) {
                        mostrarProductosYCodigos()
                    } else {
                        console.log("¡Gracias por consultar!")
                    }
                }
                break
            case 505054:
                alert ("Tu compra de una flor cuenta con un valor de: " + (100 * IVA))
                confirmacion = confirm ("¿Deseas saber el valor de otro producto?") 
                if (confirmacion === true) {
                    codigoDeCompra()
                } else {
                    let ofertas = confirm ("¿Deseas volver a saber sobre nuestros productos disponibles?")
                    if (ofertas === true) {
                        mostrarProductosYCodigos()
                    } else {
                        console.log("¡Gracias por consultar!")
                    }
                }
                break
            case 606064:
                alert ("Tu compra de un lapiz cuenta con un valor de: " + (50 * IVA))
                confirmacion = confirm ("¿Deseas saber el valor de otro producto?") 
                if (confirmacion === true) {
                    codigoDeCompra()
                } else {
                    let ofertas = confirm ("¿Deseas volver a saber sobre nuestros productos disponibles?")
                    if (ofertas === true) {
                        mostrarProductosYCodigos()
                    } else {
                        console.log("¡Gracias por consultar!")
                    }
                }
                break
            default:
                console.error("El código de compra ingresado no coincide con ningun producto disponible.")
                break
        }
    }
}
// FIN CODIGO DE COMPRA



// FUNCIÓN PARA MOSTRAR PRODUCTOS DISPONIBLES
function mostrarProductosYCodigos() {
    let productos = listaDeProductos.split(", ");
    console.log("Productos disponibles:");

    for (let i = 0; i < productos.length; i++) {
        let codigo = (i + 1) * 1;
        console.log(codigo + ": " + productos[i]);
    }
}
// FIN FUNCIÓN PARA MOSTRAR PRODUCTOS DISPONIBLES
