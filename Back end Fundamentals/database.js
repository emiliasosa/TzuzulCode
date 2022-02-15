const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'abispanegra3550',
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

module.exports = {query, insert, remove}