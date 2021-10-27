const express = require('express')
const router = express.Router()
const auth = require('../auth')

router.get('/consumible', auth.isLoggedIn, (req, res) => {
    res.render('./consumible/index', { 
        title: "Consumible",
        user: req.user
    })
})

router.get('/consumible/:id/edit', auth.isLoggedIn, (req, res) => {
    res.render('./consumible/edit', { 
        title: "Consumible",
        roleId: req.params.id,
        user: req.user
    })
})

router.get('/consumible/:id/delete', auth.isLoggedIn, (req, res) => {
    res.render('./consumible/delete', { 
        title: "Consumible",
        roleId: req.params.id,
        user: req.user 
    })
})

router.get('/consumible/add', auth.isLoggedIn, (req, res) => {
    res.render('./consumible/add', { 
        title: "Consumible",
        user: req.user       
    })
})

module.exports = router