import {createLogger, transports, format} from "winston";
import type {Logger} from "winston";
const {File, Console} = transports;

const customFormat =  format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

class WinstonLoggerSingleton {
    private static instance: Logger;

    public static getInstance(): Logger {
        if(!WinstonLoggerSingleton.instance)
            WinstonLoggerSingleton.instance = createLogger({
                level: "info",
                transports: [
                    new File({filename: "backup_service.log", format: format.combine(format.timestamp(), customFormat)}),
                    new Console({format: format.combine(format.timestamp(), format.colorize(), customFormat)})
                ]
            });
        return WinstonLoggerSingleton.instance;
    }
}

export default WinstonLoggerSingleton;