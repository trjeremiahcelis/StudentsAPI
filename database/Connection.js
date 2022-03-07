/* MySQL */
const mysql = require('mysql')
/* Db configurations */
const dbConfig = require('../config/db.config')

/* Create Connection to mysql */
const DB = mysql.createPool(dbConfig)

/* Export as function */
module.exports = (query) => {
    /* Use promise */
    return new Promise((resolve, reject) => {
        DB.getConnection((err, sql) => { 
            if (err) {
                console.log("Database error:", err)
                reject(err)
            } else {
                sql.query(query, (err, results) => {
                    if (err) {
                        console.log("Query error:", err)
                        reject(err)
                    } else {
                        resolve(results)
                    }

                    sql.release();
                })
            }
        })
    })
}