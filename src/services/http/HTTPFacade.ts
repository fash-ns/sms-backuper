class HTTPFacade {
    public static objectToQs(variables: Record<string, string | number>): string {
        const queryStringArray: string[] = [];

        Object.keys(variables).forEach(key => {
            queryStringArray.push(`${key}=${variables[key]}`);
        });

        return queryStringArray.join("&");
    }
}

export default HTTPFacade