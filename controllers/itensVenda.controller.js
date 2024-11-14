const ItensVenda = require('../models/itensVenda.model.js')

exports.listar = async function(req, res) {
    try {
        const result = await ItensVenda.find({})

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listarPorId = async function(req, res) {
    try {
        const result = await ItensVenda.find({venda: req.params.vendaId})

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
            let newItensVenda = await ItensVenda.create(itens[i])
            await newItensVenda.save()

            result.push(newItensVenda)
        }

        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.update = async function(req, res) {
    try {
        const filter = {produtoId: req.params.produtoId, venda: req.params.vendaId}
        const updatedInfo = req.body

        await ItensVenda.findOneAndUpdate(filter, updatedInfo)
        const result = await ItensVenda.findOne(filter)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async function(req, res) {
    try {
        const filter = {produtoId: req.body.produtoId, venda: req.body.vendaId}
        const result = await ItensVenda.findOneAndDelete(filter)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}