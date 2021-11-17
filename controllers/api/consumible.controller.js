const express = require('express')
const router = express.Router()
const db = require('../../models')
const Consumible = db.Consumible
const { v4: uuidv4 } = require('uuid')
const auth = require('../../auth')

router.get('/consumibles', auth.isLoggedIn, async (req, res) => {

    await Consumible.findAll({
        attributes: ['idConsumible','nombre','codigo','detalle','existenciaInicial','existenciaActual','IdUnidad', 'createdAt', 'updatedAt']
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

router.get('/consumibles/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    await Consumible.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Roles with id=" + id
            });
        });
})

router.post('/consumibles', auth.isLoggedIn, async (req, res) => {

    // Validar el request (si no es vacio el nombre)
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Crear un consumible
    const consumible = {
        id: 0,

        nombre: req.body.nombre,
        codigo: req.body.codigo,
        detalle: req.body.detalle,
        existenciaInicial: req.body.existenciaInicial,
        existenciaActual: req.body.existenciaActual,
        createAt: Date.now(),
        createdBy: '',
        updatedAt: Date.now(),
        updatedBy: ''
    };

    // Guardo el rol en la base de datos
    Consumible.create(consumible)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Consumibles."
            });
        });
})

router.put('/consumibles/:id', auth.isLoggedIn, async (req, res) => {
    const id = req.params.id;

    req.body.updatedAt = Date.now()

    //actualizo la informacion del objeto consumible
    Consumible.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Consumible was updated successfully."
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

router.delete('/consumibles/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    Consumible.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Consumible was deleted successfully!"
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
