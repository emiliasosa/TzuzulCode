const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:1234,
    database:'backendfundamental'
})

function query(sql, data){
    return new Promise((resolve, reject) =>{
        connection.query(sql, data, (error, result)=>{
            if(error){
                reject(error.sqlMessage)
            }else{
                resolve(result)
            }
        })
    })
}

async function edit(user, id){
    try{
        await query (`UPDATE users SET ? WHERE id=?`, [user,id])
        return {user, success: true}
    }catch(error){
        return {error, success: false}
    }
}

async function insert(tableName, data){
    try{
        await query (`INSERT INTO ${tableName}(??) VALUES(?)`, [Object.keys(data), Object.values(data)])
        return {data, success: true}
    }catch(error){
        return {error, success: false}
    }
}

async function remove(tableName, data){
   try{
       await query (`DELETE FROM ${tableName} WHERE id=?`, [data])
       return {data, success: true}
   }catch(error){
       return {error, success: false}
   }
}

module.exports = {query, insert, remove, edit}
