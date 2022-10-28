let edades = [10, 15, 20, 23, 33]
let prom = 0

for (let i = 0; i < edades.length; i++){
    prom += edades[i]
}

prom = prom / edades.length

console.log("Promedio: ", prom)