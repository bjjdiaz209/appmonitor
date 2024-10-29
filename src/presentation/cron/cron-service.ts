import { CronJob } from 'cron';


type CronTime = string | Date ;
type OnTick = () => void;


export class CronService {
     static Createjob( cronTime:CronTime , onTick: OnTick): CronJob {
       
        const job = new CronJob(
          cronTime,onTick// onTick
           
        );
        job.start();

        return job;
    }
}