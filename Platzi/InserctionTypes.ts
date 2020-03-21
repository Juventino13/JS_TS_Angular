interface Interface1{
    prop1: number;
}
interface Interface2{
    prop2: number;
}

type InterfaceMix =  Interface1 & Interface2; 

const interfaceMix : InterfaceMix = {
    prop1: 1,
    prop2: 2
    
}