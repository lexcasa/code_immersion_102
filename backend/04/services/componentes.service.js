const Mdb = require('./mdb.service')

const Componente = {
    all: function (){
        const query = `
            SELECT * FROM componentes
        `
        return Mdb.query(query, [])
    },
    byId: function (id){
        const query = `
            SELECT * FROM componentes WHERE ID = ? 
        `
        return Mdb.query(query, [id])
    }
}
module.exports = Componente