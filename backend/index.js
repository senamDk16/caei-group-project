const express = require("express")
require("dotenv").config()
const cors = require('cors')
const db = require('./database')
const routerClient = require("./features/clients/clients.router")



const app = express()
const port = process.env.PORT_APP || 3000


app.use(cors())
app.use(express.json())


//router
app.use("/clients", routerClient)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})