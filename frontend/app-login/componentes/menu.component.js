Vue.component('menu-component', {
    data: function (){
        return {
            items: [
                {to: '/clientes', nombre: 'Clientes'},
                {to: '/productos', nombre: 'Productos'},
                {to: '/tiendas', nombre: 'Tiendas'},
                {to: '/', nombre: 'Cerrar sesion'},
            ]
        }
    },
    template: `
        <div id="menu-component">
            <ul>
                <li v-for="item in items"><router-link v-bind:to="item.to">{{item.nombre}}</router-link></li>
            </ul>
        </div>
    `
})