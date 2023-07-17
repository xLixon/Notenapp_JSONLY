import {actionLog} from "../logger";

let mysql = require('mysql')

export async function createStudent(body, authtokend: string, db, query) {
    let failed = false;
    let reason = ""

    if (body['name'] === "" || body['name'] == null || body['name'] === undefined) {
        failed = true
        reason = "Name is empty"
    }

    if (body['class'] === "" || body['class'] == null || body['class'] === undefined) {
        failed = true
        reason = "Class is empty"
    }

    if (!failed) {
        await query(db, "INSERT INTO `students`(`name`, `class`) VALUES ('" + body['name'] + "','" + body['class'] + "')").then((result) => {
            body['id'] = result['insertId']
        })
    }


    actionLog("CREATE STUDENT", "Name: " + body['name'] + " | Class: " + body['class'] + " | ID: " + body['id'] + " | Success: " + !failed + (failed ? " | Reason: " + reason : ""))

    return JSON.stringify(
        {
            "status": failed ? "failed" : "success",
            "message": failed ? reason : "Student created",
            "data": {
                "id": body['id'] ?? false,
                "name": body['name'] ?? false,
                "class": body['class'] ?? false
            }
        }
    )
}