import Lang from '../../utils/Lang';
import AbstractMessageHandler from './AbstractMessageHandler';
import { Client, Message } from 'discord.js';
import Log from '../../utils/Log';

const { creators } = require('../../constants');

export default class TeamMessageHandler extends AbstractMessageHandler {

    private static readonly MESSAGE_REGEX: RegExp = new RegExp(`^(${creators.join('|')})`, 'i');

    public static readonly HANDLER_ID: String = 'team';

    static canHandle(message: string): boolean {
        return this.MESSAGE_REGEX.test(message);
    }

    handle(message: Message, client: Client) {
        const lang = new Lang('message\\handler\\TeamMessageHandler');
        lang.get('msg', { author: message.author }).then((data) => {
            message.channel.send(data);
        });
    }
}
