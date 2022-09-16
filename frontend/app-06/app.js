// t = 1
const API   = 'https://crudcrud.com/api/0056a8b26da34b0d9e1571b6a17522f5'
const MODEL = '/productos'
const app = new Vue({
    el: "#app",
    data: {
      mensaje: "Productos",
      producto: {
        nombre: '',
        precio: null,
        _id: undefined
      },
      productos: []
    },
    methods: {
        initDatos: function (){
            this.producto = {
                nombre: '',
                precio: null,
                _id: undefined
            }
        },
        // t=1
        guardarProducto: function (){
            // t=2
            let URL = API + MODEL // https://crudcrud.com/api/03430e20d73944c1bac914ae52d0c09a/productos
            let producto = {...this.producto}
            // t=2
            // Si el valor de la _id es null
            // Creando un producto nuevo
            if(producto._id == undefined){
                axios.post(URL, producto).then( res => {
                    // t= ??
                    console.log("Respuesta API: ", res.data)
                    this.initDatos()
                    this.obtenerProductos()
                })
            } else {
                URL += '/' + producto._id
                // {_id: asdasd, nombre: asdsd, precio: 1231}
                delete producto._id
                axios.put(URL, producto).then( res => {
                    // t= ??
                    console.log("Respuesta API: ", res.data)
                    this.initDatos()
                    this.obtenerProductos()
                })
            }
            console.log("producto: ", this.producto)
        },
        obtenerProductos: function (){
            const URL = API + MODEL // https://crudcrud.com/api/03430e20d73944c1bac914ae52d0c09a/productos
            axios.get(URL).then( res => {
                this.productos = res.data
            })
        },
        seleccionarProducto: function (producto){
            this.producto = {...producto}
        },
        eliminarProducto: function (id){
            let quieroEliminar = confirm('Estas seguro que quieres eliminar?') // true, false
            let URL = API + MODEL
            URL += '/' + id
            if(quieroEliminar == true){
                // Eliminar
                axios.delete(URL).then( res => {
                    this.initDatos()
                    this.obtenerProductos()
                })
            }
        }
    },
    // t = 2 
    mounted(){
        // Ejecuto la funcion dentro del mounted
       this.obtenerProductos()
    }
})