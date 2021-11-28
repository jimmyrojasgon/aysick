// req = request -> peticion del cliente
//res = response -> respuesta del servidor
//cliente  navegador

const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('la conexion ha sido correcta')
})

app.get('/traer',(req, res)=>{
    res.send('traer datos')
})

app.get('/crear',(req, res)=>{
    res.send('crear datos')
})

app.put('/actualizar',(req, res)=>{
    res.send('actualizar datos')
})

app.delete('/eliminar',(req, res)=>{
    res.send('eliminar datos')
})

app.listen(3000, ()=>{
    console.log('servidor a la espera de conexiones')
})