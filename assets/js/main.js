$(document).ready(function(){
	$("button").click(function(e){
		// detiene la accion por defecto
		e.preventDefault();
		var name = $("#nombre").val();
		var message = $ ("#mensaje").val();
		//valida
		if (name == "" && message == ""){
			alert("Debes escribir tu nombre y el mensaje");
		}else{
			$("#comentarios").append('<div><span class="center-align">'+ name + '</span><p class="center-align">' + message + '</p></div>')
		}
	});
});