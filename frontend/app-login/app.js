const routes = [
    { path: '/', component: LoginComp },
    { path: '/panel', component: PanelComp },
    { path: '/clientes', component: ClienteComp },
    { path: '/productos', component: ProductoComp },
    { path: '/tiendas', component: TiendaComp }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')