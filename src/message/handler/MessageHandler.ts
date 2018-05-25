import { Message, Client } from 'discord.js';

export default interface MessageHandler {
    handle(message: Message, client: Client): void;
}
