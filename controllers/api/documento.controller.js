const express = require('express')
const router = express.Router()
const db = require('../../models')
const Documento = db.Documento
const { v4: uuidv4 } = require('uuid')
const auth = require('../../auth')

router.get('/documentos', auth.isLoggedIn, async (req, res) => {

    await Documento.findAll({
        attributes: ['idDocumento', 'codigo', 'numero','descripcion', 'createdAt', 'updatedAt']
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

   
    if (!req.body.codigo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    if(!req.body.numero){
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    if(!req.body.descripcion){
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }
    const documento = {
        id: uuidv4(),
        codigo: req.body.codigo,
        numero: req.body.numero,
        descripcion: req.body.descripcion,
        createAt: Date.now(),
        createdBy: '',
        updatedAt: Date.now(),
        updatedBy: ''
    };

   
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
    const id = parseInt(req.params.id);

    req.body.updatedAt = Date.now()

    console.log(req.body)
    Documento.update(req.body, {
        where: { idDocumento: id }
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

    const id = parseInt(req.params.id);

    Documento.destroy({
        where: { idDocumento: id }
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