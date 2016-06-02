function goBack() {
	window.history.go(-1);
}

function guardado(){
	alert("Guardado...");
}

function modificado() {
	alert("Modificado...");
}

function confirmar()
{
    if (confirm("Se perderan todos los nuevos datos\n¿desea continuar?")) {
        goBack();
    }
}

function is_numero_positivo(num){
	if (!isNaN(num)) {
		return false;
	} else {
		if(parseInt(num) <= 0){
			return false;
		}
	}
	return true;
}

function is_cadena(cad){
	if (isNaN(cad)) {
		return false;
	}
	return true;
}



 //   isNaN(15) devolverá falso
 //  isNaN(15p) devolverá verdadero
 //   isNaN(15 12) devolverá verdadero, hay un espacio en blanco
 //   isNaN(3.141592) devolverá falso
 //   isNaN(“23”) devolverá falso, puede ser convertido a un valor numérico


