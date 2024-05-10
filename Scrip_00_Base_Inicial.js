// crear Base de datos.
use('Torneo')
// Eliminar colecciones 
db.Equipos.drop()
db.Arbitros.drop()
db.Jugadores.drop()
db.Partidos.drop()
db.TablaPosiciones.drop()
// Crear colecciones
db.createCollection('Equipos');
db.createCollection('Arbitros'); 
db.createCollection('Jugadores');
db.createCollection('Partidos'); 
db.createCollection('TablaPosiciones'); 

//Mostrar colecciones   opcional  ->  db.getCollectionNames()
show collections



