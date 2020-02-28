'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = Schema({
    name: String,
    job: String,
    Departament: String,
    business: { type: Schema.ObjectId, ref:'business'}
})

module.exports = mongoose.model('user', userSchema)