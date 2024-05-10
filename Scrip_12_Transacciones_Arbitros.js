
// Seleccionar toda la coleccion
db.Arbitros.find()

// Selección por país y experiencia mayor a 5 años
db.Arbitros.find({ Pais: "Peru", experiencia: { $gt: "5 años" } })


// Selección por Categoria y pais
db.Arbitros.find({ Categoria: "Conmebol", Pais: "Argentina" })

// Selección experiencia mayor a 5 años
db.Arbitros.find({ experiencia: { $gt: "5 años" } })

//Seleccion Por pais " Argentina y Colombia"
db.Arbitros.find({ Pais: { $in: ["Argentina", "Colombia"] } })

// Seleccionar por experiencia exacta
db.Arbitros.find({ experiencia: "11 años" })


// Actualizar la categoría de un árbitro
db.Arbitros.updateOne(
    { Id_Arbitro: 4 },
    { $set: { Categoria: "Conmebol" } }
)

// Actualizar la experiencia de múltiples árbitros
db.Arbitros.updateMany(
    { Pais: "Uruguay" },
    { $set: { experiencia: "10 años" } }
)


// Eliminar un árbitro por su ID
db.Arbitros.deleteOne({ Id_Arbitro: 7 })

// Eliminar árbitros que tienen menos de 5 años de experiencia
db.Arbitros.deleteMany({ experiencia: { $lt: "5 años" } })



//====================================================================   BONUS #1

// Contar la cantidad de partidos pitados por cada árbitro
var partidosPorArbitro = db.Partidos.aggregate([
    { $group: { _id: "$arbitro", totalPartidos: { $sum: 1 } } },
    { $sort: { totalPartidos: -1 } }
]).toArray();

// Encontrar al árbitro que ha pitado más partidos
var arbitroMasPartidos = partidosPorArbitro[0];

// Encontrar al árbitro que ha pitado menos partidos
var arbitroMenosPartidos = partidosPorArbitro[partidosPorArbitro.length - 1];

// Mostrar los resultados
print("El árbitro que ha pitado más partidos es: " + arbitroMasPartidos._id + " con un total de " + arbitroMasPartidos.totalPartidos + " partidos.");
print("El árbitro que ha pitado menos partidos es: " + arbitroMenosPartidos._id + " con un total de " + arbitroMenosPartidos.totalPartidos + " partidos.");


//====================================================================    BONUS #2

// Contar la cantidad de partidos pitados por cada árbitro
var partidosPorArbitro = db.Partidos.aggregate([
    { $group: { _id: "$arbitro", totalPartidos: { $sum: 1 } } },
    { $sort: { totalPartidos: -1 } }
]).toArray();

// Mostrar la tabla con los nombres de los árbitros y su cantidad de partidos pitados
print("Nombre del Árbitro\t\tCantidad de Partidos Pitados");
print("-------------------------------------------------------");
partidosPorArbitro.forEach(function(arbitro) {
    print(arbitro._id + "\t\t\t" + arbitro.totalPartidos);
});






