// Mostrar toda la coleccion
db.Equipos.find()

// Búsqueda detallada por código de Equipo
db.Equipos.find({ Cod_Fifa: 400 })


// Actualizar un registro existente
db.Equipos.updateOne(
    { Cod_Fifa: 600 },
    { $set: { Entrenador: "Marcelo Gallardo" } }
)

// Actualizar múltiples registros
db.Equipos.updateMany(
    { País: "Brasil" },
    { $set: { Entrenador: "Renato Gaúcho" } }
)

// Eliminar un registro por su código FIFA
db.Equipos.deleteOne({ Cod_Fifa: 800 })

// Eliminar varios registros que coinciden con ciertos criterios
db.Equipos.deleteMany({ País: "Argentina" })

/*

// Insertar un solo registro en este caso atletico Nacional 
db.Equipos.insertOne({
    Cod_Fifa: 100,
    Nombre: "Atletico Nacional",
    País: "Colombia",
    Entrenador: "Pablo Repetto",
    Estadio: "Estadio Atanasio Girardot"
})

// Para Insertar múltiples registros
db.Equipos.insertMany([
    {
        Cod_Fifa: 00,
        Nombre: "Nombre equipo",
        País: "Pais ",
        Entrenador: "Nombre del entrenador",
        Estadio: "Estadio del equipo"
    },
     {
        Cod_Fifa: 00,
        Nombre: "Nombre equipo",
        País: "Pais ",
        Entrenador: "Nombre del entrenador",
        Estadio: "Estadio del equipo"
    }
])

*/









