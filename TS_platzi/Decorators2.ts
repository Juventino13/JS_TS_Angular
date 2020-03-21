function int (target){
    return class extends target{
nombre='Juvnetino'; 
apellido = ' Perez';

    sayMyName(){
        return `${this.nombre} ${this.apellido}`    }
    }
}
class P{
    constructor(){}
    sayMyName(){}

}

const p: P = new P();
console.log(p.sayMyName);