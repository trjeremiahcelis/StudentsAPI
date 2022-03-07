//FIXME: none
const Connection = require('../database/Connection')

const createStudent = async (stud_fname, stud_lname, stud_no, stud_address, stud_contact) => {
    try {
        const query = `INSERT INTO student_info ` + `VALUES ` +
                            `(null, '${stud_fname}', '${stud_lname}', '${stud_no}', 
                            '${stud_address}', '${stud_contact}')`;
        await Connection(query)

        return true
    } catch (err) {
        return false
    }
}

module.exports = createStudent