import Lang from '../../utils/Lang';
import AbstractMessageHandler from './AbstractMessageHandler';
import { Message, Client } from 'discord.js';
const { creators } = require('../../constants');

export default class TeamMessageHandler extends AbstractMessageHandler {
    constructor() {
        super(new RegExp(`^(${creators.join('|')})`, 'i'));
    }

    handle(message: Message, client: Client) {
        const lang = new Lang('TeamMessageLang');
        message.channel.send(lang.get('answer', { author : message.author }));
    }
}
