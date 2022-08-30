



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

let pais = prompt("Que pais te gustaria visitar? \n Moscu - Plaza roja \n Nueva Zelanda \n Croacia \n escribe esc para salir").toLocaleLowerCase();

while (pais != "esc") {

    switch (pais) {
        case "moscu":

            viaje(12000);
            break
        case "nueva zelanda":

            viaje(28990)
            break;

        case "croacia":
            viaje(48990)
            break;

        default:

            alert("opcion ingresada no es valida")
            break;
    }
    pais = prompt("Que pais te gustaria visitar? \n Moscu - Plaza roja \n Nueva Zelanda \n Croacia escribe esc para salir").toLocaleLowerCase();

}
