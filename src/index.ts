import {Client} from 'discord.js';
import TeamMessageHandler from './message/handler/TeamMessageHandler';
import JQueryMessageHandler from './message/handler/JQueryMessageHandler';
import Twitter from './twitter/Twitter';

import * as dotenv from 'dotenv';
import GuildJoinHandler from './enter/GuildJoinHandler';

dotenv.load();

const client = new Client;

const messageHandlers = [TeamMessageHandler, JQueryMessageHandler];
const instantiatedHandlers = new Map();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});

// calls the Twitter obj to get the TwitterFeed. Needs Taget ChannelID
function getTwitter() {
    Twitter.getTwitter(client.channels.find('id', '459401206134210570'));
}

// Set Interval for TwitterFeeds. Needs to call a function || 30*60*1000 = 30min
client.setInterval(getTwitter, (30 * 60 * 1000));

client.on('message', (msg) => {
    // do not care about the message if the author is a bot
    if (msg.author.bot) return;

    // get the first handler that can handle this message
    for (const handler of messageHandlers) {
        if (handler.canHandle(msg.content)) {
            if (!instantiatedHandlers.has(handler.HANDLER_ID)) {
                instantiatedHandlers.set(handler.HANDLER_ID, new handler());
            }

            const handlerInstance = instantiatedHandlers.get(handler.HANDLER_ID);

            handlerInstance.handle(msg, client);
            break;
        }
    }
});

client.on('guildMemberAdd', (member) => {
    new GuildJoinHandler(member, client);
});
client.login(process.env.token.toString());
