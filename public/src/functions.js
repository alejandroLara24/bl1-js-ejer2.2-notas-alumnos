'use strict'

function buscaAlumno(datos, nia) {
	return datos.find((item) => item.nia === nia)
}

function modulosAprobadosDelAlumno(notas) {
	return notas.filter((item) => item.nota >= 5).map((item) => item.modulo)
}

function media(notas) {
	return ((notas.reduce((total,nota) => total += nota)) / notas.length).toFixed(2)
}

function ordenaAlumnosPorNia(datos) {
	return datos.sort((item1,item2) => item1.nia - item2.nia)
}

function ordenaAlumnosPorApellido(datos) {
	return datos.sort((item1,item2) => item1.alumno.apellido.localeCompare(item2.alumno.apellido))
}

function alumnosConSuspensos(datos) {
	return datos.filter((item) => item.notas
	.some((item2) => item2.nota < 5))
	.map((item) => item.alumno.nombre + " " + item.alumno.apellido)
}

function alumnosConTodoAprobado(datos) {
	return datos.filter((item) => item.notas
	.every((item2) => item2.nota >= 5))
	.map((item) => item.alumno.nombre + " " + item.alumno.apellido)
}

function alumnosAprobadosDelModulo(datos, modulo) {
	return datos.filter((item) => item.notas
	.find((item2) => item2.modulo == modulo && item2.nota >= 5))
	.map((item) => item.alumno.nombre + " " + item.alumno.apellido)
}


module.exports = {
	buscaAlumno,
	modulosAprobadosDelAlumno,
	media,
	ordenaAlumnosPorNia,
	ordenaAlumnosPorApellido,
    alumnosConSuspensos,
    alumnosConTodoAprobado,
	alumnosAprobadosDelModulo
}