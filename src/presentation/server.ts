
import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/ckecks/check-service";
import { FileSystemDataSource } from "../infrastucture/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastucture/repositories/log.repository.impl";
import { envs } from "../config/plugins/env.plugin";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { log } from "console";
import { MongoLogDatasource } from "../infrastucture/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";



const logrepository = new LogRepositoryImpl(
  //new FileSystemDataSource(),
  new MongoLogDatasource(),
);
const emailService = new EmailService();


export class Server {

  public  static async start() {

    console.log( 'Server started...' );

    //todo: Mandar email
    // new SendEmailLogs(
    //   emailService, 
    //   fileSystemLogRepository,
    // ).execute(
    //   ['fernando.herrera85@gmail.com','fernando.herrera.cr@gmail.com']
    // )
    // emailService.sendEmailWithFileSystemLogs(
    //   ['fernando.herrera85@gmail.com','fernando.herrera.cr@gmail.com']
    // );
    
      const logs = await logrepository.getLogs(LogSeverityLevel.low);
      console.log(logs);
    
     //CronService.createJob(
       //'*/5 * * * * *',
       //() => {
         //const url = 'https://google.com';
         //new CheckService(
           //logrepository,
           //() => console.log( `${ url } is ok` ),
           //( error ) => console.log( error ),
         //).execute( url );
    //     // new CheckService().execute( 'http://localhost:3000' );
        
       //}
     //);


  }


}


