import { Client, Message, RichEmbed, TextChannel } from 'discord.js';
import { logChannelId } from '../constants';
import LogFailedException from '../exception/LogFailedException';

export default class Log {

    public static readonly TYPE_INFO: number = 0x4F545C;
    public static readonly TYPE_WARNING: number = 0xFDD835;
    public static readonly TYPE_ERROR: number = 0xC62828;

    public static text(
        action: string,
        reaction: string,
        message: Message,
        client: Client,
        type: number = this.TYPE_INFO,
    ): void {
        const logChannel: TextChannel = <TextChannel>client.channels.get(logChannelId);
        if (!logChannel) {
            throw new Error('logChannel not found!');
        }

        try {
            logChannel.send(Log.getEmbedded(action, reaction, message, type));
        } catch (e) {
            throw new LogFailedException(e.message);
        }
    }

    private static getEmbedded(
        action: string,
        reaction: string,
        message: Message,
        type: number,
    ): RichEmbed {
        return (new RichEmbed())
            .setTitle(action)
            .addField('Action', message.content)
            .addField(
                'User',
                `${message.author.username} (${message.author})`,
                true,
            )
            .setColor(type)
            .addField('Channel', message.channel, true)
            .addField('Reaction', reaction)
            .setTimestamp(new Date(message.createdTimestamp));
    }
}
