import AbstractMessageHandler from "./AbstractMessageHandler";
import { Message, Client } from "discord.js";

export default class JQueryMessageHandler extends AbstractMessageHandler {
    constructor() {
        super(/jquery/gim);
    }

    handle(message: Message, client: Client) {
        message.react('🤢');
    }
}