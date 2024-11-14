const Cliente = require('../models/cliente.model.js')

exports.listar = async function(req, res) {
    try {
        const result = await Cliente.find({})

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listarPorId = async function(req, res) {
    try {
        const result = await Cliente.findOne({_id: req.params.id})

        if (result.length != 0) {
            res.status(200).send(result)
        } else {
            res.status(204).send(result)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.create = async function(req, res) {
    try {
        let newCliente = await Cliente.create(req.body)
        await newCliente.save()

        res.status(200).send(newCliente)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.update = async function(req, res) {
    try {
        const filter = {_id: req.params.id}
        const updatedInfo = req.body

        await Cliente.findOneAndUpdate(filter, updatedInfo)
        const result = await Cliente.findOne(filter)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async function(req, res) {
    try {
        const result = await Cliente.findOneAndDelete({_id: req.body.id})

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}