'use strict'
//IMPORTS

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/employe')
var jwt = require('../services/jwt')



function register(req, res){
    var user = new User();
    var params = req.body

    if(params.name && params.job && params.department){
        employee.name = params.name
        employee.job = params.job
        employee.department = params.department
        employee.business = params.business.sub

        employee.save((err, employeeCreated)=>{
            if(err){
                return res.status(500).send({ message: 'Error en la petición de Employee' })
            }
            if(!employeeCreated){
                return res.status(404).send({ message: 'Error al agregar la encuesta' })
            }
            if(employeeCreated){
                return res.status(200).send({ employee: SavedEmployee })
            }
        })
    }else{
        res.status(200).send({ message: 'Rellene todos los datos necesarios' })
    }
}



module.exports = {
    register
}