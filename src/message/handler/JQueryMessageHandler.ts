import AbstractMessageHandler from './AbstractMessageHandler';
import { Message, Client } from 'discord.js';
import { jQueryEmoticon } from '../../constants';
import Log from '../../utils/Log';

export default class JQueryMessageHandler extends AbstractMessageHandler {

    private static readonly MESSAGE_REGEX: RegExp = /jquery/gim;

    public static readonly HANDLER_ID: String = 'jquery';

    static canHandle(message: string): boolean {
        return this.MESSAGE_REGEX.test(message);
    }

    handle(message: Message, client: Client) {
        message.react(jQueryEmoticon).catch((reason) => {
            Log.text('JQuery Message', reason, message, message.client, Log.TYPE_ERROR);
        });
    }
}
