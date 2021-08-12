const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const singleDoctor = {
    firstname: "Lyndon", 
    lastname: "Dykes", 
    speciality: "Neurosurgeon" 
}

const singleAppointment = {
    practice: "The Grove",
    date: "22/04/2016",
    time: "14:00:00",
    reason: "Sore head"
}

console.log("Here's one I made earlier ", singleDoctor, singleAppointment);

async function seed() {
    await prisma.doctor.create({
        data: {
            firstname: singleDoctor.firstname,
            lastname: singleDoctor.lastname,
            speciality: singleDoctor.speciality,
            appointments: {
                create: [
                    {
                        practice: singleAppointment.practice,
                        date: singleAppointment.date,
                        time: singleAppointment.time,
                        reason: singleAppointment.reason
                    }
                ]
            }
        }
    })
}

seed()
.catch((error)=> {
    console.error(error);
    process.exit(1)
})
.finally(()=>{
    prisma.$disconnect()
})