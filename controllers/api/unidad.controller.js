const express = require ('express')
const router = express.Router()
const db = require('../../models')
const Unidad = db.Unidad
const auth = require('../../auth')

router.get ('/unidades/id', auth.isLoggedIn, async(req,res)=>{

await Unidad.findall({
    attributes:['idUnidad','nombre','createdAt','updateAt']
})
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Some error ocurred while retrieving Unidad."
        })
    })
})

router.get('/unidades/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    await Role.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Unidades with id=" + id
            });
        });
})
router.post('/unidades', auth.isLoggedIn, async (req, res) => {

    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const unidad = {
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
                err.message || "Some error occurred while creating the Unidades."
        });
    });
})

router.put('/unidades/:id', auth.isLoggedIn, async (req, res) => {
    const id = req.params.id;

    req.body.updatedAt = Date.now()

    Unidad.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Unidad was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Unidad with id=${id}. Maybe Unidad was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Unidad with id=" + id
            });
        });
})

router.delete('/unidades/:id', auth.isLoggedIn, async (req, res) => {

    const id = req.params.id;

    Unidad.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Unidad was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Unidad with id=${id}. Maybe Unidad was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Unidad with id=" + id
            });
        });
})

module.exports = router