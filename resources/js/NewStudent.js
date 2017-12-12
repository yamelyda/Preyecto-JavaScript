var Estudiante = function () {
	var self = this;
	self.id = "";
	self.nombre = "";
	self.matricula = "";
	self.identificacion = "";
	self.telefono = "";
	self.email = "";
};

function agregarEstudiante(estudiante) {
	console.log(estudiante);
	var rowEstudiante = '<tr id ="tr' + estudiante.id + '">'
		+ "<td>" + '<input id = "' + estudiante.id + '" type="checkbox">' + "</td><td>"
		+ estudiante.id + "</td><td>"
		+ estudiante.nombre + "</td><td>"
		+ estudiante.matricula + "</td><td>"
		+ estudiante.identificacion + "</td><td>"
		+ estudiante.telefono + "</td><td>"
		+ estudiante.email + "</td></tr>";
	console.log(rowEstudiante);
	$("table tbody").append(rowEstudiante);
};

function guardarDb(estudiante) {
	myStorage = window.localStorage;
	var estudiantes = [];
	var dbEstudiantes = myStorage.getItem("estudiantes");
	if (dbEstudiantes != null) {
		estudiantes = JSON.parse(dbEstudiantes);
	}
	estudiantes.push(estudiante);
	myStorage.setItem("estudiantes", JSON.stringify(estudiantes));
};

function analizaDB(id) {

	var dbEstudiantes = localStorage.getItem('estudiantes');

	if (dbEstudiantes != null) {
		var arreglo = JSON.parse(dbEstudiantes);
		borraEstudiante(id, arreglo);

	}

};

function borraEstudiante(id, arreglo) {
	for (var i = 0; i < arreglo.length; i++) {

		if (arreglo[i].id == id) {

			arreglo.splice(i, 1);
			var fila = document.getElementById("tr" + id).rowIndex - 1;
			if (typeof foo !== 'undefined') {
				document.getElementById("estudiantes").deleteRow(fila);
			}

			estudiantesArray = arreglo;
			localStorage.setItem('estudiantes', JSON.stringify(estudiantesArray));
			location.reload();
			break;
		}

	}
};

$(document).ready(function () {

	myStorage = window.localStorage;

	var dbEstudiantes = myStorage.getItem("estudiantes");
	if (dbEstudiantes != null) {
		var estudiantes = JSON.parse(dbEstudiantes);
		$.each(estudiantes, function (i, est) {
			agregarEstudiante(est);
		});
	};

	$("#agregar-estudiante").click(function () {
		var id = $("#id").val();
		var nombre = $("#nombre").val();
		var matricula = $("#matricula").val();
		var identificacion = $("#identificacion").val();
		var telefono = $("#telefono").val();
		var email = $("#email").val();

		var est = new Estudiante();
		est.id = id;
		est.nombre = nombre;
		est.matricula = matricula;
		est.identificacion = identificacion;
		est.telefono = telefono;
		est.email = email;
		agregarEstudiante(est);
		guardarDb(est);
	});

	$("#eliminar-estudiante").click(function () {
		$("input:checkbox:checked").each(function () {
			analizaDB($(this).attr("id"));
		});

	});
});