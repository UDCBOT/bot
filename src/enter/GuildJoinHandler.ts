import Lang                                 from "../utils/Lang";

const { greetingStringsLocal } = require('../../lang/de-de/GuildJoinLang');
import { Client, GuildMember, TextChannel } from 'discord.js';
import { welcomeChannelId }                 from '../constants';

export default class GuildJoinHandler
{

    private channel: TextChannel = undefined;

    private greetingStrings: String[] = [
        'phpToHtml',
        'place',
        'newTag',
        'noFramework',
        'ieIframes',
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
        const greetingKey = this.greetingStrings[Math.floor(Math.random() * length)];
        const greetingString = greetingStringsLocal[<string>greetingKey];
        return greetingString.replace('{{name}}', name);
    }
}
