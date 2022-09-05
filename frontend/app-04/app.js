// t = 1
const app = new Vue({
    el: "#app",
    data: {
      mensaje: "Hola Mundo!",
      productos: []
    },
    methods: {
    },
    // t = 2 
    mounted(){
        // Peticion GET
        // Libreria --- GET --- URL --- Resluevo peticion
        // t = 3
        let respuesta = {}
        axios.get('productos.json').then( res => {
            // t = i 
            respuesta = res
            console.log("Respuesta archivo - axios: ", respuesta.data)
            this.productos = respuesta.data
        })

    }
})