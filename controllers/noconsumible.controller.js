const express = require('express')
const router = express.Router()
const auth = require('../auth')

router.get('/noconsumibles', auth.isLoggedIn, (req, res) => {
    res.render('./consumibles/index', { 
        title: "No consumibles",
        user: req.user  
    })
})

router.get('/noconsumibles/:id/edit', auth.isLoggedIn, (req, res) => {
    res.render('./noconsumibles/edit', {
        title: "No consumibles",
        consumibleId: req.params.id,
        user: req.user
    })
})

router.get('/noconsumibles/:id/delete', auth.isLoggedIn, (req, res) => {
    res.render('./noconsumibles/delete', { 
        title: "No consumibles",
        consumibleId: req.params.id,
        user: req.user 
    })
})

router.get('/noconsumibles/add', auth.isLoggedIn, (req, res) => {
    res.render('./noconsumibles/add', { 
        title: "No consumibles",
        user: req.user       
    })
})

module.exports = router