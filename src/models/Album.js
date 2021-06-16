const mongoose = require('../data')

const albumSchema = new mongoose.Schema({
    nome: String,
    artista: String,
    ano: Number,
    generos: Array,
    faixas: Array,
    lancamento: Number
}, {timestamps: true})

const Album = mongoose.model('Album', albumSchema)

module.exports = Album