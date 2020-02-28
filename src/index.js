'use strict'

const mongoose = require ('mongoose')
const app = require ('./app')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/PS2',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Conectado a MongoDB (test)')

    app.set('port', process.env.PORT || 3001)
    app.listen(app.get('port'), ()=>{
        console.log(`El servidor esta corriendo en el puerto ${app.get('port')}`);
    })
}).catch(err => console.log(err))