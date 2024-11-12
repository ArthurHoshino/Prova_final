const express = require('express')
const bodyParser = require('body-parser')
const pizza = require('./routes/pizza.route.js')
const pessoa = require('./routes/pessoa.route.js')
const pedido = require('./routes/pedido.route.js')
const mongoose = require("mongoose")

const app = express()
let url = "mongodb://localhost:27017/provaFinal"
let mongoDB = process.env.MONGODB_URI||url

mongoose.connect(mongoDB)
mongoose.Promise = global.Promise;

let db = mongoose.connection
db.on('erro', console.error.bind(console, "Erro mongo"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/pizza", pizza)
app.use("/pessoa", pessoa)
app.use("/pedido", pedido)

let port = 3000
app.listen(port, () => {
    console.log("Server running...")
})