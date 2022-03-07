const Connection = require('../database/Connection')

const getStudents = async (fields) => {
    try {
        /* const query = `SELECT * FROM student_info` */
        const query = `SELECT ` + `${fields} ` + 
                        `FROM student_info`
                        
        const results = await Connection(query)

        return results
    } catch (err) {
        return []
    }
}

module.exports = getStudents