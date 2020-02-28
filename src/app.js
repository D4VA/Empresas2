'use strict'

//VARIABLES

const express = require ('express')
const app = express()


//CARGA DE RUTAS


//MIDDLEWARES

//CABECERAS
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Authorization, X-API-Key, Origin, X_Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTAS

//EXPORTAR
module.exports = app;