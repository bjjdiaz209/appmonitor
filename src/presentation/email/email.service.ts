import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/env.plugin';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';



interface SendEmailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachements?: Attachements[];

}
  
  interface Attachements{
    filename: string;
    path : string;
  }




export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    }
  });
  
  constructor() {}

  async sendEmail(options: SendEmailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachements =[] } = options;

    try {
        const sentInformation = await this.transporter.sendMail({
            to: to,
            subject: subject,
            html: htmlBody,
            attachments: attachements
        } );


        //console.log(sentInformation);
       // const log = new LogEntity({
         // level : LogSeverityLevel.low,
          //message: 'Email sent',
          //origin: 'email.service.ts',
        //})
        

       return true;
    } catch (error) {
     
        return false        
    }

  }
  
  async sendEmailWithFileSystemLogs(to: string | string[]){

     const subject = 'Logs de servidor';
     const htmlBody = `<p>Logs de servidor em anexo</p>`;


     const attachements: Attachements[] = [
     {
      filename: 'logs-low.log',path: './logs/logs-low.log'
     }

     ];

     return this.sendEmail({
      to,
      subject,
      attachements,
      htmlBody
     });

  }
    



}
