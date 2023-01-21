import DigitFacade from "./DigitFacade";

class DateFacade {
    public static getLocalTimestamp(): string {
        const date: Date = new Date();
        const year: string = date.getFullYear().toString();
        const month: string = DigitFacade.fixDigitLength(date.getMonth() + 1, 2);
        const day: string = DigitFacade.fixDigitLength(date.getDate(), 2);

        const hour: string = DigitFacade.fixDigitLength(date.getHours(), 2);
        const minute: string = DigitFacade.fixDigitLength(date.getMinutes(), 2);
        const seconds: string = DigitFacade.fixDigitLength(date.getSeconds(), 2);

        return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`
    }
}

export default DateFacade;