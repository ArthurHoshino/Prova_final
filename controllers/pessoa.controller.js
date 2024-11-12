const pessoa = require('../models/pessoa.model.js')

exports.listar = async function(req, res) {
    try {
        const result = await pessoa.find({}, {_id: 0, nome: 1, cpf: 1, telefone: 1, cargo: 1})

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listarPorNome = async function(req, res) {
    try {
        const result = await pessoa.find({nome: req.params.nome}, {_id: 0, nome: 1, cpf: 1, telefone: 1, cargo: 1})

        if (result.length != 0) {
            res.status(200).send(result)
        } else {
            res.status(204).send(result)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listarPorCpf = async function(req, res) {
    try {
        const result = await pessoa.find({cpf: req.params.cpf}, {_id: 0, nome: 1, cpf: 1, telefone: 1, cargo: 1})

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
        let newPessoa = await pessoa.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            cargo: req.body.cargo,
        })
        await newPessoa.save()

        res.status(200).send(newPessoa)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.update = async function(req, res) {
    try {
        const filter = {cpf: req.body.cpf}
        const updatedInfo = {}

        if (req.body.nome) {
            updatedInfo.nome = req.body.nome
        }

        if (req.body.telefone) {
            updatedInfo.telefone = req.body.telefone
        }

        if (req.body.cargo) {
            updatedInfo.cargo = req.body.cargo
        }

        const result = await pessoa.findOneAndUpdate(filter, updatedInfo)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async function(req, res) {
    try {
        const result = await pessoa.findOneAndDelete({cpf: req.body.cpf})

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}