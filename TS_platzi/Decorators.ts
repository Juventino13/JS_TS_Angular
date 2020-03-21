

function log(target,key){
    console.log(key + 'se ha llamado');
}

class Persona{
    private name: string; 

    constructor (name: string){
    this.name = name;
    }
    @log
    sayMyName(){
     console.log(this.name);
    }
}

const persona: Persona = new Persona ('Juventino'); 
persona.sayMyName(); // Juventino