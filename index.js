require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')
require('./DB/connection')
const swapServer = express()

swapServer.use(cors())
swapServer.use(express.json())
swapServer.use('/uploads',express.static('./uploads'))
swapServer.use(router)

const PORT = 3000 || process.env.PORT

swapServer.listen(PORT,()=>{
    console.log(`Swap Server started at port: ${PORT}`);
})

swapServer.get('/',(req,res)=>{
    res.status(200).send("<h1 style=color:red;>Swap Server Started!! Waiting for client Request...</h1>")
})