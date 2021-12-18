const http = require('http')
const fs = require('fs')
const port = 3000
//req = request -> peticion del cliente
//res = response -> respuesta del servidor

const server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('login.html', function(error, data){
        if (error){
            res.writeHead(404)
            res.write('Error:File Not Found')
        }else{
            res.write(data)
        }
        res.end()
})
})

server.listen(port, function(error){
    if(error){
        console.log('algo salió mal', error)
    }else {
        console.log('El servidor está escuchando en el puerto' + port)
    }
})