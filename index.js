const express = require('express')
const bodyParser = require('body-parser')
const produto = require('./routes/produto.route.js')
const cliente = require('./routes/cliente.route.js')
const venda = require('./routes/venda.route.js')
const itensVenda = require('./routes/itensVenda.route.js')
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

app.use("/produto", produto)
app.use("/cliente", cliente)
app.use("/venda", venda)
app.use("/itensVenda", itensVenda)

let port = 3000
app.listen(port, () => {
    console.log("Server running...")
})