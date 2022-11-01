const Calculadora = require('../calculadora.service')
const TestSuite   = require('./test.suite')
 
// Casos de prueba
// 1. Sumar dos numeros positivos                    : Input: 1 + 1     --- Output: 2
// 2. Sumar dos numeros negativos                    : Input: -1 + -1   --- Output: -2
// 3. Sumar un numero positivo y otro negativo       : Input: -1 + 1    --- Output: 0
// 4. Sumar un numero entero positivo con un decimal : Input: 1 + 0.5   --- Output: 1.5
// 5. Si a > 10000 entonces me arroja un error       : Input: 10001 + 1 --- Output: Error

// Tests suma
console.log("Casos de prueba :: SUMA")
console.log("Caso 1: ", TestSuite.validate( Calculadora.suma(1, 1),     2) )
console.log("Caso 2: ", TestSuite.validate( Calculadora.suma(-1, -1),  -2) )
console.log("Caso 3: ", TestSuite.validate( Calculadora.suma(-1, 1),    0) )
console.log("Caso 4: ", TestSuite.validate( Calculadora.suma(1, 0.5), 1.5) )
console.log("Caso 5: ", TestSuite.validate( Calculadora.suma(10001, 0.5), 'Error') )

/* 
// Casos de prueba
// 1. Restar dos numeros positivos                    : Input: 1 - 1     --- Output: 0
// 2. Restar dos numeros negativos                    : Input: -1 - -1   --- Output: 0
// 3. Restar un numero positivo y otro negativo       : Input: -1 - 1    --- Output: -2
// 4. Restar un numero entero positivo con un decimal : Input: 1 - 0.5   --- Output: 0.5

// Tests Resta
console.log("Casos de prueba :: RESTA")
console.log("Caso 1: ", Calculadora.resta(1, 1) )
console.log("Caso 2: ", Calculadora.resta(-1, -1) )
console.log("Caso 3: ", Calculadora.resta(-1, 1) )
console.log("Caso 4: ", Calculadora.resta(1, 0.5) )

// Casos de prueba
// 1. Multiplicar dos numeros positivos                    : Input: 2 x 1     --- Output: 2
// 2. Multiplicar un numero por 0                          : Input: 0 x 10    --- Output: 0
// 3. Multiplicar un numero positivo y otro negativo       : Input: -1 * 1    --- Output: -1
// 4. Multiplicar un numero por un decimal                 : Input: 4 * 0.5   --- Output: 2

console.log("Casos de prueba :: MULTIPLICACION")
console.log("Caso 1: ", Calculadora.multiplicacion(2, 1) )
console.log("Caso 2: ", Calculadora.multiplicacion(0, 10) )
console.log("Caso 3: ", Calculadora.multiplicacion(-1, 1) )
console.log("Caso 4: ", Calculadora.multiplicacion(4, 0.5) )

// Casos de prueba
// 1. Dividir dos numeros positivos                        : Input: 2 / 2     --- Output: 1
// 2. Dividir un numero por 0                              : Input: 10 / 0    --- Output: Error
// 3. Dividir un numero positivo y otro negativo           : Input: -1 / 1    --- Output: -1
// 4. Dividir un numero por un decimal                     : Input: 4 / 0.5   --- Output: 8

console.log("Casos de prueba :: DIVISION")
console.log("Caso 1: ", Calculadora.division(2, 2) )
console.log("Caso 2: ", Calculadora.division(10, 0) )
console.log("Caso 3: ", Calculadora.division(-1, 1) )
console.log("Caso 4: ", Calculadora.division(4, 0.5) )
*/