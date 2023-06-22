// Proyecto estudiantes

// class constructora

class Estudiante {
    constructor(id, nombre, curso, cant_notas, array_notas, promedio) {
        this.id = id;
        this.nombre = nombre;
        this.curso = curso;
        this.cant_notas = cant_notas;
        this.array_notas = array_notas;
        this.promedio = promedio;
    }

    //metodos
    mostrarInfoEstudiante() {
        console.log(`Estudiante ${this.nombre} con id ${this.id} del curso ${this.curso} tiene un promedio de ${this.promedio} y sus notas son ${this.array_notas}`)
    }

}

//crear un array de objetos

const array_estudiantes = []

function saludarUsuario() {
    let inputNombre
    do {
        inputNombre = prompt("Por favor ingresa tu nombre:");
        if (inputNombre != "" && inputNombre != null) {
            alert(`Hola ${inputNombre}, bienvenido/a la calculadora de promedio de notas.`)
        }
        else {
            alert("No ingresaste tu nombre para continuar")
        }

    } while (inputNombre == "" || inputNombre == null)
    return inputNombre
}

function pedirCurso() {
    let inputCurso
    do {
        inputCurso = prompt("Por favor ingresa tu curso:");
        if (inputCurso != "" && inputCurso != null) {
            console.log(`El curso ingresado es ${inputCurso}`)
        }
        else {
            alert("No ingresaste tu curso para continuar")
        }

    } while (inputCurso == "" || inputCurso == null)
    return inputCurso
}


function pedirNota() {
    let nota
    do {
        nota = parseInt(prompt("Ingrese el valor de la nota, recuerde que es una escala del 0 al 10"))
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            alert("Por favor ingrese un número válido")
        }
    } while (nota < 0 || nota > 10 || isNaN(nota))
    return nota
}

function pedirCantidadNotas() {
    let cantNotas
    do {
        cantNotas = parseInt(prompt("Ingrese cuantas notas desea cargar, recuerde que debe ser un número mayor a 0 y menor a 11"))
        if (cantNotas <= 0 || isNaN(cantNotas || cantNotas > 10)) {
            alert("Por favor ingrese un número válido")
        }
    } while (cantNotas <= 0 || isNaN(cantNotas) || cantNotas > 10)
    return cantNotas
}

function calcularTotal(cantNotas) {
    let total = 0
    let array_notas_1 = []
    for (let i = 1; i <= cantNotas; i++) {
        let nota = pedirNota()
        array_notas_1.push(nota)
        total = total + nota
        console.log(`el total parcial es ${total}`)
        console.log(`el promedio parcial es ${total / i}`)
    }
    return [total, array_notas_1]
}


function calcularId(array) {
    // el mayor valor de id + 1
    if (array.length == 0) {
        return 1
    }
    else {
        let arrayID = array.map((dato) => dato.id)
        let id = Math.max(arrayID) + 1
        return id
    }
}

function agregarEstudiantes() {

    let nombre = saludarUsuario()
    let curso = pedirCurso()
    let cantNotas = pedirCantidadNotas()
    let [total, array_notas] = calcularTotal(cantNotas)
    let promedio = total / cantNotas
    let id = calcularId(array_estudiantes)
    let estudiante = new Estudiante(id, nombre, curso, cantNotas, array_notas, promedio)
    array_estudiantes.push(estudiante)
    alert(`El promedio de ${nombre} es ${promedio}`)
}


function mostrarEstudiantes(array) {
    if (array.length == 0) {
        alert("No hay estudiantes cargados")
    } else {
        console.log(`Los estudiantes cargados son:`)
        array.forEach(element => { element.mostrarInfoEstudiante() })
    }
}

function filtrarPorNombrePorCurso(array) {
    if (array.length == 0) {
        alert("No hay estudiantes cargados")
    } else {
        let inputBusqueda = prompt("Ingrese el nombre o curso que desea buscar, es una búsqueda parcial entonces puede ingresar solo una parte")

        let busqueda = array.filter(
            (dato) => dato.nombre.toLowerCase().includes(inputBusqueda.toLowerCase()) || dato.curso.toLowerCase().includes(inputBusqueda.toLowerCase())
        )
        if (busqueda.length == 0) {
            console.log(`El dato ${inputBusqueda} no está en nuestra base de datos ni como estudiante ni como curso`)
        } else {
            mostrarEstudiantes(busqueda)
        }
    }
}

function eliminarEstudiante(array) {

    if (array.length == 0) {
        alert("No hay estudiantes cargados")
    } else {
        mostrarEstudiantes(array)
        let id = parseInt(prompt("Ingrese el id del estudiante que desea eliminar"))

        let arrayID = array.map((dato) => dato.id)
        let posicion = arrayID.indexOf(id)
        if (posicion == -1) {
            alert(`El id ${id} no existe en nuestra base de datos`)
        } else {
            array.splice(posicion, 1)
            console.log(`El estudiante con id ${id} fue eliminado`)
            mostrarEstudiantes(array)

        }
    }
}
function ordernarNombre(array) {
    let arrayOrdenado = array.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0
    })
    mostrarEstudiantes(arrayOrdenado)
}

function ordenarCurso(array) {
    let arrayOrdenado = array.sort((a, b) => {
        if (a.curso > b.curso) {
            return 1
        }
        if (a.curso < b.curso) {
            return -1
        }
        return 0
    })
    mostrarEstudiantes(arrayOrdenado)
}

function ordenarPromedioMenorMayor(array) {
    const arrayMenorMayor = [].concat(array)
    arrayMenorMayor.sort((a, b) => a.promedio - b.promedio)
    mostrarEstudiantes(arrayMenorMayor)
}

function ordenarPromedioMayorMenor(array) {
    const arrayMayorMenor = [].concat(array)
    arrayMayorMenor.sort((a, b) => b.promedio - a.promedio)
    mostrarEstudiantes(arrayMayorMenor)
}

function ordenar(array) {
    if (array.length == 0) {
        alert("No hay estudiantes cargados")
    } else {
        let opcion = parseInt(prompt(`
    Ingrese el número de la opción que desea:
    1. Ordenar por nombre
    2. Ordenar por curso
    3. Ordenar por promedio de menor a mayor
    4. Ordenar por promedio de mayor a menor`))
        switch (opcion) {
            case 1:
                ordernarNombre(array)
                break;
            case 2:
                ordenarCurso(array)
                break;
            case 3:
                ordenarPromedioMenorMayor(array)
                break;
            case 4:
                ordenarPromedioMayorMenor(array)
                break;
            default:
                alert("No ingresaste una opción válida")
                break;
        }
    }
}

function menu() {
    let salirMenu = false

    do {
        let opcion = parseInt(prompt(`
        Ingrese el número de la opción que desea:

        1. Agregar estudiante
        2. Mostrar estudiantes
        3. Filtrar por nombre o curso
        4. Eliminar estudiante
        5. Ordenar
        0. Salir`))
        switch (opcion) {
            case 1:
                agregarEstudiantes()
                break;
            case 2:
                mostrarEstudiantes(array_estudiantes)
                break;
            case 3:
                filtrarPorNombrePorCurso(array_estudiantes)
                break;
            case 4:
                eliminarEstudiante(array_estudiantes)
                break;
            case 5:
                ordenar(array_estudiantes)
                break;
            case 0:
                salirMenu = true
                break;
            default:
                alert("No ingresaste una opción válida")
                break;
        }

    } while (salirMenu == false)
}

menu()
