const db = require("../../utils/client")

async function createOneDoctor(req, res) {
    const { firstname, lastname, speciality, appointments } = req.body
    const doctor = await db.doctor.create({
        data: {
            firstname: firstname,
            lastname: lastname,
            speciality: speciality
        }
    })
    res.json({ newDoctor: doctor })
}

module.exports = {
    createOneDoctor
}