const express = require('express')
const router = express.Router()
const auth = require('../auth')

router.get('/consumibles', auth.isLoggedIn, (req, res) => {
    res.render('./consumibles/index', { 
        title: "Consumibles",
        user: req.user
    })
})

router.get('/consumibles/:id/edit', auth.isLoggedIn, (req, res) => {
    res.render('./consumibles/edit', {
        title: "Consumible",
        consumibleId: req.params.id,
        user: req.user
    })
})

router.get('/consumibles/:id/delete', auth.isLoggedIn, (req, res) => {
    res.render('./consumibles/delete', { 
        title: "Consumible",
        consumibleId: req.params.id,
        user: req.user 
    })
})

router.get('/consumibles/add', auth.isLoggedIn, (req, res) => {
    res.render('./consumibles/add', { 
        title: "Consumible",
        user: req.user       
    })
})

module.exports = router