function logParameter(target, propertyName,indedx){
    const metadaKey = `log_${propertyName}_parameters`;
    if(Array.isArray(target[metadaKey])){
        target[metadaKey].push(index);
    }else{
        target[metadaKey]= [index]; 
            }
        }
    
class P {
    greet (@logParameter message :string): string { 
        return message;
    }
}

const p = new P(); 
p.greet ('Hola');