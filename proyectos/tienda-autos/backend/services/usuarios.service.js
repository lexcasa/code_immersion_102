const Mdb = require('./mdb.service')
const tabla = "usuarios"

const Usuario = {
    login: function (usuario){
        const query = `
            SELECT ID, Nombre, Apellido, Documento FROM usuarios
            WHERE Email = ? AND Clave = MD5(?)
        `
        return Mdb.query(query, [usuario.email, usuario.clave]) // { id: 4, nombre: "Honda" }
    }
}
module.exports = Usuario