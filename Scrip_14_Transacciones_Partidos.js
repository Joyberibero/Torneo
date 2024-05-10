
//Transacciones Partidos
db.Partidos.find()

//Partidos empatados
db.Partidos.find({ resultado: "0-0" })

//Partidos con Marcador 2-0
db.Partidos.find({ resultado: "2-0" })


//Partidos ganados por visitantes:
db.Partidos.find({ resultado: { $regex: /0-[1-3]/ } })

//Partidos ganados por Local
db.Partidos.find({ resultado: { $regex: /0-[1-3]/ } })


//Total partidos jugados por pais
db.Partidos.aggregate([
    { $group: { _id: "$Pais_sede", totalPartidos: { $sum: 1 } } }
])


//Modificar marcador de un partido
db.Partidos.updateOne({ id_Partido: 2 }, { $set: { resultado: "0-0" } })



//Modificar arbitro de un partido
db.Partidos.updateOne({id_Partido: 2 }, { $set: { arbitro: "Nuevo Árbitro" } })

// Cammbiar fecha de partido
db.Partidos.updateOne({ id_Partido: 2}, { $set: { fecha: new Date("2024-05-20") } })


//eliminar partido por id
db.Partidos.deleteOne({  id_Partido: 2 })


// eliminar partido por fecha
db.Partidos.deleteMany({ fecha: new Date("2024-05-15") })








