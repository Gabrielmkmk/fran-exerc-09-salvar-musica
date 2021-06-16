const Album = require('./models/Album')

const a = new Album({
    nome: "Teste",
    artista: "Teste",
    ano: 2021,
    generos: ["Hard rock", "Arena rock"],
    faixas: [
    "We Will Rock You",
    "We Are The Champions",
    "Sheer Heart Attack",
    "All Dead, All Dead",
    "Spread Your Wings",
    "Fight From The Inside",
    "Get Down, Make Love",
    "Sleeping On The Sidewalk",
    "Who Needs You",
    "It's Late",
    "My Melancholy Blues"
],
    lancamento: 2021
})

a.save().then(function(){
    console.log('O Album foi salvo no banco')
})