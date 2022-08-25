const app = new Vue({
    el: "#app",
    data: {
        lista: ['Manzana','Pera','Ajo','Banana','Naranja'],
        saludo: "Hola",
        visible: false // Cuando visible es false la lista queda oculta
                       // Cuando visible es true la lista se muestra
    },
    methods: {
       mostrarLista: function (){
            this.visible = true
       },
       toggleLista: function (){
            this.visible = !this.visible
       }
    }
})