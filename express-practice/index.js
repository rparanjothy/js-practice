const express = require('express')


const app  = express()

app.get('/',(req,res)=>{
     res.send({name:"Ram"})
})

app.listen(5001,()=>{console.log(`App running at port ${5001}`)})