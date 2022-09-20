const routes = [
    { path: '/', component: LoginComp },
    { path: '/panel', component: PanelComp }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')