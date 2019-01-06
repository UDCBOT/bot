import { Client, Message, RichEmbed, TextChannel } from 'discord.js';
import { logChannelId } from '../constants';

export default class Log {
    public static text(text: string, message: Message, client: Client) {
        const logChannel: TextChannel = <TextChannel>client.channels.get(logChannelId);
        if (!logChannel) {
            throw new Error('logChannel not found!');
        }

        logChannel.send(text);
    }
}
