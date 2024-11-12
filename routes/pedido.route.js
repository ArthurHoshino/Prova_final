const express = require('express')
const pedido_controller = require("../controllers/pedido.controller.js")
const router = express.Router()

router.get('/testarPedido', pedido_controller.teste)

module.exports = router