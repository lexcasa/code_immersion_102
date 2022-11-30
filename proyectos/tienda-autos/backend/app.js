const express       = require('express')
const bodyParser    = require('body-parser') 
const cors          = require('cors')
const app     = express()
const port    = 3000

const Componente = require('./services/componentes.service')
const Auto       = require('./services/autos.service')
const Reporte    = require('./services/reportes.service')
const Marca      = require('./services/marcas.service')
const Usuario    = require('./services/usuarios.service')

app.use( cors() )
app.use( bodyParser.json() )

// Def. de estados de la API
app.get('/', (req, res) => {
    res.send({
        saludo: "Hola Mundo"
    })
})

// Login de usuario
app.post('/login', async (req, res) => {
    const usuario = req.body
    let arr     = await Usuario.login(usuario)

    res.send(arr)
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

// Marcas
    app.get('/marcas', async (req, res) => {
        const arr = await Marca.all()
        res.send(arr)
    })

    app.get('/marcas/:id', async (req, res) => {
        const id = req.params.id
        const arr = await Marca.byId(id)
        res.send(arr)
    })

    app.post('/marcas', async (req, res) => {
        const marca = req.body
        let arr     = undefined
        
        if (marca.nombre != ""){
            arr = await Marca.new(marca)

            if(arr.insertId > 0){
                arr = {
                    success: true
                }
            }
        } else {
            arr = {
                error: "El campo marca no puede estar vacio"
            }
        }

        res.send(arr)
    })

    app.put('/marcas/:id', async (req, res) => {
        const marca = req.body
        let arr     = undefined
        
        if (marca.nombre != ""){
            arr = await Marca.edit(marca)

            if(arr.changedRows > 0){
                arr = {
                    success: true
                }
            } else {
                arr = {
                    error: "El valor no fue modificado"
                }
            }
        } else {
            arr = {
                error: "El campo marca no puede estar vacio"
            }
        }

        res.send(arr)
    })

    app.delete('/marcas/:id', async (req, res) => {
        const id = req.params.id
        try {
            let arr = await Marca.delete(id)

            if(arr.changedRows == 0 && arr.insertId == 0 && arr.affectedRows > 0){
                arr = {
                    success: true
                }
            } else {
                arr = {
                    error: "No se pudo eliminar el registro o esta eliminado"
                }
            }
            res.send(arr)
        } catch (e){
            console.log(e)
            res.send({error: "No se pudo eliminar el registro o esta eliminado"})
        }
    })

// Reportes
app.get('/reportes/autos', async (req, res) => {
    const arrRepAutos = await Reporte.autos()
    res.send(arrRepAutos)
})

app.listen(port, (req, res) => {
  console.log("listen :::")  
})