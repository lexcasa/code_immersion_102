const MODEL_BASE = {
    _id: undefined,
    nombre: '',
    apellido: '',
    edad: '',
    nacimiento: ''
}
const app = new Vue({
    el: "#app",
    data: {
      mensaje: "CRUD",
      item: {...MODEL_BASE},
      items: [],
      API: 'https://crudcrud.com/api/0056a8b26da34b0d9e1571b6a17522f5',
      MODEL: '/clientes'
    },
    methods: {
        initDatos: function (){
            this.item = {...MODEL_BASE}
        },
        // t=1
        guardar: function (){
            // t=2
            let URL = this.API + this.MODEL // https://crudcrud.com/api/03430e20d73944c1bac914ae52d0c09a/productos
            let item = {...this.item}
            // t=2
            // Si el valor de la _id es null
            // Creando un item nuevo
            if(item._id == undefined){
                axios.post(URL, item).then( res => {
                    // t= ??
                    console.log("Respuesta API: ", res.data)
                    this.initDatos()
                    this.obtenerItems()
                })
            } else {
                URL += '/' + item._id
                // {_id: asdasd, nombre: asdsd, precio: 1231}
                delete item._id
                axios.put(URL, item).then( res => {
                    // t= ??
                    console.log("Respuesta API: ", res.data)
                    this.initDatos()
                    this.obtenerItems()
                })
            }
        },
        obtenerItems: function (){
            const URL = this.API + this.MODEL // https://crudcrud.com/api/03430e20d73944c1bac914ae52d0c09a/productos
            axios.get(URL).then( res => {
                this.items = res.data
            })
        },
        seleccionar: function (item){
            this.item = {...item}
        },
        eliminar: function (id){
            let quieroEliminar = confirm('Estas seguro que quieres eliminar?') // true, false
            let URL = this.API + this.MODEL
            URL += '/' + id
            if(quieroEliminar == true){
                // Eliminar
                axios.delete(URL).then( res => {
                    this.initDatos()
                    this.obtenerItems()
                })
            }
        }
    },
    // t = 2 
    mounted(){
        // Ejecuto la funcion dentro del mounted
       this.obtenerItems()
    }
})