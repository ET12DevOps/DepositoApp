const express = require('express')
const router = express.Router()
const auth = require('../auth')

router.get('/noconsumibles', auth.isLoggedIn, (req, res) => {
    res.render('./noconsumible/index', { 
        title: "No consumibles",
        user: req.user  
    })
})

router.get('/noconsumible/:id/edit', auth.isLoggedIn, (req, res) => {
    res.render('./noconsumible/edit', {
        title: "No consumibles",
        noconsumibleId: req.params.id,
        user: req.user
    })
})

router.get('/noconsumible/:id/delete', auth.isLoggedIn, (req, res) => {
    res.render('./noconsumible/delete', { 
        title: "No consumibles",
        noconsumibleId: req.params.id,
        user: req.user 
    })
})

router.get('/noconsumible/add', auth.isLoggedIn, (req, res) => {
    res.render('./noconsumible/add', { 
        title: "No consumibles",
        user: req.user       
    })
})

module.exports = router