// t = 1
const app = new Vue({
    el: "#app",
    data: {
      mensaje: "Hola Mundo!",
      persona: {
        nombre: '',
        edad: 0,
        cedula: 0,
        barrio: ''
      }
    },
    methods: {
    },
    // t = 2 
    mounted(){
       axios.get('personas.json').then( res => {
        console.log("personas desde el JSON: ", res.data)
        this.persona = res.data[0]
       }) 
    }
})