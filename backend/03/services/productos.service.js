const arrProductos = [
    {
        nombre: "Agua",
        cantidad: 10,
        precio: 200,
        marca: "Salus"
    },
    {
        nombre: "Jugo",
        cantidad: 10,
        precio: 200,
        marca: "Ades"
    }
]
const Producto = {
    all: function (){
        return arrProductos
    }
}
module.exports = Producto