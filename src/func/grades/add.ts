import {actionLog} from "../logger";

export async function addGrade(body, authstring, db, query) {
    await query(db,
        "INSERT INTO `grades` (`student_id`, `subject`, `grade`, `weight`) VALUES (${body['student_id']}, ${body['subject']}, ${body['grade']}, ${body['weight']")
        .then()
    actionLog("ADD GRADE", "Added grade for student " + body['student_id'] + " in subject " + body['subject'] + " with grade " + body['grade'] + " and weight " + body['weight'])
    return JSON.stringify(
        {
            "status": "success",
            "message": "Grade added",
            "data": {
                "student_id": body['student_id'],
                "subject": body['subject'],
                "grade": body['grade'],
                "weight": body['weight']
            }
        }
    )

}