// 3 formas de ejecutar código asíncrono (callbacks, promesas, asyn - await)

//callbacks - ECMAJS - callback hell 

/*promesas -- resultado de una tarea asíncrona que aún no se ha completado
Estados: prendiente, cumplida, rechazada(rejected)
*/

/*
const conexionBDD = (datosConexion) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexion OK") : reject("Conexion error")
        })
    })
}
console.log(conexionBDD)
*/
/*
conexionBDD(true)
    .then((r)=>{console.log(r);})
    .catch((e)=>{console.log(e)})
*/

/*
fetch()
    .then(first = (second) => {third})
    .catch(first = (second) => {third})
*/
/*Mecanismos para acceder a una API: XML HTTP, Fetch, Axios, ReactQuery*/


/*
const obtenerDatos = fetch("https://jsonplaceholder.typicode.com/users") 

obtenerDatos
    .then(p => p.json())
    .then(rr => console.log(rr))
    .catch(er => console.log(er))
*/

fetch("https://jsonplaceholder.typicode.com/users") 
    .then(p => p.json())
    .then(rr => console.log(rr))
    .catch(er => console.log(er))

//ASYNC - AWAIT

const conectarAPI = async() => {  
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users") 
        const data = await respuesta.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
conectarAPI()


// conexionBDD(true)
//     .then((r)=>{console.log(r);})
//     .catch((e)=>{console.log(e)})


const conexionBDD = async() => {
    try{
        const r = await conexionBDD(true)
        console.log(r)
    } catch(e){
        console.log(e)
    }
}

// ------------------------------------
// -----------DOM------------------