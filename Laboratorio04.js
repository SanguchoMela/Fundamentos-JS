//Objetos
console.log("OBJETOS")
console.log("- Fundamentos")

const vehiculo = {
    marca: "Chevrolet",
    modelo: "Aveo Family",
    anio: "2014",
    propietario: {
        nombre: "Rafael",
        edad: "48"
    },
    comprarVehiculo: function () {
        return `${this.propietario.nombre} compro el vehiculo`
    }
}
console.log(vehiculo.marca)
console.log(vehiculo.comprarVehiculo())

vehiculo.cilindraje = 1200
delete vehiculo.anio

console.log(vehiculo)

console.log("\n- Destructuración")

// const {marca, modelo,propietario} = vehiculo
// console.log(marca,modelo,propietario)

// const {marca, modelo, elPropietario=vehiculo.propietario} = vehiculo
// console.log(marca,modelo,elPropietario)

const {marca, modelo, propietario:{nombre}} = vehiculo
console.log(marca,modelo,nombre)

console.log("\n- Congelar objetos")

// Object.freeze(vehiculo)
// console.log(Object.isFrozen(vehiculo))
// vehiculo.image = "vehiculo.png"
// console.log(vehiculo)

Object.seal(vehiculo)
console.log(Object.isSealed(vehiculo))
vehiculo.modelo = "Spark"
console.log(vehiculo)

console.log("\n- Copiar dos objetos")

const mascota = {
    especie: "gato",
    nombre: "Fide",
    edad: 2,
    vacunas: {
        tripleFelina: true,
        leucemia: false,
        rabia:false
    }
}

const dueño = {
    nombre: "Melany Sangucho",
    edad: 22,
    direccion: {
        callePrincipal: "El Cedro",
        calleSecundaria: "Auqui de Monjas",
        numeroCasa: "S1-918"
    },
    amigos: ["Dayana","Ruth","Johana"],
    sendAlarm: () => {
        return `send alarm to ${this.amigos[2]}`
    },
    sendMessage () {
        return `send message to ${this.amigos[0]}`
    }
}

const dueño_mascota = {...dueño,...mascota}
console.log(dueño_mascota)

console.log("\n- This en objetos")

// console.log(dueño.sendAlarm())
console.log(dueño.sendMessage())

console.log("\n- Métodos para objetos")

console.log("Obtener claves: ", Object.keys(dueño))
console.log("Obtener valores: ", Object.values(dueño))
console.log("Obtener claves y valores en un array: ", Object.entries(dueño))

console.log("\n- Nombres abreviados")

const producto = "sillón"
const precio = 900

const newProduct = {
    producto,
    precio
}
console.log(newProduct)

//Arreglos
console.log("\nARREGLOS")
console.log("\n- Fundamentos")

const frutasFav = ["melon","sandia","piña","frutilla"]
const edadesFamilia = [58,48,24,22]
const estudiante = ["Melany","Sangucho",22,{estado:"activo"},["David","Nicole"]]

console.log("Numero de frutas favoritas: ",frutasFav.length)
console.log("Numero de edades: ",edadesFamilia.length)
estudiante.length > 0 ? console.log("Registrado") : console.log("Sin registro")

console.log("\n- Recorrido")

for (let i=0; i<frutasFav.length; i++){
    console.log(frutasFav[i])
}

frutasFav.forEach((e,i) => console.log(`${i+1} - ${e}`))

const newFruits = frutasFav.map((e) => `Fruta: ${e}`)
console.log(frutasFav)
console.log(newFruits)

const peliculas = [
    {
        titulo: "Wind river",
        estreno: "2017",
        director: "Taylor Sheridan"
    },
    {
        titulo: "Oppenheimer",
        estreno: "2023",
        director: "Christofer Nolan"
    }
]
peliculas.forEach(p => console.log(`${p.titulo} - ${p.estreno}`))

console.log("\n- Métodos")

const nombres = ["David", "Johana", "Nicole", "Nayeli", "Celine"]
const edades = [28,26,24,22,15]
const otroNombre = "Liliana"

console.log("--- push y unshift")
nombres.push(edades)
nombres.unshift(otroNombre)
console.log(nombres)

console.log("--- pop y shift")
nombres.pop(nombres)
nombres.shift(nombres)
console.log(nombres)

console.log("--- find")
const friendOne = nombres.find((e)=>e==="David")
console.log(friendOne)
const friendTwo = nombres.find((e)=>e==="Juan")
console.log(friendTwo)

console.log("--- findIndex")
const encontrar = nombres.findIndex((f) => f==="Nicole")
console.log(encontrar)

console.log("--- filter")
const newFriendOne = nombres.filter((n)=>n.startsWith("N"))
console.log(newFriendOne)
const newFriendTwo = nombres.filter((n)=>n!="Celine")
console.log(friendTwo)

console.log("--- concat")
const newNames = nombres.concat(edades)
console.log(newNames)

console.log("--- includes")
console.log(edades.includes(15))
console.log(nombres.includes("Maria"))

console.log("--- some")
const existe = peliculas.some(m => m.titulo === "Wind river")
console.log(existe)

const verifica = nombres.some(v => v === "Josue")
console.log(verifica)

console.log("--- every")
const result = peliculas.every(r => r.estreno > 2022)
console.log(result)

const response = peliculas.some(r => r.estreno > 2022)
console.log(response)

console.log("--- reverse")
console.log(nombres.reverse())

console.log("--- sort")
console.log(nombres.sort())

console.log("--- reduce")
const sumaEdades = edades.reduce((total,numeroEdad) => total + numeroEdad, 0)
console.log(sumaEdades)

console.log("\n- Destrucción")
const [titulo,estreno,director] = peliculas
console.log(titulo)
console.log(estreno)
console.log(director)

const [manzana, , pera] = ['rojo', 'azul', 'verde']
console.log(manzana)
console.log(pera)

const letras = ['a','b','c','d',['z','y','x']]
const ultimas = letras[4]
const primeraVocal = letras[0]
console.log(ultimas)
console.log(primeraVocal)

console.log("\n- Rest vs Spread")
console.log("--- Rest Operator")
const [perro, gato, oso, ...rest] = ['🐕','🐈‍⬛','🧸','🐎','🐁','🐘','🐇','🦉']
console.log(perro)
console.log(oso)
console.log(rest)

console.log("--- Spread operator")
const newPeople = [...nombres,...edades]
console.log(newPeople)