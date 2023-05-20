// caso de nos de NPM utilisar una variable
require('dotenv').config()

//configuracion de puertos dotenv caso anterior
// const dotenv = require("dontenv")
// dotenv.config()

const http = require("http")
// expoortar
// const exportsFronAnother = require("./another")
// console.log({exportsFronAnother});

//un funcion para controlar las peticiones 
function requestController(){
    // logica de nuestro funcion
    console.log('hola javier masaquiza');
}

// crear un servidor 
const server = http.createServer(requestController)

// hay echar el puerto donde va escuchar render
const PORT = process.env.PORT

// donde se va escuchar 
server.listen(PORT, function(){
    console.log("aplicacion corriendo en puerto" + PORT);
})