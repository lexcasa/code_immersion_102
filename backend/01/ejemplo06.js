const saludo = function (nombre){
    let mensaje = "Hola, "
    return mensaje + nombre
}

let saludoPersona = saludo("Alex")
console.log(saludoPersona)