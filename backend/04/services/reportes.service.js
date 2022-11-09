const Mdb = require('./mdb.service')

const Reporte = {
    autos: function (){
        const query = `
            SELECT 
                marcas.Nombre AS Marca,
                autos.Matricula,
                autos.Modelo
            FROM autos
            JOIN marcas ON autos.IdMarca = marcas.ID
        `
        return Mdb.query(query, [])
    }
}
module.exports = Reporte