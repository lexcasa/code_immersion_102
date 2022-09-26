const routes = [
    { path: '/', component: PanelComp },
    { path: '/tienda', component: TiendaComp }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')