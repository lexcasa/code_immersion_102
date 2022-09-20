const PanelComp = Vue.component('panel-component', {
    data: function (){
        return {
            mensaje: 'Bienvenido, usuario'
        }
    },
    template: `
        <div id="panel-component">
            <h2>{{mensaje}}</h2>
            <menu-component></menu-component>
        </div>
    `
})