const express = require("express")
require("dotenv").config()

const app = express()
const port = process.env.PORT_APP || 3000


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})