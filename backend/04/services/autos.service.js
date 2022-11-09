const Mdb = require('./mdb.service')

const Auto = {
    all: function (){
        const query = `
            SELECT * FROM autos
        `
        return Mdb.query(query, [])
    },
    byId: function (id){
        const query = `
            SELECT * FROM autos WHERE ID = ? 
        `
        return Mdb.query(query, [id])
    }
}
module.exports = Auto