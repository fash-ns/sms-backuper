class MessageFromStatusCode {
    public static get(status: number): string {
        switch (status) {
            case 1:
                return "OK";
            case 2:
                return "Incorrect username or password";
            case 11:
                return "Insufficient balance (under 50,000 IRR)";
            case 10001:
                return "Username and password is not entered";
            case 10002:
                return "Username is not entered";
            case 10003:
                return "Password is not entered";
            case 10004:
                return "Sender number is not entered";
            case 10005:
                return "Invalid sender number";
            case 10006:
                return "Forbidden resource";
            case 10007:
                return "One required parameter is not entered";
            case 10008:
                return "One parameter has been entered in invalid format";
            case 10009:
                return "receiver numbers or number of messages exceeds limit (Max: 500 messages)";
            case 100010:
                return "Insufficient balance for sending messages";
            case 100011:
                return "Invalid receiver number";
            case 100012:
                return "Invalid number of messages";
            case 100151:
                return "Not a good time for retrieving messages!";
            default:
                return "Unknown error";
        }
    }
}

export default MessageFromStatusCode;