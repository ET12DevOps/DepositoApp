const express = require('express')
const router = express.Router()
const auth = require('../auth')

router.get('/personas', auth.isLoggedIn, (req, res) => {
    res.render('./personas/index', { 
        title: "Personas",
        user: req.user
    })
})

router.get('/personas/:id/edit', auth.isLoggedIn, (req, res) => {
    res.render('./personas/edit', { 
        title: "Persona",
        idPersona: req.params.id,
        user: req.user
    })
})

router.get('/personas/:id/delete', auth.isLoggedIn, (req, res) => {
    res.render('./personas/delete', { 
        title: "Persona",
        idPersona: req.params.id,
        user: req.user 
    })
})

router.get('/personas/add', auth.isLoggedIn, (req, res) => {
    res.render('./personas/add', { 
        title: "Persona",
        user: req.user       
    })
})

module.exports = router