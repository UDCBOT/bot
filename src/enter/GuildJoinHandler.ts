import { Client, GuildMember, TextChannel } from 'discord.js';
import { welcomeChannelId } from '../constants';
import Lang from '../utils/Lang';

export default class GuildJoinHandler {

    private channel: TextChannel = undefined;

    private lang: Lang;

    constructor(member: GuildMember, client: Client) {
        this.channel = <TextChannel>(client.channels.get(welcomeChannelId));
        if (!this.channel) {
            return;
        }
        this.greet(member);
    }

    private greet(member: GuildMember) {
        this.lang = new Lang('enter\\GuildJoinHandler');

        this.getGreetingString(member.displayName).then((data) => {
            this.channel.send(data);
        });
    }

    private getGreetingString(name): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.lang.getLangFile().then((data) => {
                const keys = Object.keys(data);
                const length = keys.length;
                const greetingKey = keys[Math.floor(Math.random() * length)];

                this.lang.get(greetingKey, { name }).then((data) => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
