(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	var agregarTarea = function(){
		var fecha = new Date(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			año = fecha.getFullYear();
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(dia + "/" + mes + "/" + año + " " + tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// Agrega el contenido al enlace
		enlace.appendChild(contenido);
		// Se establece el atributo href
		enlace.setAttribute("href", "#");
		// Se agrego el enlace a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Se agrego la nueva tarea a la lusta
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

			// Borrar elementos a la lista
		for (var i = 0; i <= lista.children.length - 1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos
	
	// Agregar Tarea
	btnNuevaTarea.addEventListener("click",agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrar elementos a la lista
	for (var i = 0; i <= lista.children.length - 1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	}

}());