let mysql = require('mysql')

export function getStudent(id: number, authtoken: string, db){

    let conn = mysql.createConnection({
        host: db['host'],
        user: db['user'],
        password: db['pass'],
        database: db['db']

    })
    let sql = "SELECT * FROM `students` WHERE `id` = " + id
    let res = "";

    conn.query(sql,  (error, result)=>{
        result = result[0]
        console.log(result['id'])
    })

    console.log(res)



    /*try {
        let authdata = atob(authtoken.slice(6)).split(":")
        let username = authdata[0]
        let password = authdata[1]
        // return "function getStudent() | username: " + username + " | password: " + password






    } catch (error) {
        return JSON.stringify(
            {
                "error":{
                    "code":1000,
                    "message":"Error while parsing Username and Password",
                    "description": "Perhaps the authtoken provided from the request is not valid."
                },
                "data":{
                    "id":id,
                    "authtoken":authtoken,
                    "function":"getStudent()"
                }
            }
        )
    }*/

    return null
}