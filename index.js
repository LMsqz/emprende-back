// caso de nos de NPM utilisar una variable
require('dotenv').config()
//configuracion de puertos dotenv caso anterior
// const dotenv = require("dontenv")
// dotenv.config()
const http = require("http")
// expoortar
// const exportsFronAnother = require("./another")
// console.log({exportsFronAnother});

const fs = require("fs")
// https. server request escuchador de evento


//un funcion para controlar las peticiones 
function requestController(req, res){
    const url = req.url
    const method = req.method
    // logica de nuestro funcion
    console.log({url, method});

    if(method === "GET" && url === "/"){
        res.setHeader("Content-type", "text/html");
        fs.readFile('./public/index.html', function(err, file){
            if(err){
                console.log("hubo un ERROR");
            }
            res.write(file)
            res.end()
        })
        return
    }
    if(method === "GET" && url === "/about"){
        res.setHeader("Content-type", "text/html")
        fs.readFile("./public/about.html", function(err, file){
            if(err){
                console.log("hubo un ERROR");
            }
            res.write(file)
            res.end()
        })
        return
    }
    res.setHeader("Content-type", "text/html; charset=utf-8")
    res.write("<h1>Pagina no encotrada🙀</h1>")
    res.end()
}

// crear un servidor 
const server = http.createServer(requestController)

// hay echar el puerto donde va escuchar render
const PORT = process.env.PORT

// donde se va escuchar 
server.listen(PORT, function(){
    console.log("aplicacion corriendo en puerto" + PORT);
})