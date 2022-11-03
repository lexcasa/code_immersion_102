const express = require('express')
const app     = express()
const port    = 3000

const Cliente  = require('./services/cliente.service')
const Producto = require('./services/productos.service')
const Saludo   = require('./services/saludo.service')

// Def. de estados de la API
app.get('/', (req, res) => {
    res.send({
        saludo: "Hola Mundo"
    })
})

// Obtener clientes
app.get('/clientes', (req, res) => {
    const arrClientes = Cliente.all()
    res.send(arrClientes)
})

// Obtener productos
app.get('/productos', (req, res) => {
    const arrProductos = Producto.all()
    res.send(arrProductos)
})

// Saludo 
app.get('/saludo/:nombre', (req, res) => {
    const nombre       = req.params.nombre
    const saludo       = Saludo.saludar(nombre)
    res.send(saludo)
})

app.get('/saludo-con-apellido/:nombre/:apellido', (req, res) => {
    const nombre       = req.params.nombre
    const apellido     = req.params.apellido
    const saludo       = Saludo.saludar(nombre + " " + apellido)
    res.send(saludo)
})


app.listen(port, (req, res) => {
  console.log("listen :::")  
})