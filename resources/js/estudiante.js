var Estudiante = function(){
	var self = this;
	self.id="";
	self.nombre = "";
	self.matricula = "";
	self.identificacion = "";
	self.telefono = "";
	self.email = "";
};

function addRow(estu){
	var table = document.getElementById("estudiantes");

	var tr = document.createElement("tr");
	var tdId = document.createElement("td");
	var tdNombre = document.createElement("td");
	var tdMatricula = document.createElement("td");
	var tdIdentificacion = document.createElement("td");
	var tdTelefono = document.createElement("td");
	var tdEmail = document.createElement("td");

	var txtId = document.createTextNode(estu.id);
	var txtNombre = document.createTextNode(estu.nombre);
	var txtMatricula = document.createTextNode(estu.matricula);
	var txtIdentificacion = document.createTextNode(estu.identificacion);
	var txtTelefono = document.createTextNode(estu.telefono);
	var txtEmail = document.createTextNode(estu.email);

	tdId.appendChild(txtId);
	tr.appendChild(tdId);

	tdId.appendChild(txtNombre);
tr.appendChild(tdNombre);

tdId.appendChild(txtMatricula);
tr.appendChild(tdMatricula);

tdId.appendChild(txtIdentificacion);
tr.appendChild(tdIdentificacion);

tdId.appendChild(txtTelefono);
tr.appendChild(tdTelefono);

tdId.appendChild(txtEmail);
tr.appendChild(tdEmail);

table.appendChild(tr);
};

function imp(){
var id = document.getElementById("id").value;
var nombre = document.getElementById("nombre").value;
var matricula = document.getElementById("matricula").value;
var identificacion = document.getElementById("identificacion").value;
var telefono = document.getElementById("telefono").value;
var email = document.getElementById("email").value;
//console.log("ID: " + id);
//console.log("Nombre: " + nombre);
//console.log("Matricula: " + matricula);
//console.log("Identificacion: " + identificacion);
//console.log("Telefono: " + telefono);
//console.log("Email: " + email);
var estu = new Estudiante();
estu.id = id;
estu.nombre = nombre;
estu.matricula = matricula;
estu.identificacion = identificacion;
estu.telefono = telefono;
estu.email = email;
//console.log(estu);
addRow(estu);
};
