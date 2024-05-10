// mostrar tabla de posiciones
db.TablaPosiciones.find()

// equipo con mas partidos ganados
db.TablaPosiciones.aggregate([
    { $sort: { PG: -1 } },
    { $limit: 1 }
])

// equipo con mas goles a favor
db.TablaPosiciones.aggregate([
    { $sort: { GF: -1 } }, // Ordenar por cantidad de goles 
    { $limit: 1 } // Obtener el mas alto
])

//Equipo con mas partidos perdidos
db.TablaPosiciones.aggregate([
    { $sort: { PP: -1 } }, // cantidad de partidos perdidos
    { $limit: 1 } // mostrar  equipo con más partidos perdidos
])


//equipo con mas goles en contra
db.TablaPosiciones.aggregate([
    { $sort: { GC: -1 } }, // cantidad de goles en contra
    { $limit: 1 } // mostrar equipo con más goles en contra
])

// ver ultimo de la fila
db.TablaPosiciones.aggregate([
    { $sort: { PTS: 1 } }, // Ordenar por puntos 
    { $limit: 1 } //  puntaje más bajo
])



//Primero en tabla de posisiciones
db.TablaPosiciones.find().sort({ PTS: -1 }).limit(1)

//Ultimo en tabla de posiciones
db.TablaPosiciones.find().sort({ PTS: 1 }).limit(1)





//aumentar 10 puntos  a todos
db.TablaPosiciones.updateMany({}, { $inc: { PTS: 10 } });

// quirtar puntos
// Supongamos que quieres quitar 5 puntos al equipo con nombre "Equipo B"
db.TablaPosiciones.updateOne({Equipo: "Atletico Nacional" }, { $inc: { PTS: -3 } });

//Cambiar entrenador
db.TablaPosiciones.updateOne({ Equipo: "Atletico Nacional" }, { $set: { Entrenador: "Nuevo Entrenador" } });



//Eliminar el ultimo de la fila
var equipoMasBajoPTS = db.TablaPosiciones.find().sort({ PTS: 1 }).limit(1);
if (equipoMasBajoPTS) {
    equipoMasBajoPTS.forEach(function(doc) {
        printjson(doc); // Imprimir el documento encontrado
        db.TablaPosiciones.deleteOne({ _id: doc._id });
        //db.TablaPosiciones.find().sort({ PTS: -1 })
        //print("El equipo con el puntaje más bajo fue eliminado con éxito.");
    });
} else {
    print("No se encontraron equipos en la tabla de posiciones.");
}

//Mostar coleccion de forma desendente
db.TablaPosiciones.find().sort({ PTS: -1 })


//Eliminar los cuatro ultimos 

var ultimosCuatroEquipos = db.TablaPosiciones.find().sort({ PTS: 1 }).limit(4);
if (ultimosCuatroEquipos) {
    ultimosCuatroEquipos.forEach(function(doc) {
        printjson(doc); // Imprimir el documento encontrado
        db.TablaPosiciones.deleteOne({ _id: doc._id });
    });
    print("Los últimos cuatro equipos fueron eliminados con éxito.");
} else {
    print("No se encontraron equipos en la tabla de posiciones.");
}





