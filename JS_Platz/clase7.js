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
function  imprimirNombreEnMayusculas({persona}) {
   var {nombre }= persona
    console.log (nombre.toUpperCase() )

}

imprimirNombreEnMayusculas (denisse)
imprimirNombreEnMayusculas (juventino)
imprimirNombreEnMayusculas({nombre:'pepito'})

imprimirNombreEnMayusculas({apellido:'perez'})
