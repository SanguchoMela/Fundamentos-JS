//Manipulacion del DOM
console.log("Manipulación del DOM")

console.log("Acceder al contenido")
// // Los siguientes solo son ejemplos de manipulacion de DOM
// const miElementos = document.getElementById('main-head')
// const misTarjetas = document.querySelectorAll('cards-description')

// console.log("Modificar el contenido")

// document.querySelector('#heading').textContent = "Mi página principal"
// const miParrafo = document.querySelector('.description')
// miParrafo.innerHTML("Mi parrafo fue modificado")

// console.log("Modificar al estilo")

// const miBoton = document.getElementsByClassName('boton-ingresar')
// miBoton.style.color('blue')

// console.log("Agregar elementos")

// const miTabla = document.querySelector('.elementos-principales')
// const miNuevoBoton = document.createElement('button')
// button.innerText = "Añadir"
// miTabla.appendChild(button)

// console.log("Eliminar elementos")

// const miBuscador = document.querySelector('.submit-button')
// miBuscador.remove()

// console.log("Eventos")

// const botonIngresar = document.querySelector('.login-button')
// botonIngresar.addEventListener('keypress',(e) => {
//     e.preventDefault()
//     console.log("comprobando credenciales")
// })

console.log("Asincronismo")

console.log("Código síncrono vs asíncrono")

console.log("Inicio")
const suma = (x,y) => { 
    return x+y
}
suma(5,8)
console.log("Fin")

// ------------------------
console.log("Incio")
console.log("Primer pedido")
setTimeout(function(){
    console.log("Segundo pedido")
},5000)
console.log("Fin")

console.log("Promesas")

// const iniciarSesion = (datosIngreso)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datosIngreso ? resolve("Bienvenido") : reject("Datos incorrectos")
//         },3000)
//     })
// }

// iniciarSesion(false)
//     .then(respuesta => console.log(respuesta))
//     .catch(error=>console.log(error))


console.log("Async Await")

const iniciarSesion = async() => {
    try{
        const respuesta = await iniciarSesion(true)
        console.log(respuesta)
    } catch(error){
        console.log(error)
    }
}