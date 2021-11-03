const express = require('express')
const router = express.Router()
const db = require('../../models')
const Documento = db.Documento
const { v4: uuidv4 } = require('uuid')
const auth = require('../../auth')

router.get('/documentos', auth.isLoggedIn, async (req, res) => {

    await Documento.findAll({
        attributes: ['id', 'name', 'enabled', 'createdAt', 'updatedAt']
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Documentos."
            });
        });
})

router.get('/documentos/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    await Documento.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Documento with id=" + id
            });
        });
})

router.post('/documentos', auth.isLoggedIn, async (req, res) => {

    // Validar el request (si no es vacio el nombre)
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Crear un rol
    const documento = {
        id: uuidv4(),
        name: req.body.name,
        enabled: req.body.enabled,
        createAt: Date.now(),
        createdBy: '',
        updatedAt: Date.now(),
        updatedBy: ''
    };

    // Guardo el rol en la base de datos
    Documento.create(documento)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Documentos."
            });
        });
})

router.put('/documentos/:id', auth.isLoggedIn, async (req, res) => {
    const id = req.params.id;

    req.body.updatedAt = Date.now()

    //actualizo la informacion del objeto role
    Documento.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Documento was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Documento with id=${id}. Maybe Documento was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Documento with id=" + id
            });
        });
})

router.delete('/documentos/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    Documento.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Documento was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Documento with id=${id}. Maybe Documento was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Documento with id=" + id
            });
        });
})

module.exports = router