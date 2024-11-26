
import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/ckecks/check-service";
import { FileSystemDataSource } from "../infrastucture/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastucture/repositories/log.repository.impl";
import { envs } from "../config/plugins/env.plugin";
import { EmailService } from "./email/email.service";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource
);



export class Server {
       
    public static start(){
        console.log('Server started...');

        //mandar email
        const emailService = new EmailService();
        emailService.sendEmail({
            to:'ernestoquin2211@gmail.com',
            subject:'logs de sistema',
            htmlBody:`<h1>Logs de sistema</h1>
            <p>Logs de sistema NOc</p>
            <p> Magna amet consequaid labsse aliquip incididunt tempor.</p>
            `
            
        })


        //CronService.Createjob(
          //  '*/5 * * * * *',
            //() => {
                //const url = 'https://www.google.com';
                //new CheckService(
                  //  fileSystemLogRepository,
                    //() => console.log(`Service is up: ${url}`),
                    //(error) => console.error(error)
                //).execute(url);
            //}

        //);
        
    }

}
