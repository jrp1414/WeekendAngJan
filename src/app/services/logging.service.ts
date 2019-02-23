
export class LoggingService{
    logStatus(status:string){
        console.log("Logged Status : " + status+" : "+new Date().toLocaleDateString());
    }
}