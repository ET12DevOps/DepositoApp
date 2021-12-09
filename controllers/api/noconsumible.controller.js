const express = require('express')
const router = express.Router()
const db = require('../../models')
const Noconsumible = db.Noconsumible
const Unidad = db.Unidad
const { v4: uuidv4 } = require('uuid')
const auth = require('../../auth')

router.get('/noconsumibles', auth.isLoggedIn, async (req, res) => {

    await Noconsumible.findAll({
        attributes: ['idNoconsumible', 'nombre', 'codigo', 'detalle', 'existenciaInicial', 'existenciaActual', 'createdAt', 'updatedAt'],
        include: [{
            model: Unidad,
            as: 'unidad'
        }]
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

router.get('/noconsumibles/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    await Noconsumible.findByPk(id)
        .then(data => {
            console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Roles with id=" + id
            });
        });
})

router.post('/noconsumibles', auth.isLoggedIn, async (req, res) => {

    // Validar el request (si no es vacio el nombre)
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Crear un no consumible
    const noconsumible = {
        id: 0,

        nombre: req.body.nombre,
        codigo: req.body.codigo,
        detalle: req.body.detalle,
        existenciaInicial: req.body.existenciaInicial,
        existenciaActual: req.body.existenciaActual,
        createAt: Date.now(),
        createdBy: '',
        updatedAt: Date.now(),
        updatedBy: '',
        idUnidad: req.body.idUnidad

    };

    // Guardo el rol en la base de datos
    Noconsumible.create(noconsumible)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Noconsumibles."
            });
        });
})

router.put('/noconsumibles/:id', auth.isLoggedIn, async (req, res) => {
    const id = req.params.id;

    req.body.updatedAt = Date.now()

    //actualizo la informacion del objeto no consumible
    Noconsumible.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "No consumible was updated successfully."
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

router.delete('/noconsumibles/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    Noconsumible.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "No consumible was deleted successfully!"
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