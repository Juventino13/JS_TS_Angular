type SumaParameter= string | number; 
type SumaReturnType= string | number; 

function Suma(num1: SumaParameter, num2:SumaParameter ):SumaReturnType{
    return Number (num1)  + Number(num2);    
}

interface Interface1{
     propiedad1:number; 

}
interface Interface2 { 
    propiedad2: number; 
    }

type InterfaceMix = Interface1 | Interface2; 
const InterfaceMix: InterfaceMix = {
    propiedad2:2,
    propiedad1:1,

}