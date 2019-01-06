import { Client, Message, RichEmbed, TextChannel } from 'discord.js';
import { logChannelId } from '../constants';

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

        logChannel.send(Log.getEmbedded(action, reaction, message, type));
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
            .addField('Channel', (<TextChannel>message.channel).name, true)
            .addField('Reaction', reaction);
    }
}
