
//MOstrar todos los jugadores de un equipo

db.Jugadores.find({ equipo: 100 })

// Mostrar jugadores por  Nacionalidad

db.Jugadores.find({ nacionalidad: "Colombiana" })

// MOstrar Jugadores menores de 25 años

db.Jugadores.find({ edad: { $lt: 25 } })

//Mostar jugadores mayored de 30 años

db.Jugadores.find({ edad: { $gt: 30 } })

//Mostrar jugadores por posiscion de Juego
db.Jugadores.find({ posición: "Delantero" })

// Mostra delanteros de origennacionalidad Colombiana
db.Jugadores.find({ $and:[{ posición: "Delantero" },{nacionalidad: "Colombiana"}]} )





//Update Posicion  Por Nombre
db.Jugadores.updateOne({ nombre: "Kevin Mier" }, { $set: { posición: "Guardameta" } })


//incrementar la edad un año a los jugadores Colombianos

db.Jugadores.updateMany({ nacionalidad: "Colombiana" }, { $inc: { edad: 1 } })


// Cambiar  un jugador de equipo "Tranferir"
db.Jugadores.updateOne({ nombre: "Kevin Mier" }, { $set: { equipo: 200 } })


// Cambiar nacionalidad de un jugador
db.Jugadores.updateOne({ nombre: "Stefan Medina" }, { $set: { nacionalidad: "Mexicana" } })


//reducir la edad de un jugador 
db.Jugadores.updateOne({ nombre: "Carlos Izquierdoz" }, { $inc: { edad: -2 } })


//Eliminar jugador por el nombre
db.Jugadores.deleteOne({ nombre: "Kevin Mier" })

// Eliminar todos los jugadores mayores de 30 años
db.Jugadores.deleteMany({ edad: { $gt: 30 } })

// Eliminar jugadores de una nacionalidad especifica
db.Jugadores.deleteMany({ nacionalidad: "Colombiana" })

//Eliminar todo los jugadores de un equipo
db.Jugadores.deleteMany({ equipo: 600 })

// eliminar todos los jugadores
db.Jugadores.deleteMany({})









