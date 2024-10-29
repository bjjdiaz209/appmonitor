
import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/ckecks/check-service";


export class Server {
       
    public static start(){
        console.log('Server started...');

        CronService.Createjob(
            '*/5 * * * * *',
            () => {
                new CheckService().execute('https://www.google.com');
            }

        );
        
    }

}
