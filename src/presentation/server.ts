
import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/ckecks/check-service";
import { FileSystemDataSource } from "../infrastucture/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastucture/repositories/log.repository.impl";
import { envs } from "../config/plugins/env.plugin";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource
);

    const emailService = new EmailService(
    );



export class Server {
       
    public static start(){
        console.log('Server started...');

       //mandar email
       //new SendEmailLogs(
         //   emailService,
           // fileSystemLogRepository
       ///).execute([
          // 'ernestoquin2211@gmail.com'
       //])

       // const emailService = new EmailService(
         //   fileSystemLogRepository
        //);
        //emailService.sendEmailWithFileSystemLogs([
          //'ernestoquin2211@gmail.com'
        //]);

        //CronService.Createjob(
          //  '*/5 * * * * *',
            //() => {
              //  const url = 'https://www.google.com';
                //new CheckService(
                  //  fileSystemLogRepository,
                    //() => console.log(`Service is up: ${url}`),
                    //(error) => console.error(error)
                //).execute(url);
            //}

        //);
        
    }

}
