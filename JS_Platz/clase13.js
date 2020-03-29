var denisse = {
    nombre: 'Denisse',
    apellido: ' Torres',
    edad: 25,
    ingeniero: true, 
    concinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone : true 
}

function imprimiProfesiones(persona){
    console.log(`${persona.nombre} es:`)


if(persona.ingeniero){
    console.log('ingeniero')
}else{
    console.log('no es ingeniero')
}
if(persona.cocinero){
    console.log('Cocinero')
}

if(persona.cantante){
    console.log('Cantante')
}
if(persona.piloto){
    console.log('piloto')
}
}
const MAYORIA_DE_EDAD=18
/*
function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}*/
/////////////////////////////////////////////
//Se convierte
/*const esMayorDeEdad=(persona)=>{
    return persona.edad>= MAYORIA_DE_EDAD
}*/ 
/////////////////////////////////////////////
// se reduce a una linea
/////////const esMayorDeEdad=(persona)=>persona.edad>= MAYORIA_DE_EDAD
/////////////////////////////////////////////
//Desestructurar
const esMayorDeEdad=({edad})=> edad >= MAYORIA_DE_EDAD


function imprimirSiesMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log (`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){cd 
        console.log('No puede entrar')
    }
}
//animal
//pais
//fruta
//profesion
//persona famosa
// comida 

