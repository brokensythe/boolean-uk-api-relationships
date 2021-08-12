const db = require("../../utils/client")

async function createOneAppointment(req, res) {
    const { practice, date, time, reason, doctorId } = req.body
    const [ hour, minute ] = time.split(":")
    const [ day, month, year ] = date.split(/[\/-]/)
    const formattedDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hour) + 1, Number(minute)).toISOString()
    try {
        const appointment = await db.appointment.create({
            data: {
                practice : practice,
                date : formattedDate,
                time : formattedDate,
                reason : reason,
                doctorId : doctorId
            }
        })
        res.json({ newAppointment: appointment })
    } catch (error) {
        console.error("This is my error message ", error);
        res.json({ error: error })
    }
}

async function getAllAppointments(req, res) {
    try {
        const appointments = await db.appointment.findMany()
        res.json({ allAppointments: appointments})
    } catch (error) {
        console.error(error);
        res.json({ error: error })
    }
}

// async function getOneAppointment

module.exports = {
    createOneAppointment,
    getAllAppointments
}