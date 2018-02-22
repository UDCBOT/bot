import { Client, GuildMember, TextChannel } from 'discord.js';
import { welcomeChannelId }                 from '../constants';

export default class GuildJoinHandler
{

    private channel: TextChannel = undefined;

    private greetingStrings: String[] = [
        'Mit {{name}} wird PHP zu HTML!',
        'Platz da, {{name}} kommt!',
        'Achtung! Das W3C hat ein neuen HTML5-Tag eingeführt: <{{name}}/>',
        '{{name}} braucht kein Framework. Das Framework braucht ihn!',
        '{{name}} bringt iFrames im IE zum laufen!',
    ];

    constructor(member: GuildMember, client: Client) {
        this.channel = <TextChannel>(client.channels.get(welcomeChannelId));
        if (!this.channel) {
            return;
        }
        this.greet(member);
    }

    private greet(member: GuildMember) {
        this.channel.send(this.getGreetingString(member.displayName));
    }

    private getGreetingString(name) {
        const length = this.greetingStrings.length;
        const greetingString = this.greetingStrings[Math.floor(Math.random() * length)];
        return greetingString.replace('{{name}}', name);
    }

}
