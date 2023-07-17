import {actionLog} from "../logger";

let mysql = require('mysql')

export async function getStudent(id: number, authtoken: string, db, query) {

    let data;
    let failed = false
    let reason = ""

    await query(db, "SELECT * FROM `students` WHERE `id` = " + id)
        .then((result) => {
                data = result[0]
        })



    if(data == undefined) {
        failed = true
        reason = "Student not found"
    }
    actionLog("GET STUDENT", "ID : " + id + " | Success: " + !failed + (failed ? " | Reason: " + reason : ""))


    let name = null
    if(!failed || data['name'] == undefined || data['name'] != null) {
        name = data['name']
    }

    let classs = null
    if(!failed || data['class'] == undefined || data['class'] != null) {
        classs = data['class']
    }

    return JSON.stringify(
        {
            "status": failed ? "failed" : "success",
            "message": failed ? reason : "Student found",
            "data": {
                "id": id,
                "name":name,
                "class": classs
            }
        }
    )
}