const express = require('express')
const router = express.Router()
const db = require('../../models')
const Motivo = db.Motivo
const { v4: uuidv4 } = require('uuid')
const auth = require('../../auth')

router.get('/motivos', auth.isLoggedIn, async (req, res) => {

    await Motivo.findAll({
        attributes: ['id', 'name', 'motivo', 'createdAt', 'updatedAt']
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Roles."
            });
        });
})

router.get('/motivos/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    await Motivo.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Roles with id=" + id
            });
        });
})

router.post('/motivos', auth.isLoggedIn, async (req, res) => {

    
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    
    const motivo = {
        id: uuidv4(),
        name: req.body.name,
        enabled: req.body.enabled,
        createAt: Date.now(),
        createdBy: '',
        updatedAt: Date.now(),
        updatedBy: ''
    };

    
    Motivo.create(motivo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Roles."
            });
        });
})

router.put('/motivos/:id', auth.isLoggedIn, async (req, res) => {
    const id = req.params.id;

    req.body.updatedAt = Date.now()

    
    Role.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Role was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Role with id=${id}. Maybe Role was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Role with id=" + id
            });
        });
})

router.delete('/motivos/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    Motivo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Role was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Role with id=${id}. Maybe Role was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Role with id=" + id
            });
        });
})

module.exports = router
