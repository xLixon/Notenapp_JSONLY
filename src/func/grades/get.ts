export async function getGrade(id: number, authtoken: string, db, query) {
    let result;
    let sql = "SELECT * FROM grades WHERE `student_id` = " + id + " ORDER BY (`grade`*weight)/2 DESC"
    await query(db, sql).then((result) => {
        result = result
    })
    return JSON.stringify(
        {
            "status": "success",
            "message": "Grades found",
            "data": result
        }
    )

}