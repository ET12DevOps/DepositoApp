const express = require('express')
const router = express.Router()
const db = require('../../models')
const Persona = db.Persona
const auth = require('../../auth')

Router.get ('/ personas/id', auth.isLoggedIn, async(req,res)=>{

    await Persona.findall({
        attributes:['idPersona','nombre','apellido','dni','email','estado','createdAt','updateAt']
    })
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving Persona."
            })
        })
    })

    router.get('/personas/:id', auth.isLoggedIn, async (req, res) => {

        const id = req.params.id;
    
        await Persona.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Personas with id=" + id
                });
            });
    })

    router.post('/Personas', auth.isLoggedIn, async (req, res) => {

        if (!req.body.name) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        const persona = {
            id: uuidv4(),
            name: req.body.name,
            enabled: req.body.enabled,
            createAt: Date.now(),
            createdBy: '',
            updatedAt: Date.now(),
            updatedBy: ''
        };
        Unidad.create(unidad)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Personas."
            });
        });
    })

router.put('/personas/:id', auth.isLoggedIn, async (req, res) => {
    const id = req.params.id;

    req.body.updatedAt = Date.now()

    Persona.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Persona was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Persona with id=${id}. Maybe Persona was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Persona with id=" + id
            });
        });
})

router.delete('/personas/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    Persona.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Persona was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Persona with id=${id}. Maybe Persona was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Persona with id=" + id
            });
        });
})

module.exports = router