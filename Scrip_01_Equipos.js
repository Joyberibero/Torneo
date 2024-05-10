
//Insertar Datos a la coleccion Equipos

// Insertar solo un registro
db.Equipos.insertOne({
    Cod_Fifa: 100,
    Nombre: "Atletico Nacional",
    País: "Colombia",
    Entrenador: "Pablo Repetto", 
    Estadio: "Estadio Atanasio Girardot" 
})

// Insertar multiples registros

db.Equipos.insertMany([  
  {
    Cod_Fifa: 200,
    Nombre: "Boca Juniors",
    País: "Argentina",
    Entrenador: "Diego Martínez", 
    Estadio: "Estadio Alberto J. Armando (La Bombonera)" 
  },
  {
     Cod_Fifa: 300,
    Nombre: "Corinthians",
    País: "Brasil",
    Entrenador: "António Oliveira", 
    Estadio: "Arena Corinthians" 
  },
  {
     Cod_Fifa: 400,
    Nombre: "Monterrey",
    País: "Mexico",
    Entrenador: "Gerardo Arteaga ", 
    Estadio: "Estadio BBVA" 
  },
  {
    Cod_Fifa: 500,
    Nombre: "Colo Colo",
    País: "Chile",
    Entrenador: "Gustavo Quinteros", 
    Estadio: "Estadio Monumental David Arellano" 
  },
  {
    Cod_Fifa: 600,
    Nombre: "River Plate",
    País: "Argentina",
    Entrenador: "Martín Demichelis", 
    Estadio: "Estadio Monumental Nuñez" 
  },
  {
    Cod_Fifa: 700,
    Nombre: "Flamengo",
    País: "Brasil",
    Entrenador: "Adenor Leonardo Bachi 'Tite'", 
    Estadio: "Maracaná." 
  },
  {
    Cod_Fifa: 800,
    Nombre: "Libertad",
    País: "Paraguay",
    Entrenador: "Ariel Galeano", 
    Estadio: "Estadio La Huerta" 
  }
  
])


// Mostrar todos los registros de la coleccion

db.Equipos.find()

//Busqueda Detallada por codigo de Equipo
//db.Equipos.find( { Cod_Fifa: 400} )



// 



