const express = require('express')
const router = express.Router()
const auth = require('../auth')

router.get('/unidades', auth.isLoggedIn, (req, res) => {
    res.render('./unidades/index', { 
        title: "Unidades",
        user: req.user
    })
})

router.get('/unidades/:id/edit', auth.isLoggedIn, (req, res) => {
    res.render('./unidades/edit', { 
        title: "Unidades",
        idUnidad: req.params.id,
        user: req.user
    })
})

router.get('/unidades/:id/delete', auth.isLoggedIn, (req, res) => {
    res.render('./unidades/delete', { 
        title: "Unidades",
        idUnidad: req.params.id,
        user: req.user 
    })
})

router.get('/unidades/add', auth.isLoggedIn, (req, res) => {
    res.render('./unidades/add', { 
        title: "Unidades",
        user: req.user       
    })
})

module.exports = router