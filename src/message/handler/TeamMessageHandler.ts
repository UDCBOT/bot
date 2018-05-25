const { creators } = require('../../constants');
import AbstractMessageHandler from './AbstractMessageHandler';
import { Message, Client } from 'discord.js';

export default class TeamMessageHandler extends AbstractMessageHandler {

    private static readonly MESSAGE_REGEX: RegExp = new RegExp(`^(${creators.join('|')})`, 'i');

    static canHandle(message: string): boolean {
        return this.MESSAGE_REGEX.test(message);
    }

    handle(message: Message, client: Client) {
        message.channel.send(`Ja, ${message.author}, der ist ein super Typ!`);
    }
}
