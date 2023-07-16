const express = require('express')
require('dotenv').config()
const cors = require('cors')

// console.log(process.env)

//create logger middleware 

const myLogger = (req,res,next)=>{
    console.log(req.method,req.path)
    next()
}

//call express with app variable
const app = express()

//PORT 
const PORT = 5000

//logger middleware
app.use(myLogger)

//create server 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to our API</h1>")
})  

const start = async () =>{
    try{
        const sql = await require('./models/db.js')
        app.listen(PORT,()=>{
            console.log(`server is running on port : ${PORT}`)
        })
    }catch(err){
        console.log(err)
    }
}

start()







