const express = require('express')
const sql = require('./models/db.js')
const cors = require('cors')

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

app.listen(PORT,()=>{
    console.log(`server is running in port http://localhost:${PORT}`)
})





