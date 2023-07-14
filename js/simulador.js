/* Smulador de Prestamos */
let nombreCompleto = prompt('Ingresa tu Nombre Completo');
let prestamo1 = Number(prompt('Cantidad solicitada para prestamo'));
let plazo = Number(prompt('¿Cantidad de dias en qué desee liquidar?'));

let totalPrestamo = 0;


const prestamo = ( prestamo1, plazo) => {

    /* Validacion de Cantidad */
    if(prestamo1 <= 0 ){
        let mensaje = alert('Elige una Cantidad Mayor a 0 para realizar la consulta')
        return mensaje;
    }

    /* Validacion de plazo en dias */
    if(plazo <= 0){
        
        let mensaje = alert('Elige un plazo mayor a 0 dias')
        
        return mensaje
    }

    /* Cantidad a pagar del prestamo */
    if(plazo <= 7 ){
        totalPrestamo = prestamo1 * .7;
        return alert( nombreCompleto + ' ' + 'tienes la cantidad total a pagar de' + ' ' +totalPrestamo)
    }else if(plazo <= 14){
        totalPrestamo = prestamo1 * .10;
        return alert( nombreCompleto + ' ' + 'tienes la cantidad total a pagar de' + ' ' + totalPrestamo)
    }else if(plazo <= 21){
        totalPrestamo = prestamo1 * .14;
        return alert( nombreCompleto + ' ' + 'tienes la cantidad total a pagar de' + '' + totalPrestamo)
    }else{
        return ('El prestamo no puede exceder de 21 dias, vuelve a intentarlo')
    }
} 

alert(prestamo(prestamo1))


