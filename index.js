const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Profile_data = require('./Routes/profile_data')
const Attribute = require('./Routes/Attribute')
const Orders = require('./Routes/Orders')


const PORT = 8000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Profile_data, Attribute, Orders)

app.listen(PORT, () => {
    console.log(`Server Running on port:http://localhost:${PORT}`)
})