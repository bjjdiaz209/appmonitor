import mongoose from "mongoose";

interface ConectionOptions {
    mongoUrl: string;
    dbName: string;
}

export class MongoDatabase{

    static async connect (options: ConectionOptions){
     const { mongoUrl, dbName } = options;

    try {
       await mongoose.connect(mongoUrl, {
        dbName: dbName,
       });

         console.log('Connected to the database');

    } 
    catch (error) {
        console.log('Error connecting to the database');
        throw error;
    }


    }
}