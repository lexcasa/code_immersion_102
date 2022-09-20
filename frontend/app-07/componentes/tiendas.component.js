const COMP_TIENDA_CRUD = {
    _id: undefined,
    nombre: '',
    direccion: ''
}
Vue.component('tienda-crud', {
    data: function (){
        return {
            mensaje: "Tiendas",
            item: {...COMP_TIENDA_CRUD},
            items: [],
            API: 'https://crudcrud.com/api/f234c00a387848a890a4dc3a43138b42',
            MODEL: '/tiendas'
        }
    },
    methods: {
        initDatos: function (){
            this.item = {...COMP_TIENDA_CRUD}
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
    },
    template: `
        <div id="tienda-crud">
            <h2>{{mensaje}}</h2>
            <form action="">
                <div v-for="(valor, key) in item" v-if="valor != undefined">
                    <input type="text" v-bind:placeholder="key" v-model="item[key]" v-bind:disabled="key == '_id'">
                </div>
                <button type="button" @click="guardar()">Guardar</button>
                <button type="button" @click="initDatos()">Cancelar</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th v-for="(valor, key) in item">{{key}}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cItem, i) in items" :key="i">
                        <td v-for="(valor, key) in item">{{cItem[key]}}</td>
                        <td>
                            <button @click="seleccionar(cItem)">Seleccionar</button>
                            <button @click="eliminar(cItem._id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})