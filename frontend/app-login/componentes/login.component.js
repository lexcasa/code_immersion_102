const LoginComp = Vue.component('login-component', {
    data: function (){
        return {
            mensaje: "Login",
            formulario: {
                usuario: '',
                clave: ''
            }
        }
    },
    methods: {
        login: function (){
            if(this.formulario.usuario == 'admin' && this.formulario.clave == 'admin'){
                this.$router.push('/panel')
            } else {
                alert("Error de usuario")
            }
        }
    },
    template: `
        <div id="login-component">
            <h2>{{mensaje}}</h2>
            <form action="">
                <input type="text" placeholder="Usuario" v-model="formulario.usuario">
                <br>
                <input type="password" placeholder="Clave" v-model="formulario.clave">
                <br>
                <button type="button" @click="login()">Ingresar</button>
            </form>
        </div>
    `
})