var denisse = {
    nombre:'Denisse',
    apellido:'Torres',
    edad: 28
}

var juventino = {
    nombre:'juventino',
    apellido:'Perez',
    edad: 28
}
function  imprimirNombreEnMayusculas({nombre}) {
   
    console.log (nombre.toUpperCase() )

}

imprimirNombreEnMayusculas (denisse)
imprimirNombreEnMayusculas (juventino)
imprimirNombreEnMayusculas({nombre:'pepito'})

//imprimirNombreEnMayusculas({apellido:'pepito'})