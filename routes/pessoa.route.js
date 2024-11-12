const express = require('express')
const pessoa_controller = require("../controllers/pessoa.controller.js")
const router = express.Router()

router.post('/adicionarPessoa', pessoa_controller.create)

router.get('/listarPessoa', pessoa_controller.listar)

router.get('/listarPessoaNome/:nome', pessoa_controller.listarPorNome)

router.get('/listarPessoaCpf/:cpf', pessoa_controller.listarPorCpf)

router.put('/editarPessoa', pessoa_controller.update)

router.delete('/deletarPessoa', pessoa_controller.delete)

module.exports = router