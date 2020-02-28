'use strict'

//IMPORTS
var bcrypt = require('bcrypt-nodejs');
var business = require('../models/business')
var jwt = require('../services/jwt')


function create(req, res){
    var business = new Business();
    var params = req.body;

    if(params.name && params.direction && params.email){
        business.name = params.name
        business.direction = params.direction
        business.email = params.email

        business.save((err, savedBusiness)=>{
            if(err){
                return res.status(500).send({ message: 'Error en la peticion Empresa' })
            }
            if(!savedBusiness){
                return res.status(404).send({ message: 'Error al agregar empresa' })
            }
            if(savedBusiness){
                return res.status(200).send({ business: savedBusiness })
            }
        })
    }else{
        res.status(200).send({
            message: 'Rellene todos los datos'
        })
    }
}