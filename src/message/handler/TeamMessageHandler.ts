const { creators } = require('../../constants');
import AbstractMessageHandler from "./AbstractMessageHandler";
import { Message, Client } from "discord.js";

export default class TeamMessageHandler extends AbstractMessageHandler {
    constructor() {
        super(new RegExp(`^(${creators.join('|')})`, 'i'));
    }

    handle(message: Message, client: Client) {
        message.channel.send(`Ja, ${message.author}, der ist ein super Typ!`);
    }
}
