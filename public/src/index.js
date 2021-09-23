'use strict'

let filtro

do {

    filtro = prompt("Introduce un NIA o un modulo")

}while(filtro === "")

if (!isNaN(filtro)) {

    let nia = parseInt(filtro)

    let alumno = buscaAlumno(datosAlumnos,nia)

    let modulosAprobados = modulosAprobadosDelAlumno(alumno.notas)

    console.log("Los modulos aprobados por el alumno con nia " + alumno.nia + " son:")
    console.log(modulosAprobados)
    
    let notasNumericas = alumno.notas.map((element) => element.nota)
    
    let mediaDeAlumno = media(notasNumericas)

    console.log("La nota media del alumno es " + mediaDeAlumno)

} else {
    
    let modulo = filtro.toLocaleLowerCase()

    let listaAlumnosConModuloAprobado = alumnosAprobadosDelModulo(datosAlumnos, modulo)

    console.log("Los alumnos aprobados en el módulo " + modulo + " son:")
    console.log(listaAlumnosConModuloAprobado)

    let notasDelModulo = datosAlumnos.map((item) => item.notas.find((item2) => item2.modulo == modulo)).map((item) => item.nota)

    let notaMediaModulo = media(notasDelModulo)

    console.log("La nota media del módulo es " + notaMediaModulo)

}

let alumnosOrdenadosPorApellido = ordenaAlumnosPorApellido(datosAlumnos)

console.log("Lista de alfabética de alumnos:")
console.log(alumnosOrdenadosPorApellido.map((item) => item.alumno.nombre + " " + item.alumno.apellido))

let alumnosOrdenadosPorNia = ordenaAlumnosPorNia(datosAlumnos)

console.log("Lista de alumnos ordenada por nia es:")
console.log(alumnosOrdenadosPorNia.map((item) => item.alumno.nombre + " " + item.alumno.apellido))

let listaAlumnosConSuspensos = alumnosConSuspensos(datosAlumnos)

console.log("Los alumnos con algún modulo suspenso son:")
console.log(listaAlumnosConSuspensos)

let listaAlumnosTodoAprobado = alumnosConTodoAprobado(datosAlumnos)
console.log("Los alumnos con todo aprobado son:")
console.log(listaAlumnosTodoAprobado)