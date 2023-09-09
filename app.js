const express = require("express")
const app = express()
const slacks = require('./routes/slack')
const port = 5500;

//using the json middleware
app.use(express.json());
//rout params
app.use('/info.com/api', slacks)

//listener
app.listen(port,()=>console.log(`listening to port ${port}`))