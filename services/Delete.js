const Connection = require('../database/Connection')

const deleteStudent = async (stud_id) => {
    try {
        const query = 'DELETE FROM ' + 
                            `student_info ` + 
                        `WHERE ` +
                            `stud_id = ${stud_id}`

        await Connection(query)

        return true
    } catch (err) {
        return false
    }
}

module.exports = deleteStudent