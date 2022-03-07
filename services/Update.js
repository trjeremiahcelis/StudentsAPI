const Connection = require('../database/Connection')

const updateStudents = async (stud_id, stud_fname, stud_lname, stud_no, stud_contact, stud_address) => {
    try {
        // const query = `SELECT * FROM student_info`
        const query = `UPDATE student_info ` + `SET ` + 
                        `stud_fname = '${stud_fname}', ` +
                        `stud_lname = '${stud_lname}', ` + 
                        `stud_no = '${stud_no}', ` +
                        `stud_contact = '${stud_contact}', ` +
                        `stud_address = '${stud_address}' ` +
                       `WHERE stud_id = ${stud_id}` 
                        
        await Connection(query)

        return true
    } catch (err) {
        return false
    }
}

module.exports = updateStudents