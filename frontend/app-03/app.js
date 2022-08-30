const app = new Vue({
    el: "#app",
    data: {
        item: {
            nombre: "",
            completado: false
        },
        lista: [],
        indiceDinamico: undefined
    },
    methods: {
        guardarMemoria: function (){
            const LISTA_MEMORIA = JSON.stringify(this.lista)
            window.localStorage.setItem('_lista_app', LISTA_MEMORIA)
        },
        agregarItem: function (){
            const item = {...this.item} // Construir un objeto de 0
             

            if(this.indiceDinamico != undefined){
                // this.lista[this.indiceDinamico] = item // Est. de JS
                this.$set(this.lista, this.indiceDinamico, item) // Est. de datos de Vue
            } else {
                this.lista.push(item) // Metodo .push(objeto) agrega el obheto para dentro de la lista
            }

            // Agrego o edito un item
            // Guardo en memoria
            this.guardarMemoria()

            // Una vez que agrego a la lista
            // Reinicio los valores del objeto item
            this.item.nombre = ""
            this.item.completado = false
            this.indiceDinamico = undefined
        },
        completarItem: function (indice){
            this.lista[indice].completado = true
            console.log("this.lista: ", this.lista)
            this.guardarMemoria()
        },
        eliminarItem: function (indice){
            // El splice remueve un elemento de la lista
            // splice(indice, cantidad)
            if(this.lista[indice].completado == false){ // Si no esta completado el item de la lista
                this.lista.splice(indice, 1)
            }
            this.guardarMemoria()
        },
        editarItem: function (indice){
            // Agarro manzana que esta en la posicion 0
            if(this.lista[indice].completado == false){
                this.item.nombre     = this.lista[indice].nombre
                this.item.completado = this.lista[indice].completado

                this.indiceDinamico  = indice
            }
            // this.item.nombre     -> Manzana
            // this.item.completado -> false
        }
    },
    mounted(){
        console.log("Pagina cargada :: ")
        const LISTA_MEMORIA = window.localStorage.getItem('_lista_app')
        console.log(LISTA_MEMORIA)
        
        if(LISTA_MEMORIA == null){
            this.lista = []
        } else {
            this.lista = JSON.parse(LISTA_MEMORIA)
        }
    }
})