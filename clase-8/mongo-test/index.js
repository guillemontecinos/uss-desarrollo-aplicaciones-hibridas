const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 8000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

// Replace the uri string with your connection string.
const password = process.env.MONGODB_PASSWORD
const uri = `mongodb+srv://gamontecin:${password}@desarrollo-de-aplicacio.zzjvru7.mongodb.net/?retryWrites=true&w=majority`

// Debemos definir un schela de mongoose que coincida con la colección de destino de la base de datos
let TestSchema = new mongoose.Schema({
    name: {type: String}
},{
    versionKey: false
})
// Luego, debemos declarar un modelo que es una instancia de un schema.
// Debe tener los siguientes parámetros: Name of the model, the schema, and the collection
let Test = mongoose.model('Test', TestSchema, 'test')

let mongoConnected = false

async function mongoConnect(){
    try{
        await mongoose.connect(uri, {dbName: 'test'})
        console.log('Connected to MongoDB')
        mongoConnected = true
        // const result = await Test.find()
        // console.log(result)
    } catch(err){
        console.error(err)
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    console.log('recibi una solicitud get.')
})

app.post('/newuser', (req, res) => {
    if(req.body.name && mongoConnected){
        // console.log(req.body.name)
        Test.create({name: req.body.name}).then(res.end())
    }
})

mongoConnect()

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`)
})