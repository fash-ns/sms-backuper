import axios from "axios";
import HTTPFacade from "./HTTPFacade";
import type {
    RetrieveSentMessageReportDataType,
    RetrieveSentMessageReportResponseType
} from "../../types/nh1/RetrieveSentMessageReportResponseType";
import MessageFromStatusCode from "../nh1/MessageFromStatusCode";

class NH1 {
    private readonly webServiceBaseUrl: string;
    private readonly username: string;
    private readonly password: string;

    public constructor(username: string, password: string) {
        this.webServiceBaseUrl = "http://ws.nh1.ir/Api/SMS/";
        this.username = username;
        this.password = password;
    }

    public async retrieveSentMessagesReport(messageId: number): Promise<RetrieveSentMessageReportDataType[]> {
        const queryString = HTTPFacade.objectToQs({
            Username: this.username,
            Password: this.password,
            SMSId: messageId
        });

        const res = await axios.get<RetrieveSentMessageReportResponseType>(`${this.webServiceBaseUrl}ReportBulkSMS?${queryString}`);
        if(res.data.ResultStatusCode > 1)
            throw new Error(MessageFromStatusCode.get(res.data.ResultStatusCode));
        return res.data.Data?.Bulks ?? [];
    }
}

export default NH1;
