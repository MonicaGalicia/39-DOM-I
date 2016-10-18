function validateForm(){
var regexEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var email=document.getElementbyId("email").value;
var nombre =document.getElementbyId("nombre").value;
if(!regexEmail.test(email)){
	alert("no es email");
	return false;
}
}