Vue.component('menu-component', {
    data: function (){
        return {
            items: [
                {to: '/clientes', nombre: 'Clientes'},
                {to: '/productos', nombre: 'Productos'},
                {to: '/tiendas', nombre: 'Tiendas'},
                {to: '/personas', nombre: 'Personas'},
                {to: '/', nombre: 'Cerrar sesion'},
                {to: 'https://facebook.com', nombre: 'Ir a facebook', external: true}
            ]
        }
    },
    template: `
        <div id="menu-component">
            <ul>
                <li v-for="item in items">
                    <router-link v-bind:to="item.to" v-if="!item.external">{{item.nombre}}</router-link>
                    <a v-bind:href="item.to" v-if="item.external" target="_new">{{item.nombre}}</a>
                </li>
            </ul>
        </div>
    `
})