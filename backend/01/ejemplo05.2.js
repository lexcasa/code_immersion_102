let edades = [10, 15, 20, 23, 33]
let prom = 0

edades.map( edad => {
    prom += edad
})

prom = prom / edades.length

console.log("Promedio: ", prom)