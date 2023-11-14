console.log("Clase 2")

/*
const user = {
    name: "Melany",
    ciudad: "Quito",
    activo: true,
    address: {
        calle: "El Cedro",
        secundaria: "Auqui de Monjas"
    },
    edad: 22, 
    friends: ["Nicole","David","Denice"],
    sendMail(){
        return `Send mail ${this.friends[0]}`
    },
    sendNotification : function(){
        return `Send notification ${this.friends[2]}`
    }
}

console.log(user.ciudad)
console.log(user.edad)
console.log(user.sendMail())
console.log(user.sendNotification())

user.image = "http:/image/profile"
delete user.friends

console.log(user)          

user.name
user.edad
user.friends
user.activo
*/
//const{name,edad,friends,activo} = user


//

/*const user = {
    name: "Melany",
    ciudad: "Quito",
    activo: true
}
const address = {
    calle: "El Cedro",
    secundaria: "Auqui de Monjas"
}


//const {name,ciudad,activo} = user

const allInformation = {...user,...address}

console.log(allInformation)

console.log(name,ciudad,activo);
*/


/*
const name = "laptop"
const price = 3000

const newProduct = {
    name,
    price
}
console.log(newProduct) //ES6 Nombres abreviados de propiedades
*/

// Arreglos

//const profileUser = ["Melany", "Sangucho", 22, true, {ciudad: "Quito"},"❤️"]

/*
const skills = ["front", "back"]

profileUser.push(skills)
console.log(profileUser);

profileUser.shift()  //métodos de arrays en JS
console.log(profileUser)


const findOne = profileUser.find((e)=> e === "Juan")
const findTwo = profileUser.find((e)=> e === "Sangucho")

console.log(findOne)
console.log(findTwo)
*/

/*

const profileUser = ["Melany","Sangucho","❤️","78"]

//const newData = profileUser.map(i => i.toUpperCase)

const newData = profileUser.map(i => `${i}`)

console.log(newData)
*/

const data = ["Melany", "Sangucho", 22, true, {ciudad: "Quito"},["front","back"]]

console.log(data[0])
console.log(data[1])
console.log(data[2])
console.log(data[3])
console.log(data[4])

const frutas = ["uva","pera"]
const newData = [...data,...frutas]

const [name,lastname,age,active,address,skill] = data
//      0       1     2     3      4      5

console.log(name,lastname,age,active,address,skill);