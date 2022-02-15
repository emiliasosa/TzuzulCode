const express = require('express')
const path = require("path")
const {query, insert, remove} = require('./database')

const userRoutes = require('./routes/users')

const app = express()

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(userRoutes)

/*app.get('/mostrar', async (req, res)=>{
    query('SELECT * FROM users')
    .then((results) =>{
        console.log(results)
    })
})*/

app.get('/', (req, res)=>{
    return res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.listen(4000,function(){
    console.log("Funcionando... http://localhost:4000")
})