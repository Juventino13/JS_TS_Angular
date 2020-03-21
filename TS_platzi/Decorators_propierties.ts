function logProperty(targe,key){
    let _val = this[key]; 
    const getter = () => {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    }

    const setter = (newValue) => {
        console.log(`Set: ${key} => ${newValue}`);
      _val = newValue;
    }
    const objectProperty= { 
        get:getter,
        set:setter
    }
    Object.defineProperty(targe,key,objectProperty)
}

class Persona{ 
    @logProperty
    
    public name: string; 
    constructor(name: string){
        this.name = name; 
    }
}


const p = new Persona ('juventino');
p.name  = 'Platzi';  // set:name => 'Platzi'
const nameFromClass= p.sayMyName; //get: name => 'platzi'