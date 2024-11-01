
interface CheckServiceUseCase {
    execute(url:string): Promise<boolean>

}

   type SucessCallback = () => void;
    type ErrorCallback = (error:string) => void;

export class CheckService implements CheckServiceUseCase {
  
    constructor(
        private readonly sucessCallback:SucessCallback,
         private readonly errorCallback:ErrorCallback
        )
         {}

    

    public async execute(url:string): Promise<boolean> {
        try{
            const req = await fetch(url);
            if(!req.ok){
                throw new Error(`Error: ${url}`);
            }
            this.sucessCallback();
            
            return true;
        }catch(error){
            console.error(` ${error}`);
        this.errorCallback(` ${error}`);
            return false;
    }
    }
}