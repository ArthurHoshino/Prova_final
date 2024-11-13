const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PedidoSchema = new Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Clientes",
        required: true
    },
    itensPedido: {
        type: Schema.Types.ObjectId,
        ref: "ItensPedido"
    }
})

module.exports = mongoose.model("Pedidos", PedidoSchema)