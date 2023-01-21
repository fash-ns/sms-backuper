class DigitFacade {
    public static fixDigitLength(digit: number, length: number): string {
        let strDigit: string = digit.toString();
        while (strDigit.length < length)
            strDigit = "0" + strDigit;
        return strDigit;
    }
}

export default DigitFacade;