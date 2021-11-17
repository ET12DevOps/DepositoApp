const express = require('express')
const router = express.Router()
const auth = require('../auth')

router.get('/motivos', auth.isLoggedIn, (req, res) => {
    res.render('./motivos/index', { 
        title: "Motivos",
        user: req.user
    })
})

router.get('/motivos/:id/edit', auth.isLoggedIn, (req, res) => {
    res.render('./motivos/edit', { 
        title: "Motivo",
        motivoId: req.params.id,
        user: req.user
    })
})

router.get('/motivos/:id/delete', auth.isLoggedIn, (req, res) => {
    res.render('./motivos/delete', { 
        title: "Motivo",
        motivoId: req.params.id,
        user: req.user 
    })
})

router.get('/motivos/add', auth.isLoggedIn, (req, res) => {
    res.render('./motivos/add', { 
        title: "Motivo",
        user: req.user       
    })
})

module.exports = router