const arrClientes = [
    {
        "nombre":"Alex",
        "documento":123123,
        "email":"lexcasa@gmail.com"
    },
    {
        "nombre":"Juan",
        "documento":111222,
        "email":"juan@gmail.com"
    }
]
const Cliente = {
    all: function (){
        return arrClientes
    }
}
module.exports = Cliente
console.log("Todos los clientes :: ", Cliente.all())