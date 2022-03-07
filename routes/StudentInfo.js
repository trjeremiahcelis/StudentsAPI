const express = require('express')
const router = express.Router()

const CreateService = require('../services/Create')
const ReadService   = require('../services/Read')
const UpdateService = require('../services/Update')
const DeleteService = require('../services/Delete')

router.post(`/create`, async (req, res) => {
    const { stud_fname, stud_lname, stud_no, stud_address, stud_contact } = req.body

    const results = await CreateService(stud_fname, stud_lname, stud_no, stud_address, stud_contact)

    if (results) {
        res
            .status(200)
            .send({
                status: results,
                message: "Successfully Created"
            })
            
    } else {
        console.log(stud_fname + stud_lname + stud_no + stud_address + stud_contact)
        res
            .status(500)
            .send({
                status: results,
                message: "Failed to create!"
            })
    }
})

router.get(`/get`, async (req, res) => {
    const { fields } = req.query // the one you will request in your url 
                                // if it is fields or what?
    const results = await ReadService(fields)

    if (results) {
        res
            .status(200)
            .send(results)
    } else {
        res
            .status(500)
            .send({
                status: results,
                message: "Cannot Get Students"
            })
    }
})

router.put(`/update`, async (req, res) => {
    const { stud_id, new_fname, new_lname, new_studno, new_contact, new_address } = req.body

    const results = await UpdateService(stud_id, new_fname, new_lname, new_studno, new_contact, new_address)

    if (results) {
        res
            .status(200)
            .send({
                status: results,
                message: "Successfully Updated!"
            })
    } else {
        res
            .status(500)
            .send({
                status: results,
                message: "Failed to Update"
            })
    }
})

router.delete(`/delete`, async (req, res) => {
    const { stud_id } = req.query

    const results = await DeleteService(stud_id)

    if (results) {
        res
            .status(200)
            .send({
                status: results,
                message: "Successfully Deleted!"
            })
    } else {
        res
            .status(500)
            .send({
                status: results,
                message: "Failed to Delete"
            })
    }
})

module.exports = router