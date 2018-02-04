class AbstractMessageHandler {
    /**
     * @param {RegExp} regex
     */
    constructor(regex) {
        this.regex = regex;
    }

    /**
     * @param {string} message
     */
    canHandle(message) {
        return this.regex.test(message);
    }


    /* eslint-disable */
    /**
     * @param {Message} message
     * @param {Client} client
     */
    handle(message, client) {
        throw new Error('Not implemented');
    }
    /* eslint-enable */
}

module.exports = AbstractMessageHandler;
