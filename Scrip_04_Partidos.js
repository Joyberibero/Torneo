// Traer los nombres de los equipos desde la colección Equipos
var equipos = db.Equipos.distinct("Nombre");

// Traer los nombres de los árbitros desde la colección Arbitros
var arbitros = db.Arbitros.distinct("Nombre");

// Función para generar un marcador aleatorio
function generarMarcador() {
    var golesLocal = Math.floor(Math.random() * 4); 
    var golesVisitante = Math.floor(Math.random() * 4); 
    return golesLocal + "-" + golesVisitante;
}

// Generar emparejamientos para cada ronda
for (var i = 0; i < equipos.length; i++) {
    var ronda = [];
    for (var j = 0; j < equipos.length / 2; j++) {
        var local = equipos[j];
        var visitanteIndex = (j + i + 1) % equipos.length;
        var visitante = equipos[visitanteIndex];
        var indiceArbitro = Math.floor(Math.random() * arbitros.length);
        var arbitroSeleccionado = arbitros[indiceArbitro];
        var resultado = generarMarcador();
        var estadioLocal = db.Equipos.findOne({Nombre: local}).Estadio; // Obtener el estadio del equipo local
        var paisLocal = db.Equipos.findOne({Nombre: local}).País; // Obtener el país del equipo local
        ronda.push({
            id_Partido: i * (equipos.length / 2) + j + 1,
            fecha: new Date("2024-05-1" + (i + 1)), 
            equipos: [local, visitante],
            resultado: resultado,
            estadioLocal: estadioLocal,
            paisLocal: paisLocal,
            visitante: visitante,
            arbitro: arbitroSeleccionado
        });
    }
    db.Partidos.insertMany(ronda);
}

// Verificar que se hayan insertado los partidos correctamente
db.Partidos.find();
