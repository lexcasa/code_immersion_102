// t = 1
const API   = 'https://crudcrud.com/api/ee5c6137625e4d6a9d157e1a45499237'
const MODEL = '/productos'
const app = new Vue({
    el: "#app",
    data: {
      mensaje: "Productos",
      producto: {
        nombre: '',
        precio: null
      },
      productos: []
    },
    methods: {
        initDatos: function (){
            this.producto = {
                nombre: '',
                precio: null
            }
        },
        // t=1
        guardarProducto: function (){
            // t=2
            const URL = API + MODEL // https://crudcrud.com/api/03430e20d73944c1bac914ae52d0c09a/productos
            // t=2
            axios.post(URL, this.producto).then( res => {
                // t= ??
                console.log("Respuesta API: ", res.data)
                this.initDatos()
                this.obtenerProductos()
            })
            console.log("producto: ", this.producto)
        },
        obtenerProductos: function (){
            const URL = API + MODEL // https://crudcrud.com/api/03430e20d73944c1bac914ae52d0c09a/productos
            axios.get(URL).then( res => {
                this.productos = res.data
            })
        }
    },
    // t = 2 
    mounted(){
        // Ejecuto la funcion dentro del mounted
       this.obtenerProductos()
    }
})