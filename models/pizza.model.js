const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let PizzaSchema = new Schema({
    sabor: {type: String, require: true, max: 150},
    tamanho: {type: String, max: 15},
    preco: {type: String, max: 300}
})

// exportar o modelo para uso no app
module.exports = mongoose.model("pizzas", PizzaSchema)