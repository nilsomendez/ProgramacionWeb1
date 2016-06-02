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

function validar_numero_positico(num){
	var aviso = document.getElementById("avisoNumero");
	aviso.innerHTML = ""
	if (!isNaN(num)) {
		aviso.innerHTML = "ingrese un numero";
		return false;
	} else {
		if(parseInt(num) <= 0){
			aviso.innerHTML = "ingrese un numero mayor a CERO"
			return false;
		}
	}
	return true;
}


 //   isNaN(15) devolverá falso
 //  isNaN(15p) devolverá verdadero
 //   isNaN(15 12) devolverá verdadero, hay un espacio en blanco
 //   isNaN(3.141592) devolverá falso
 //   isNaN(“23”) devolverá falso, puede ser convertido a un valor numérico


