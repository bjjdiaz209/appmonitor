import { LogDatasource } from "../../domain/datasources/log.datasources";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";



export class LogRepositoryImpl implements LogRepository {
     
    constructor(
        private readonly logRepository: LogDatasource,
    ) { }

    saveLog(log: LogEntity): Promise<void> {
        return this.logRepository.saveLog(log);
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logRepository.getLogs(severityLevel);
    }
    
}