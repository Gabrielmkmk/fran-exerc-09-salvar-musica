const mongoose = require('mongoose')
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const URL = 'mongodb+srv://francine:m4ub4c7UKtsOiVu9@cluster0.m1vld.mongodb.net/Exercicio09?retryWrites=true&w=majority'

mongoose.connect(URL, options, function(err){
    if(!err){
        console.log('Conectado ao banco')
    }
})

module.exports = mongoose