import { Client, Message } from 'discord.js';

export default abstract class AbstractMessageHandler {
    /**
     * @param {RegExp} regex
     */
    constructor(private regex: RegExp) { }

    /**
     * @param {string} message
     */
    canHandle(message: string) {
        return this.regex.test(message);
    }


    /* eslint-disable */
    /**
     * @param {Message} message
     * @param {Client} client
     */
    handle(message: Message, client: Client) {
        throw new Error('Not implemented');
    }
    /* eslint-enable */
}
