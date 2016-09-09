window.addEventListener("load", function () {
	var boton = document.getElementById("empezar");
	boton.addEventListener("click", function() {
		var nameUser = document.getElementById("nombreUsuario").value;
		var genderUser = document.getElementById("generoUsuario").value;
		var ageUser = parseInt(document.getElementById("edadUsuario").value);
		var respuesta = new Usuario(nameUser, genderUser, ageUser);
		document.getElementById("resultado").innerHTML = respuesta.presentacion();

	});
		function Usuario(nombre, genero, edad) {
			this.nombre = nombre;
			this.genero = genero;
			this.edad = edad;
			this.mayorDeEdad = (this.edad >= 18) ? "mayor" : "menor";
			this.presentacion = function() {
			return "Hola soy " + this.nombre + " tengo " + this.edad + " años y soy " + this.mayorDeEdad + " de edad";
			};
		};
});	
