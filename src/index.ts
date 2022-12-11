// import dotenv from "dotenv";
// dotenv.config()

import type {
    RetrieveSentMessageReportDataType,
} from "./types/nh1/RetrieveSentMessageReportResponseType";
import NH1 from "./services/http/NH1";
import MessageRepository from "./database/repository/MessageRepository";
import logger from "./services/Logger";

const nh1: NH1 = new NH1(process.env.NH1_USER, process.env.NH1_PASSWORD);
const repo = new MessageRepository();

async function main() {
    let latestId = await repo.getLatestMessageId();
    let data: RetrieveSentMessageReportDataType[] = [];
    while (true) {
        data = await nh1.retrieveSentMessagesReport(latestId);
        if(data.length === 0)
            throw new Error("There is no new messages");
        for(const item of data) {
            logger.getInstance().info(`Getting message with id ${item.SMSId}`);
            await repo.insert(item);
        }
        latestId = data[data.length - 1].SMSId;
    }
}

main().catch(err => {
    logger.getInstance().error(err.message);
    process.exit(1);
});