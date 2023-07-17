import {actionLog} from "../logger";

let mysql = require('mysql');

export async function deleteStudent(id: number, authtoken: string, db, query) {

    await query(db, "DELETE FROM `students` WHERE `id` = " + id).then()
    actionLog("DELETE STUDENT", "ID : " + id + " | Success: " + true)

    return JSON.stringify(
        {
            "status": "success",
            "message": "Student deleted",
            "data": {
                "id": id
            }
        })

}