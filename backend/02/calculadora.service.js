const Calculadora = {
    suma: function (a, b){
        if (a > 10000){
            return 'Error'
        }
        return a + b
    },
    resta: function (a, b){
        return a - b
    },
    multiplicacion: function (a, b){
        return a * b
    },
    division: function (a, b){
        if (b == 0){
            return 'Error'
        }
        return a / b
    }
}
module.exports = Calculadora
