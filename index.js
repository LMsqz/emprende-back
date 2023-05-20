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

// donde se va escuchar 
server.listen(4000)