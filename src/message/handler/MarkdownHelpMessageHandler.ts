import AbstractMessageHandler from './AbstractMessageHandler';
import { Message, Client } from 'discord.js';

export default class MarkdownHelpMessageHandler extends AbstractMessageHandler {

    private static readonly MESSAGE_REGEX: RegExp = /!m(ark)?d(own)?/gim;

    static canHandle(message: string): boolean {
        return this.MESSAGE_REGEX.test(message);
    }

    handle(message: Message, client: Client) {
        message.channel.send('https://lgk.io/files/markdown-code-format-explain-german.png');
    }
}
