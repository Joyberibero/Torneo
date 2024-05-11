// Elimina la colección para volver a generar la estadística.
db.TablaPosiciones.drop();

// Objeto para almacenar la tabla de posiciones
var tablaPosiciones = {};

// Calcula los resultados de los partidos y actualiza la colección TablaPosiciones
db.Partidos.find().forEach(function(partido) {
    // Actualiza las estadísticas del equipo local
    if (!tablaPosiciones[partido.local]) {
        tablaPosiciones[partido.local] = {
            PJ: 0,
            PG: 0,
            PE: 0,
            PP: 0,
            GF: 0,
            GC: 0,
            DG: 0,
            PTS: 0
        };
    }
    tablaPosiciones[partido.local].PJ++;
    tablaPosiciones[partido.local].GF += parseInt(partido.resultado.split("-")[0]);
    tablaPosiciones[partido.local].GC += parseInt(partido.resultado.split("-")[1]);
    if (parseInt(partido.resultado.split("-")[0]) > parseInt(partido.resultado.split("-")[1])) {
        tablaPosiciones[partido.local].PG++;
        tablaPosiciones[partido.local].PTS += 3;
    } else if (parseInt(partido.resultado.split("-")[0]) === parseInt(partido.resultado.split("-")[1])) {
        tablaPosiciones[partido.local].PE++;
        tablaPosiciones[partido.local].PTS += 1;
    } else {
        tablaPosiciones[partido.local].PP++;
    }
    tablaPosiciones[partido.local].DG = tablaPosiciones[partido.local].GF - tablaPosiciones[partido.local].GC;

    // Actualiza las estadísticas del equipo visitante
    if (!tablaPosiciones[partido.visitante]) {
        tablaPosiciones[partido.visitante] = {
            PJ: 0,
            PG: 0,
            PE: 0,
            PP: 0,
            GF: 0,
            GC: 0,
            DG: 0,
            PTS: 0
        };
    }
    tablaPosiciones[partido.visitante].PJ++;
    tablaPosiciones[partido.visitante].GF += parseInt(partido.resultado.split("-")[1]);
    tablaPosiciones[partido.visitante].GC += parseInt(partido.resultado.split("-")[0]);
    if (parseInt(partido.resultado.split("-")[1]) > parseInt(partido.resultado.split("-")[0])) {
        tablaPosiciones[partido.visitante].PG++;
        tablaPosiciones[partido.visitante].PTS += 3;
    } else if (parseInt(partido.resultado.split("-")[1]) === parseInt(partido.resultado.split("-")[0])) {
        tablaPosiciones[partido.visitante].PE++;
        tablaPosiciones[partido.visitante].PTS += 1;
    } else {
        tablaPosiciones[partido.visitante].PP++;
    }
    tablaPosiciones[partido.visitante].DG = tablaPosiciones[partido.visitante].GF - tablaPosiciones[partido.visitante].GC;
});

// Inserta los datos en la colección Tabla de Posiciones
for (var equipo in tablaPosiciones) {
    if (equipo !== 'undefined') { // Asegura que el equipo no sea 'undefined'
        db.TablaPosiciones.insertOne({
            Equipo: equipo,
            PJ: tablaPosiciones[equipo].PJ,
            PG: tablaPosiciones[equipo].PG,
            PE: tablaPosiciones[equipo].PE,
            PP: tablaPosiciones[equipo].PP,
            GF: tablaPosiciones[equipo].GF,
            GC: tablaPosiciones[equipo].GC,
            DG: tablaPosiciones[equipo].DG,
            PTS: tablaPosiciones[equipo].PTS
        });
    }
}

// Mostrar colección de forma descendente según los puntos (PTS)
db.TablaPosiciones.find().sort({ PTS: -1 });
