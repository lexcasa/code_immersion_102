
const app = new Vue({
    el: "#app",
    data: {
      mensaje: "Sitio web",
      estado: 'clientes'
    },
    methods: {
        cambiarEstado: function (estado){
            this.estado = estado
        }
    },
    // t = 2 
    mounted(){
       
    }
})