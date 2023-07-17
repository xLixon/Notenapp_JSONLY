export async function getAllGrades(id: number, authtoken: string, db, query) {
    let result;
    let sql = "SELECT * FROM grades WHERE ORDER BY (`grade`*weight)/2 AS"
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