export interface RetrieveSentMessageReportDataType {
    SMSId: number;
    Recipient: string;
    Sender: string;
    Status: string;
    Parts: number;
    Text: string;
    SentTime: Date;
}

export interface RetrieveSentMessageReportResponseType {
    ResultStatusCode: number,
    ReasonPhrase: string,
    Data: { Bulks: RetrieveSentMessageReportDataType[] } | null
}