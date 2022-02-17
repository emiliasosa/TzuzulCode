const express = require('express')
const path = require("path")
const UserController = require('../controllers/users')

const router = express.Router()
const userController = new UserController()

//router.use('/users')

router.get('/new', (req, res)=>{
    return res.sendFile(path.join(__dirname, '../views/new.html'))
})

router.post('/new', async (req, res)=>{
    const persona = req.body
    const user = await userController.create(persona)
    if(user.success){
        return res.redirect('/')
    }else{
        return res.redirect("/new")
    }
})

router.get('/', async (req, res)=>{
    return res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.get('/api/users', async (req, res)=>{
    const users = await userController.readAll()
    return res.json(users)
})

router.delete('/api/users/:id', async (req, res)=>{
    const id = req.params.id
    const user = await userController.delete(id)
    return res.json(user)
})

router.get('/edit/:id', (req, res)=>{
    return res.sendFile(path.join(__dirname, '../views/edit.html'))
})

router.post('/edit/:id', async (req, res)=>{
    const id = req.params.id
    const user = req.body
    const result = await userController.update(user, id)
    console.log(id)
    console.log(user)
    console.log(result)
    if(result.success){
        return res.redirect('/')
    }else{
        return res.redirect("/edit/:id")
    }
    
})


module.exports = router