import AbstractMessageHandler from "./AbstractMessageHandler";
import { Message, Client } from "discord.js";
import { jQueryEmoticon } from "../../constants";

export default class JQueryMessageHandler extends AbstractMessageHandler {
    constructor() {
        super(/jquery/gim);
    }

    handle(message: Message, client: Client) {
        message.react(jQueryEmoticon);
    }
}