import { Client, Message } from 'discord.js';
import MessageHandler from './MessageHandler';

export default abstract class AbstractMessageHandler implements MessageHandler {
    abstract handle(message: Message, client: Client): void;
}
