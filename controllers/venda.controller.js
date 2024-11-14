const Venda = require('../models/venda.model.js')
const Cliente = require('../models/cliente.model.js')

exports.listar = async function(req, res) {
    try {
        const result = await Venda.find({})

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listarPorId = async function(req, res) {
    try {
        const result = await Venda.findOne({_id: req.params.id})

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
        const result = await Cliente.findOne({_id: req.body.cliente})

        if (result) {
            let newPedido = await Venda.create(req.body)
            await newPedido.save()
    
            res.status(201).send(newPedido)
        } else {
            throw new Error
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.update = async function(req, res) {
    try {
        const filter = {_id: req.params.id}
        const updatedInfo = req.body

        await Venda.findOneAndUpdate(filter, updatedInfo)
        const result = await Venda.findOne(filter)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async function(req, res) {
    try {
        const result = await Venda.findOneAndDelete({_id: req.body.id})

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}