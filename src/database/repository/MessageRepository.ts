import type {ModelStatic} from "sequelize";
import type {RetrieveSentMessageReportDataType,} from "../../types/nh1/RetrieveSentMessageReportResponseType";
import Message from "../models/Message";

class MessageRepository {
    private model: ModelStatic<Message>;

    public constructor() {
        this.model = Message;
    }

    public async getLatestMessageId(): Promise<number> {
        const res = await this.model.findOne({
            order: [["created_at", "DESC"]],
            attributes: ["id", "message_id"]
        });
        if(!res) return 0;
        return res.message_id;
    }

    public async insert(record: RetrieveSentMessageReportDataType): Promise<Message> {
        return await this.model.create({
            message_id: record.SMSId,
            recipient_number: record.Recipient,
            sender_number: record.Sender,
            status: record.Status,
            parts: record.Parts,
            body: record.Text,
            send_time: record.SentTime
        });
    }
}

export default MessageRepository;