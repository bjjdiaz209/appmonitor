
import { envs } from "./config/plugins/env.plugin";
import { logModel, MongoDatabase } from "./data/mongodb";
import { Server } from "./presentation/server";



(async() => {
     main();
     })();

 async  function main() {
     await MongoDatabase.connect({
          mongoUrl: envs.MONGO_URL,
          dbName: envs.MONGO_DB_NAME,
     });


     //crear coleccion  = tables ,documento registro
     //const newLog = await logModel.create({ 
       //   message: 'Test Server started',
         // origin: 'App.ts',
          //level: 'low',

      //});
      //await newLog.save();
        //  console.log(newLog);
       const logs = await logModel.find();
           console.log(logs);




        //Server.start();
       // console.log(envs);
     }