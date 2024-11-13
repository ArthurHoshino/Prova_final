const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let ClienteSchema = new Schema({
    nome: {type: String, required: true, max: 150},
    cpf: {type: String, required: true, max: 15},
    telefone: {type: String, max: 300},
    pedido: {type: Schema.Types.ObjectId, ref: "Pedidos"}
})

module.exports = mongoose.model("Clientes", ClienteSchema)