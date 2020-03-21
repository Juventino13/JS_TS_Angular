
class Persona {
    private edad: number; 
    private altura: number;
    private dni: string; 

    constructor (edad:number ,altura: number, dni: string ){
    this.edad = edad; 
    this.altura = altura; 
    this.dni = dni; 
   }
}

class Alumno extends Persona {
    private matricula: string; 
    constructor (edad:number ,altura: number ,dni: string, matricula: string ){
        super(edad ,altura ,dni );
        this.matricula= matricula;
    }
}

let persona: Persona = new persona(12,1.43,'23242323');
let alumno: Alumno = new persona(12,1.43,'23242323','222');

persona= alumno; // Cada tipo tiene cierta propiedad, que representan cuando hablas de una persona hablas de una estructura padre
