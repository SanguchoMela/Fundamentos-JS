//API - Local Storage y Módulos
console.log("Fundamentos - API")

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))

const verUsuarios = async(id) => {
    const peticion = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const response = await peticion.json()
    console.log(`${response.name} - ${response.email} - ${response.address.city}`)
}
verUsuarios(8)

console.log("Local Storage")

// fetch('https://jsonplaceholder.typicode.com/comments/59')
//     .then(response => response.json())
//     .then(json => {
//         let comment = {
//             name: json.name,
//             email: json.email
//         }
//         guardarLocalStorage(comment)
//     })

// const guardarLocalStorage = (data) => {
//     localStorage.setItem("comment", JSON.stringify(data))
// }

// const obtenerLocalStorage = () => {
//     const respuesta = localStorage.getItem("comment") ? JSON.parse(localStorage.getItem("comment")) : "No hay data"
//     console.log(respuesta);
// }
// obtenerLocalStorage()

// const eliminarlocalStorage =()=>{
//     !localStorage.key("comment") ? console.log("No hay clave" ): localStorage.removeItem("comment")
// }
// eliminarlocalStorage()

console.log("Módulos")
console.log("Common JS")

const saludo = "Hola"
const saludar(){
    console.log(saludo)
}
module.exports = {
    saludo,
    saludar
}
// ------------------------------------------
const {saludo,saludar} = require('./module')
saludar(saludo)

console.log("ES Modules")

const multiplicar = (x,y) => {
    return x*y
}
export default multiplicar
// ------------------------------------------
import multiplicar from './module.js'
sumar(9,7)