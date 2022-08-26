const app = new Vue({
    el: "#app",
    data: {
        item: {
            nombre: "",
            completado: false
        },
        lista: []
    },
    methods: {
        agregarItem: function (){
            const item = {...this.item} // Construir un objeto de 0
            this.lista.push(item) // Metodo .push(objeto) agrega el obheto para dentro de la lista

            // Una vez que agrego a la lista
            // Reinicio los valores del objeto item
            this.item.nombre = ""
            this.item.completado = false
        },
        completarItem: function (indice){
            this.lista[indice].completado = true
            console.log("this.lista: ", this.lista)
        },
        eliminarItem: function (indice){
            // El splice remueve un elemento de la lista
            // splice(indice, cantidad)
            if(this.lista[indice].completado == false){ // Si no esta completado el item de la lista
                this.lista.splice(indice, 1)
            }
        }
    }
})