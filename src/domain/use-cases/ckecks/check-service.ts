
interface CheckServiceUseCase {
    execute(url:string): Promise<boolean>

}

export class CheckService implements CheckServiceUseCase {
    

    public async execute(url:string): Promise<boolean> {
        try{
            const req =await fetch(url);
            if(!req.ok){
                throw new Error(`Error: ${url}`);
            }
            console.log(`Service is up: ${url}`);
            return true;
        }catch(error){
            console.error(` ${error}`);
            return false;
    }
    }
}