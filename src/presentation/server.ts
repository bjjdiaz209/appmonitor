
import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/ckecks/check-service";
import { FileSystemDataSource } from "../infrastucture/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastucture/repositories/log.repository.impl";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource
);



export class Server {
       
    public static start(){
        console.log('Server started...');

        CronService.Createjob(
            '*/5 * * * * *',
            () => {
                const url = 'https://www.google.com';
                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`Service is up: ${url}`),
                    (error) => console.error(error)
                ).execute(url);
            }

        );
        
    }

}
