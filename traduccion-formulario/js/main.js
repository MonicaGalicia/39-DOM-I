function traducir(idioma){
	var elForm=document.getElementById("form-signin-heading");
	var input_email=document.getElementById("inputEmail");
	elForm.setAttribute("placeholder","inputEmail");
	var elPassword=document.getElementById("inputPassword");
	var inputPassword=document.getElementById("inputPassword");
	var elRemember=document.getElementById("remember");
	var elinputSing=document.getElementById("inputSign");
	if(idioma=="es"){
		elForm.innerHTML="Por favor Inicia Sesión"
		elPassword.innerHTML="Contraseña";
		input_email.setAttribute("placeholder","correo electronico");
		inputPassword.setAttribute("placeholder","contraseña");
		elRemember.innerHTML="Recordar Datos";
		elinputSing.innerHTML="Iniciar Sesión";
	}else{
		elForm.innerHTML="Please sign in"
		elPassword.innerHTML="Password";
		input_email.setAttribute("placeholder","email");
		inputPassword.setAttribute("placeholder","password")
		elRemember.innerHTML="remember";
		elinputSing.innerHTML="Sing in";
	  
	}
}
traducir("es");

var btnEs=document.getElementById("btnEs");
 	btnEs.onclick=function(){
 		traducir("es");
 	}
 	var btnEn=document.getElementById("btnEn");
 	btnEn.onclick=function(){
 		traducir("en");
 	}