const express = require('express')
const router = express.Router()
const auth = require('../auth')

router.get('/prestamos', auth.isLoggedIn, (req, res) => {
    res.render('./prestamos/index', { 
        title: "Prestamos",
        user: req.user
    })
})

router.get('/prestamos/:id/edit', auth.isLoggedIn, (req, res) => {
    res.render('./prestamos/edit', { 
        title: "Prestamo",
        roleId: req.params.id,
        user: req.user
    })
})

router.get('/prestamos/:id/delete', auth.isLoggedIn, (req, res) => {
    res.render('./prestamos/delete', { 
        title: "Prestamo",
        roleId: req.params.id,
        user: req.user 
    })
})

router.get('/prestamos/add', auth.isLoggedIn, (req, res) => {
    res.render('./prestamos/add', { 
        title: "Prestamo",
        user: req.user       
    })
})

module.exports = router