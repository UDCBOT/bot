export default class LogFailedException extends Error {
    constructor(message: string) {
        super(message);
    }
}
