function validateForm(){
	/*Validar que los campos no estén vacios*/
	if((document.formulario.nombre.value =="")&&(document.formulario.lastname.value =="")&&(document.formulario.email.value =="")&&(document.formulario.password.value =="")){
		alert("Estos campos son obligatorios");
		document.formulario.nombre.style.backgroundColor="#b74747";
		document.formulario.lastname.style.backgroundColor="#b74747";
		document.formulario.email.style.backgroundColor="#b74747";
		document.formulario.password.style.backgroundColor="#b74747";
	}
}

