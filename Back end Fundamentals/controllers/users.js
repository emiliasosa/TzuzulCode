const {query, insert, remove, edit} = require('../database')

class UserController{
    async create(user){
        const users = await insert ('users', user)
        return users
    }
    async readAll(){
        const users = await query('SELECT * FROM users')
        return users
    }
    async update(user, id){
        const users = await edit(user, id)
        return users
    }
    async delete(id){
        const users = await remove ('users', id)
        return users
    }
}


module.exports = UserController