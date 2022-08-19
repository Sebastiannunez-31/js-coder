let operacion = prompt("Ingresa una operacion \n suma \n resta\n multiplicar\n dividir").toUpperCase();



while (operacion != "ESC") {
    let numero = Number(prompt("ingresa un numero"));
    let numeroDos = Number(prompt("ingrese otro numero"));
    switch (operacion) {

        case "SUMA":       
            let suma = numero + numeroDos;
            alert(`tu resultado de la suma de los numeros ${numero} y ${numeroDos}, es  ${suma}`);
            break;
        case "RESTA":
            let resta = numero - numeroDos;
            alert(`tu resultado de la resta de los numeros ${numero} y ${numeroDos}, es  ${resta}`);
            break;
        case "MULTIPLICAR":
            let multilicacion = numero * numeroDos;
            alert(`tu resultado de la multiplicacion de los numeros ${numero} y ${numeroDos}, es  ${multilicacion}`);
            break;
        case "DIVIDIR":
            let division = numero / numeroDos;
            alert(`tu resultado de la division de los numeros ${numero} y ${numeroDos}, es  ${division}`);
            break;
        default:
            alert("INGRESA UNA OPCION VALIDA");
            break;
    }


     operacion = prompt("Ingresar una operacion \n suma \n resta\n multiplicar\n dividir \n para salir escibre esc").toUpperCase();

}