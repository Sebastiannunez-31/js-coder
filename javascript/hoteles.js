



function viaje(costo = Number) {


    alert(`el total de su viajees de ${costo}`)
    let metodoPago = parseInt(prompt("seleccione metodo de pago \n 1- credito \n 2- debito \n"));

    //*metodo de pago para seleccion credito
    if (metodoPago === 1) {

        let pago = parseInt(prompt(`el total de su compra es ${costo} \n en cuantas cuotas desea pagar? \n 3 - 6 - 12`));


        if (pago === 3) {


            total = costo / 3

            alert(`su total a pagar por ${pago} cuotas es de ${total * 1.35}`);

            pagar();
        }


        else if (pago === 6) {

            total = costo / 6

            alert(`su total a pagar por ${pago} cuotas es de ${total * 1.85}`)
            pagar();

        }
        else if (pago === 12) {

            total = costo / 12

            alert(`su total a pagar por ${pago} cuotas es de ${total * 1.95}`)
            pagar();

        }
    }
    //*metodo de pago selccion  debito
    else if (metodoPago === 2) {

        alert(" seleccione su banco para realizar su pago")

        let banco = parseInt(prompt("1- banco estado \n 2- banco de chile"));

        if (banco === 1) {

            alert("bienvenido a banco estado")

            let usuario = prompt("ingresa tu nombre de usuario")
            alert(`bienvenido ${usuario}`)

            contraseña = parseInt(prompt("ingresa tu clave de 4 digitos"));

            alert("dirigiendo al pago")

            pagar();


        } else if (banco === 2) {
            alert("bienvenido a banco de chile")

            let usuario = prompt("ingresa tu nombre de usuario")
            alert(`bienvenido ${usuario}`)

            contraseña = parseInt(prompt("ingresa tu clave de 4 digitos"));

            alert("dirigiendo al pago")


            pagar();

        }
    }


    //*FUNCION PAGAR
    function pagar() {

        let pagar = prompt("desea pagar ahora? \n si \n no")

        if (pagar === "si") {
            let usuario = prompt("ingrese su usuario");
            alert(`bienvenido ${usuario}`)

            let password = prompt("ingrese su contraseña")

            if (password == 1234) {

                alert("procesando pago...")
                alert("pagado con exito¡¡")

            } else {
                alert("contraseña incorrecta, cerrando ventana de pago")
            }

        } else {
            alert(" cerrando ventana de pagos")
        }
    }
}


class paises {
    constructor(hotel, tipoDeAlojamiento, precio) {

        this.hotel = hotel;
        this.tipoDealojamiento = tipoDeAlojamiento
        this.precio = precio

    }
}

const viajes = [
    { id: 1, hotel1: "rickelton", tipoDeAlojamiento: "habitacion matrimonial", precio: 198000 },
    { id: 2, hotel1: "rickelton", tipoDeAlojamiento: "habitacion normal", precio: 78990 },
    { id: 3, hotel1: "rickelton", tipoDeAlojamiento: "penthouse", precio: 1990654 },


];

function hoteles() {


    let hotel = Number(prompt("En que hotel le gustaria alojarse?\n 1 - Rickelton \n 2 - Victorious"))
    //?revisar para agregar un foreach para utilizar un solo if
    if (hotel === 1) {
        let alojarse = Number(prompt("que tipo de alojamiento le gustaria? \n 1 -  Habitacion matrimonial \n 2 - Habitacion normal \n 3 - Penthouse"))

        if (alojarse === 1) {
            let alojamiento = viajes.find(item => item.id === alojarse)

            let mensaje = `
            id: ${alojamiento.id},
            hotel: ${alojamiento.hotel1},
            tipo de alojamiento: ${alojamiento.tipoDeAlojamiento},
            precio $${alojamiento.precio}
            `
            alert(`tu viaje sera con estas condiciones ${mensaje}`)

        }
        else if (alojarse === 2) {
            let alojamiento = viajes.find(item => item.id === alojarse)
    
            let mensaje = `
            id: ${alojamiento.id},
            hotel: ${alojamiento.hotel1},
            tipo de alojamiento: ${alojamiento.tipoDeAlojamiento},
            precio $${alojamiento.precio}
            `
            alert(`tu viaje sera con estas condiciones ${mensaje}`)
    
        }
        else if (alojarse === 3) {
            let alojamiento = viajes.find(item => item.id === alojarse)
    
            let mensaje = `
            id: ${alojamiento.id},
            hotel: ${alojamiento.hotel1},
            tipo de alojamiento: ${alojamiento.tipoDeAlojamiento},
            precio $${alojamiento.precio}
            `
            alert(`tu viaje sera con estas condiciones ${mensaje}`)
    
        }
        else {
    
            alert("tipo de alojamiento no existe")
    
        }
    


    }
    
}









let pais = prompt("Que pais te gustaria visitar? \n Moscu - Plaza roja \n Nueva Zelanda \n Croacia \n escribe esc para salir").toLocaleLowerCase();

while (pais != "esc") {



    switch (pais) {

        case "moscu":

            hoteles();

            viaje(12000);
            break;
        case "nueva zelanda":
            hoteles();
            viaje(28990)
            break;

        case "croacia":
            hoteles();
            viaje(48990)
            break;

        default:

            alert("opcion ingresada no es valida")
            break;
    }
    pais = prompt("Que pais te gustaria visitar? \n Moscu - Plaza roja \n Nueva Zelanda \n Croacia escribe esc para salir").toLocaleLowerCase();

}
