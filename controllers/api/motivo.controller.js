const express = require('express')
const router = express.Router()
const db = require('../../models')
const Motivo = db.Motivo
const { v4: uuidv4 } = require('uuid')
const auth = require('../../auth')

router.get('/motivos', auth.isLoggedIn, async (req, res) => {

    await Motivo.findAll({
        attributes: ['idMotivo', 'codigo', 'descripcion', 'createdAt', 'updatedAt']
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
                message: "Error retrieving Motivos with id=" + id
            });
        });
})

router.post('/motivos', auth.isLoggedIn, async (req, res) => {

    
    if (!req.body.codigo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    
    const motivo = {
        idMotivo: 0,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
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
                    err.message || "Some error occurred while creating the Motivo."
            });
        });
})

router.put('/motivos/:id', auth.isLoggedIn, async (req, res) => {
    const id = req.params.id;

    req.body.updatedAt = Date.now()

    
    Motivo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Motivo was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Motivo with id=${id}. Maybe Motivo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Motivo with id=" + id
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
                    message: "Motivo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Motivo with id=${id}. Maybe Motivo was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Motivo with id=" + id
            });
        });
})

module.exports = router
