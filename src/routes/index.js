const express = require('express')
const router = express.Router()
const Album = require('../models/Album')

router.use(express.json)

router.get('/albuns', async (req, res) =>{
    let albuns = [] 
    albuns = await Album.find()
    res.json(albuns)
})

router.get('/albuns/:id', async(req, res) =>{
    try{
        const id = req.params.id
        let album = await Album.findById(id)
        res.json(album)
    } catch(err){
        console.error(err.message)
        res.status(500).json({error: "Erro ao pesquisar album"})
    }
})

router.post('/albuns', async (req, res) =>{
        console.log("kdhnfjksdhfs")
        const album = new Album(req.body)
        console.log("Antes do Save")
        const resultado = await album.save()
        console.log("Depois do Save")
        res.json(resultado)
    })

module.exports = router