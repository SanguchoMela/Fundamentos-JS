//Variables
var nombre = "Jack"
let bebida = "CocaCola"
const ci = 1753650389

//Strings
console.log("- STRINGS")

let nombre_est = "Melany"
let apellido_est = "Sangucho"
let edad_est = 22

console.log(`La estudiante ${nombre_est} ${apellido_est.toUpperCase()} tiene ${edad_est} años.`)

//Números
console.log("\n- NÚMEROS")

const num_inicial = 20

let num2 = 20
console.log("Suma: ", num_inicial+num2)

num2 = 10
console.log("Resta: ",num_inicial-num2)

console.log("Multiplicacion: ",num_inicial*5)

console.log("Raiz cuadrada: ", Math.sqrt(64))

console.log(5+9*2**3)

//Booleanos
console.log("\n- BOOLEANOS")

let calif1 = 9
let calif2 = 5

const resultado = (calif1+calif2)/2 < 7 ? "Reprueba" : "Aprueba"
console.log(`El estudiante -> ${resultado}`)

//Condicionales
console.log("\n- CONDICIONALES")

let numero = 57

if (numero%2 === 0){
    console.log(`${numero} es par`)
} else {
    console.log(`${numero} es impar`)
} 
//--------------
console.log("-----------")
let opcion = 3

switch (opcion) {
    case 1: 
        console.log("Sumar")
    break;
    case 2:
        console.log("Restar")
    break;
    case 3: 
        console.log("Multiplicar")
    break;
    default:
        console.log("Operación no disponible")
    break;
}

//Bucles
console.log("\n- BUCLES")

let mesesRestantes = 5

/*
for (let i=mesesRestantes; i>=0; i--){
    i <= 0 ? console.log("Se acabo el año") : console.log(i)
}
*/
/*
while (mesesRestantes >= 0){
    mesesRestantes <= 0 ? console.log("Se acabo el año") : console.log(mesesRestantes)
    mesesRestantes --
}
*/
/*
do {
    mesesRestantes <= 0 ? console.log("Se acabo el año") : console.log(mesesRestantes)
    mesesRestantes--
} while (mesesRestantes >= 0)
*/

// ----------
console.log("> ForEach")

let ingredientes = ["Harina","Leche","Huevos","Aceite","Polvo de hornear"]

ingredientes.forEach((t,i) => console.log(`${i+1}. ${t}`))

console.log("\n> forof")

for(const ingrediente of ingredientes) {
    console.log(ingrediente)
}

console.log("\n> forin")
let vehiculo = {
    marca: "Chevrolet",
    modelo: "Aveo Family",
    anio: 2014
}
for(const dato in vehiculo) {
    console.log(`${dato}: ${vehiculo[dato]}`)
}

console.log("\n> map")
const nuevosIngredientes = ingredientes.map(t=>t.toUpperCase())
console.log(nuevosIngredientes)

//------------------
console.log("\n--------------------------\n")
//Funciones
console.log("FUNCIONES")
console.log("\n- Fundamentos")

function miNombre (){
    console.log("Melany")
    return "Melany"
}
miNombre()
const miApellido = function(){
    console.log("Sangucho")
    return "Sangucho"
}
miApellido()

console.log("\n- Funciones anónimas y autoejecutadas")

console.log(
    function() {
        return `Nombre completo: ${miNombre()} ${miApellido()}`
    }
())

console.log("\n- Argumentos y parámetros")

function sumar (x,y){
    console.log(`Suma: ${x+y}`)
}
sumar(5,6)

function calcularPromedio(...numeros) {
    let suma = numeros.reduce((total, numero) => total + numero, 0);
    return suma / numeros.length;
}

let promedio = calcularPromedio(9,6,25,84);
console.log(`Promedio: ${promedio}`);

console.log("\n- Retorno de una función")

function saludar(){
    return "Hola"
}
console.log(saludar())

console.log("\n- Funciones flecha")

let numeros = [1,2,3,4,5]
let cuadrados = numeros.map(num => Math.pow(num,2))
console.log(cuadrados)

console.log("\n- This")

function Animal(nombreAnimal) {
    this.nombreAnimal = nombreAnimal
    this.dormir = function() {
        console.log(`El ${this.nombreAnimal} duerme`)
    }
}

let perro = new Animal("perro")
perro.dormir()

function Objeto(nombreObjeto){
    this.nombreObjeto = nombreObjeto
    this.romper = () => {
        console.log(`La ${this.nombreObjeto} se rompió`)
    }
}

let caja = new Objeto("caja")
caja.romper()

let romperObjeto = caja.romper
romperObjeto()