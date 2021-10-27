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
        title: "Document",
        documentoId: req.params.id,
        user: req.user
    })
})

router.get('/documentos/:id/delete', auth.isLoggedIn, (req, res) => {
    res.render('./documentos/delete', { 
        title: "Document",
        documentoId: req.params.id,
        user: req.user 
    })
})

router.get('/documentos/add', auth.isLoggedIn, (req, res) => {
    res.render('./documentos/add', { 
        title: "Document",
        user: req.user       
    })
})

module.exports = router