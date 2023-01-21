import path from "path";
import {createLogger, transports, format} from "winston";
import type {Logger} from "winston";
import DateFacade from "./facades/DateFacade";

const {File, Console} = transports;

const customFormat = format.printf(({level, message, timestamp}) => {
    return `${timestamp} ${level}: ${message}`;
});

class WinstonLoggerSingleton {
    private static instance: Logger;

    public static getInstance(): Logger {
        if (!WinstonLoggerSingleton.instance)
            WinstonLoggerSingleton.instance = createLogger({
                level: "info",
                transports: [
                    new File({
                        filename: path.resolve(process.env.PWD, "backup_service.log"),
                        format: format.combine(format.timestamp(), customFormat)
                    }),
                    new Console({
                        format: format.combine(format.timestamp({
                            format: DateFacade.getLocalTimestamp
                        }), format.colorize(), customFormat)
                    })
                ]
            });
        return WinstonLoggerSingleton.instance;
    }
}

export default WinstonLoggerSingleton;
