let mysql = require('mysql')
export async function query(db,query){
    return new Promise((resolve,reject)=>{
        let connection = mysql.createConnection({
            host: db['host'],
            user: db['user'],
            password: db['pass'],
            database: db['db']
        })
        connection.query(query,(error,result)=>{
            if(error) reject(error)
            resolve(result)
            return result
        })
    })
}