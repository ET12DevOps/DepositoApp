const express = require('express')
const router = express.Router()
const auth = require('../auth')

router.get('/documentos', auth.isLoggedIn, (req, res) => {
    res.render('./documentos/index', { 
        title: "Documentos",
        user: req.user
    })
})

router.get('/documentos/:id/edit', auth.isLoggedIn, (req, res) => {
    res.render('./documentos/edit', { 
        title: "Documento",
        idDocumento: req.params.id,
        user: req.user
    })
})

router.get('/documentos/:id/delete', auth.isLoggedIn, (req, res) => {
    res.render('./documentos/delete', { 
        title: "Documento",
        idDocumento: req.params.id,
        user: req.user 
    })
})

router.get('/documentos/add', auth.isLoggedIn, (req, res) => {
    res.render('./documentos/add', { 
        title: "Documento",
        user: req.user       
    })
})

module.exports = router