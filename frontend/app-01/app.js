const app = new Vue({
    el: "#app",
    data: {
        saludo: "",
        nombre: ""
    },
    methods: {
        mostrarSaludo: function (){
            // Hola, Alex!
            // Esta variable let saludo esta solo dentro de la funcion
            // Es diferente de la variable saludo dentro del data
            // Dado que la variable saludo dentro dentro del data tiene alcance en el HTML
            let nombre = this.nombre
            let saludo = "Hola, " + nombre // Hola, Alex
            this.saludo = saludo
            console.log(saludo)
        }
    }
})