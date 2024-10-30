
import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/ckecks/check-service";


export class Server {
       
    public static start(){
        console.log('Server started...');

        CronService.Createjob(
            '*/5 * * * * *',
            () => {
                const url = 'https://www.google.com';
                new CheckService(
                    () => console.log(`Service is up: ${url}`),
                    (error) => console.error(error)
                ).execute(url);
            }

        );
        
    }

}
