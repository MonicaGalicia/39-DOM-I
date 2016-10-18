
function validateForm(){
	var nombre=document.getElementById("name").value;
	var apellido=document.getElementById("lastname").value;
	var email=document.getElementById("inputEmail").value;
	var password=document.getElementById("inputPassword").value;
	var selecciona=document.getElementById("opciones").value;

	if(nombre==="" || apellido==="" || email===""|| password===""){
		alert("el campo esta vacio");
		return false;
	}else if(!/^[A-Z][a-z]*$/g.test(document.getElementById('name').value)){
           alert("La primer letra debe ser mayuscula");
           return false;
	}else if(!/^[A-Z][a-z]*$/g.test(document.getElementById('lastname').value)){
           alert("La primer letra debe ser mayuscula");
           return false;

	}else if(password.length<6){
		alert("La contraseña debe contener al menos 6 ");
		return false;
	}else if(password==="password" || password==="123456" || password==="098754"){
		alert("contraseña no permitida");
		return false;
	}else if(selecciona===""){
		alert("Por favor selecciona una opción");
	}
	


}


