const http = require('http')
//req = request -> peticion del cliente
//res = response -> respuesta del servidor

const server = http.createServer((req, res)=>{
    console.log('un cliente se ha conectado')
    res.end('la conexion ha sido correcta')
})

server.listen(3000, ()=>{
    console.log('servidor a la espera de conexiones')
})