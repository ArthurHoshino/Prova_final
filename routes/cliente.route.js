const express = require('express')
const cliente_controller = require("../controllers/cliente.controller.js")
const router = express.Router()

router.post('/adicionarCliente', cliente_controller.create)

router.get('/listarCliente', cliente_controller.listar)

router.get('/listarCliente/:id', cliente_controller.listarPorId)

router.put('/editarCliente/:id', cliente_controller.update)

router.delete('/deletarCliente', cliente_controller.delete)

module.exports = router