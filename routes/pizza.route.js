const express = require('express')
const pizza_controller = require("../controllers/pizza.controller.js")
const router = express.Router()

router.post('/adicionarPizza', pizza_controller.create)

router.get('/listarPizza', pizza_controller.listar)

router.get('/listarPizza/:sabor', pizza_controller.listarPorSabor)

router.put('/editarPizza', pizza_controller.update)

router.delete('/deletarPizza', pizza_controller.delete)

module.exports = router