const ItensPedido = require('../models/itensPedido.model.js')

exports.listar = async function(req, res) {
    try {
        const result = await ItensPedido.find({})

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listarPorId = async function(req, res) {
    try {
        const result = await ItensPedido.find({pedido: req.params.pedidoId})

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
        let result = []
        const itens = req.body

        for (let i = 0; i < itens.length; i++) {
            let newItensPedido = await ItensPedido.create(itens[i])
            await newItensPedido.save()

            result.push(newItensPedido)
        }

        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.update = async function(req, res) {
    try {
        const filter = {produtoId: req.params.produtoId, pedido: req.params.pedidoId}
        const updatedInfo = req.body

        await ItensPedido.findOneAndUpdate(filter, updatedInfo)
        const result = await ItensPedido.findOne(filter)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async function(req, res) {
    try {
        const filter = {produtoId: req.body.produtoId, pedido: req.body.pedidoId}
        const result = await ItensPedido.findOneAndDelete(filter)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}