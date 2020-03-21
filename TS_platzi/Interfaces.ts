type Dni = number; 

interface Persona { 
    altura?: number; 
    edad: number; 
    nombre: string; 
    apellido: string; 
    dni: Dni; 
}

const persona: Persona  = {
    edad: 27,
    nombre: 'Juventino',
    apellido: 'Perez',
    dni: 1322142
    
}
 