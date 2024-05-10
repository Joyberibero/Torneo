//Insertar Datos a la coleccion Arbitros

// Insertar solo un registro
db.Arbitros.insertOne({
    Id_Arbitro: 1,
        Nombre: "Andres Pena Garcia",
        Pais: "Argentina",
        Categoria: "Conmebol",
        experiencia: "10 años"
})

// Insertar multiples registros

db.Arbitros.insertMany([
    {
        Id_Arbitro: 2,
        Nombre: "Federico Piccardo",
        Pais: "Uruguay",
        Categoria: "Nacional",
        experiencia: "8 años"
    },
    {
        Id_Arbitro: 3,
        Nombre: "Daniel Manrigue",
        Pais: "Colombia",
        Categoria: "Conmebol",
        experiencia: "11 años"
    },
    {
        Id_Arbitro: 4,
        Nombre: "Ricardo Messa",
        Pais: "México",
        Categoria: "Nacional",
        experiencia: "4 años"
    },
     {
        Id_Arbitro: 5,
        Nombre: "Roberto Peres",
        Pais: "Peru",
        Categoria: "Nacional",
        experiencia: "8 años"
    },
     {
        Id_Arbitro: 6,
        Nombre: "Juan Benitez",
        Pais: "Paraguay",
        Categoria: "Nacional",
        experiencia: "9 años"
    },
     {
        Id_Arbitro: 7,
        Nombre: "Facundo Tello",
        Pais: "Argentina",
        Categoria: "Conmebol",
        experiencia: "10 años"
    },
     {
        Id_Arbitro: 8,
        Nombre: "Augusto Aragon",
        Pais: "Ecuador",
        Categoria: "Conmebol",
        experiencia: "10 años"
    }
]);


db.Arbitros.find()


