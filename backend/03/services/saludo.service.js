const Saludo = {
    saludar: function (nombre){
        return {
            saludo: "Hola, " + nombre
        }
    }
}
module.exports = Saludo
console.log("Saludar a Alex: ",     Saludo.saludar("Alex"))
console.log("Saludar a Robert: ",   Saludo.saludar("Robert"))