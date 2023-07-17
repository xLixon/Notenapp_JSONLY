import {actionLog} from "../logger";


export async function deleteGrade(body, authstring, db, query) {
    actionLog("DELETE GRADE", "Deleted grade with id " + body['id'])
    await query(db,
        "DELETE FROM `grades` WHERE `id` = ${body['id']}")
        .then()

    return JSON.stringify(
        {
            "status": "success",
            "message": "Grade deleted",
            "data": {
                "id": body['id']
            }
        })
}