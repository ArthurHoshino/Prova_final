const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let PedidoSchema = new Schema({
    item: {type: String, require: true, max: 150},
    endereco: {type: String, max: 15},
    numeroPedido: {type: Number, max: 300},
    quantidade: {type: Number, max: 30},
    data: {type: Date}
})

// exportar o modelo para uso no app
module.exports = mongoose.model("pedidos", PedidoSchema)
