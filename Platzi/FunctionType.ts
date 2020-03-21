
type CallBackError = Error | null;
type CallBack = (error: any ,response: Object) => void
type SendRequest = (cb: CallBack) => void; 

function sendRequest(cb:any): void {
    if(cb){
        cb(null,{message:'todo salio como lo planeamos'});
    }
}
