Vue.component('basic-component', {
    data: function (){
        return {
            mensaje: 'Componente Basico'
        }
    },
    template: `
        <div id="basic-component">
            <h2>{{mensaje}}</h2>
        </div>
    `
})