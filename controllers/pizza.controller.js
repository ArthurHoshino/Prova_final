const pizza = require('../models/pizza.model.js')

exports.listar = async function(req, res) {
    try {
        const result = await pizza.find({}, {_id: 0, sabor: 1, tamanho: 1, preco: 1})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listarPorSabor = async function(req, res) {
    try {
        const result = await pizza.find({sabor: req.params.sabor}, {_id: 0, sabor: 1, tamanho: 1, preco: 1})

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
        let newPizza = await pizza.create({
            "sabor": req.body.sabor,
            "tamanho": req.body.tamanho,
            "preco": req.body.preco
        })
        await newPizza.save()
    
        res.status(201).send(newPizza)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.update = async function(req, res) {
    try {
        const filter = {sabor: req.body.sabor}
        const updatedInfo = {}
        if (req.body.tamanho) {
            updatedInfo.tamanho = req.body.tamanho
        }
        
        if (req.body.preco) {
            updatedInfo.preco = req.body.preco
        }

        const result = await pizza.findOneAndUpdate(filter, updatedInfo)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async function (req, res) {
    try {
        const result = await pizza.findOneAndDelete({sabor: req.body.sabor})

        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}