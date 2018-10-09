import AbstractMessageHandler from './AbstractMessageHandler';
import { Message, Client } from 'discord.js';
import { markdownHelpImage } from '../../constants';

export default class MarkdownHelpMessageHandler extends AbstractMessageHandler {

    private static readonly MESSAGE_REGEX: RegExp = /!m(ark)?d(own)?/gim;

    public static readonly HANDLER_ID: String = 'markdown-help';

    static canHandle(message: string): boolean {
        return this.MESSAGE_REGEX.test(message);
    }

    handle(message: Message, client: Client) {
        message.channel.send(markdownHelpImage);
    }
}
