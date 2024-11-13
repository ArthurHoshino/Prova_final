const Produto = require('../models/produto.model.js')

exports.listar = async function(req, res) {
    try {
        const result = await Produto.find({})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listarPorId = async function(req, res) {
    try {
        const result = await Produto.findOne({_id: req.params.id})

        if (result.length != 0) {
            res.status(200).send(result)
        } else {
            res.status(204).send(result)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.create = async function (req, res) {
    try {
        let newProduto = await Produto.create(req.body)
        await newProduto.save()
    
        res.status(201).send(newProduto)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.update = async function(req, res) {
    try {
        const filter = {_id: req.params.id}
        const updatedInfo = req.body

        await Produto.findOneAndUpdate(filter, updatedInfo)
        const result = await Produto.findOne(filter)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async function (req, res) {
    try {
        const result = await Produto.findOneAndDelete({_id: req.body.id})

        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}