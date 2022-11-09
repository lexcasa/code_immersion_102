const express = require('express')
const app     = express()
const port    = 3000

const Componente = require('./services/componentes.service')
const Auto       = require('./services/autos.service')
const Reporte    = require('./services/reportes.service')

// Def. de estados de la API
app.get('/', (req, res) => {
    res.send({
        saludo: "Hola Mundo"
    })
})

// Componentes
    app.get('/componentes', async (req, res) => {
        const arrComponentes = await Componente.all()
        res.send(arrComponentes)
    })

    app.get('/componentes/:id', async (req, res) => {
        const id = req.params.id
        const componente = await Componente.byId(id)
        res.send(componente)
    })

// Autos
    app.get('/autos', async (req, res) => {
        const arr = await Auto.all()
        res.send(arr)
    })

    app.get('/autos/:id', async (req, res) => {
        const id = req.params.id
        const arr = await Auto.byId(id)
        res.send(arr)
    })

// Reportes
app.get('/reportes/autos', async (req, res) => {
    const arrRepAutos = await Reporte.autos()
    res.send(arrRepAutos)
})

app.listen(port, (req, res) => {
  console.log("listen :::")  
})