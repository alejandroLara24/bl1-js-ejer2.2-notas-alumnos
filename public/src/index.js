'use strict'


let filtro = 123456//prompt("Introduce un NIA")

let alumno = buscaAlumno(datosAlumnos,filtro)

let modulosAprobados = modulosAprobadosDelAlumno(alumno.notas)

let notasNumericas = []
alumno.notas.forEach(element => notasNumericas.push(element.nota))

let mediaDeAlumno = media(alumno.notas)

let alumnosOrdenadosPorNia = ordenaAlumnosPorNia(datosAlumnos)

let alumnosOrdenadosPorApellido = ordenaAlumnosPorApellido(datosAlumnos)

let listaAlumnosConSuspensos = alumnosConSuspensos(datosAlumnos)

let listaAlumnosTodoAprobado = alumnosConTodoAprobado(datosAlumnos)

let listaAlumnosConModuloAprobado = alumnosAprobadosDelModulo(datosAlumnos, "dwec")