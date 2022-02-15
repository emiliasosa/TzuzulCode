const {query, insert, remove} = require('../database')

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
        const users = await query ('UPDATE users SET ? WHERE id=?', [user,id])
        return users
    }
    async delete(id){
        const users = await remove ('users', id)
        return users
    }
}


module.exports = UserController