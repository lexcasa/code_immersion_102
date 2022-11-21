const Mdb = require('./mdb.service')
const tabla = "marcas"

const Marca = {
    all: function (){
        const query = `
            SELECT * FROM ${tabla}
        `
        return Mdb.query(query, [])
    },
    byId: function (id){
        const query = `
            SELECT * FROM ${tabla} WHERE ID = ? 
        `
        return Mdb.query(query, [id])
    },
    new: function (marca){
        const query = `
            INSERT INTO marcas (Nombre)
            VALUES (?)
        `
        return Mdb.query(query, [marca.nombre]) // { nombre: "SEAT" }
    },
    edit: function (marca){
        const query = `
            UPDATE marcas SET Nombre = ?
            WHERE ID = ? 
        `
        return Mdb.query(query, [marca.nombre, marca.id]) // { id: 4, nombre: "Honda" }
    },
    delete: function (id){
        const query = `
            DELETE FROM ${tabla} WHERE ID = ? 
        `
        return Mdb.query(query, [id])
    }
}
module.exports = Marca